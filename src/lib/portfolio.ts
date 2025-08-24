import { Client, APIResponseError } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type NotionBlogPost = {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    date: string | null;
}

// Notion setup
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const notionDbId = process.env.NOTION_DATABASE_ID!;

// Retry configuration
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000; // 1 second

async function withRetry<T>(
    operation: () => Promise<T>,
    retryCount = 0
): Promise<T> {
    try {
        return await operation();
    } catch (error) {
        if (
            error instanceof APIResponseError &&
            error.code === "rate_limited" &&
            retryCount < MAX_RETRIES
        ) {
            // Exponential backoff with jitter
            const delay = INITIAL_RETRY_DELAY * Math.pow(2, retryCount) +
                Math.random() * 1000;
            console.log(`Rate limited. Retrying in ${Math.round(delay / 1000)}s...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return withRetry(operation, retryCount + 1);
        }
        throw error;
    }
}

// Fetch GitHub JSON config
export async function getGitHubConfig() {
    const res = await fetch(
        "https://raw.githubusercontent.com/Divalsehgal/portfolio-config/main/config.json",
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        console.error("GitHub fetch failed:", res.status, res.statusText);
        throw new Error("Failed to fetch GitHub JSON");
    }

    return res.json();
}

// Fetch Notion blog posts (metadata only)
export async function getNotionPosts(): Promise<NotionBlogPost[]> {
    const response = await withRetry(() =>
        notion.databases.query({
            database_id: notionDbId,
            filter: {
                property: "Status",
                status: { equals: "Published" },
            },
            sorts: [{ property: "Publish Date", direction: "descending" }],
        })
    );

    return response.results.map((page) => {
        const props = (page as PageObjectResponse).properties;
        return {
            id: page.id,
            title: props.Title?.type === 'title'
                ? props.Title.title[0]?.plain_text || "Untitled"
                : "Untitled",
            slug: props.Slug?.type === 'rich_text'
                ? props.Slug.rich_text[0]?.plain_text?.trim() || page.id
                : page.id,
            tags: props.Tags?.type === 'multi_select'
                ? props.Tags.multi_select.map(tag => tag.name)
                : [],
            date: props["Publish Date"]?.type === 'date'
                ? props["Publish Date"].date?.start || null
                : null,
        };
    });
}


// Fetch full content (blocks) of one blog post
export async function getNotionPostContent(pageId: string) {
    const blocks = [];
    let cursor: string | undefined = undefined;

    while (true) {
        const response = await withRetry(() =>
            notion.blocks.children.list({
                block_id: pageId,
                start_cursor: cursor,
            })
        );

        blocks.push(...response.results);

        if (!response.has_more) break;
        cursor = response.next_cursor || undefined;
    }

    return blocks;
}

// Unified function
export async function getPortfolioConfig() {
    const [config, blog] = await Promise.all([
        getGitHubConfig(),
        getNotionPosts(),
    ]);

    return {
        ...config,
        blog,
    };
}
