import { fetchWithRetry } from "@/app/utils/fetchWithRetry";
import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type NotionBlogPost = {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    date: string | null;
    description: string | null;
}

// Notion setup
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const notionDbId = process.env.NOTION_DATABASE_ID!;


// Fetch Notion blog posts (metadata only)
const getNotionPosts = async (): Promise<NotionBlogPost[]> => {
    const response = await fetchWithRetry(() =>
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
            description: props.Description?.type === 'rich_text'
                ? props.Description.rich_text[0]?.plain_text || null
                : null,
        };
    });
}

// Fetch full content (blocks) of one blog post
const getNotionPostContent = async (pageId: string) => {
    const blocks = [];
    let cursor: string | undefined = undefined;

    while (true) {
        const response = await fetchWithRetry(() =>
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


export { getNotionPosts, getNotionPostContent, type NotionBlogPost };