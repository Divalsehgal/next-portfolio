import { getNotionPosts } from "@/app/services/notion";
import { BlogsPage } from "../../containers/blogs";

export default async function Blogs() {
  const posts = await getNotionPosts();
  return <BlogsPage posts={posts} />;
}
