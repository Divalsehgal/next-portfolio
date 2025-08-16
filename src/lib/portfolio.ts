//import { Client } from "@notionhq/client";

// Notion setup
// const notion = new Client({ auth: process.env.NOTION_API_KEY });
// const notionDbId = process.env.NOTION_DATABASE_ID!;

// Fetch GitHub JSON config
export async function getGitHubConfig() {
    const res = await fetch(
        "https://raw.githubusercontent.com/Divalsehgal/portfolio-config/main/config.json",
        // {
        //     next: { revalidate: 60 },
        // }
    );

    if (!res.ok) {
        console.error("GitHub fetch failed:", res.status, res.statusText);
        throw new Error("Failed to fetch GitHub JSON");
    }

    return res.json();
}

// Fetch Notion blog posts

// export async function getNotionPosts() {
//     const response = await notion.databases.query({
//         database_id: notionDbId,
//         filter: {
//             property: "Status", // must match exact column name
//             status: {
//                 equals: "Published", // or "Draft", "In Review" etc.
//             },
//         },
//         sorts: [
//             { property: "Publish Date", direction: "descending" }, // optional
//         ],
//     });


//     // return response.results.map((row: any) => ({
//     //     id: row.id,
//     //     title: row.properties.Title.title[0]?.plain_text || "Untitled",
//     //     //category: row.properties.Category.multi_select.map((c: any) => c.name),
//     //     tags: row.properties.Tags.multi_select.map((t: any) => t.name),
//     //     date: row.properties["Publish Date"].date?.start,
//     // }));
// }
// Unified function
export async function getPortfolioConfig() {
    const [config] = await Promise.all([
        getGitHubConfig(),
        //getNotionPosts(),
    ]);

    return {
        ...config,
        //  blog,
    };
}
