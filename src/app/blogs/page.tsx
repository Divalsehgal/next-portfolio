import { getNotionPosts } from "@/lib/portfolio";
import { BlogsPage } from "../containers/blogs";

export default async function Blogs() {
  const posts = await getNotionPosts();

  return (<BlogsPage posts={posts} />);

}
