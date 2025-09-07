/* eslint-disable @typescript-eslint/no-explicit-any */

import { getNotionPosts, getNotionPostContent } from "@/lib/portfolio"; // your helpers
import styles from "./styles.module.scss";

type Props = {
  params: { slug: string };
};

// ✅ Generate static params (so Next can pre-render)
export async function generateStaticParams() {
  const posts = await getNotionPosts();
  return posts.map((post) => ({
    slug: post.id, // or use a slug property if you have one
  }));
}

export default async function BlogPost({ params }: Props) {
  const posts = await getNotionPosts();
  const post = posts.find(async (p) => p.id === params.slug);

  if (!post) {
    return <div className={styles["blog-post__not-found"]}>Post not found</div>;
  }

  const blocks = await getNotionPostContent(post.id);

  return (
    <article className={styles["blog-post"]}>
      <header className={styles["blog-post__header"]}>
        <h1 className={styles["blog-post__title"]}>{post.title}</h1>
        {post.date && (
          <p className={styles["blog-post__date"]}>
            {new Date(post.date).toLocaleDateString()}
          </p>
        )}
        {post.tags && (
          <ul className={styles["blog-post__tags"]}>
            {post.tags.map((tag) => (
              <li key={tag} className={styles["blog-post__tag"]}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <section className={styles["blog-post__content"]}>
        {blocks.map((block: any) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={block.id}>
                  {block.paragraph?.rich_text
                    ?.map((t: any) => t.plain_text)
                    .join(" ")}
                </p>
              );

            case "heading_1":
              return (
                <h1 key={block.id}>
                  {block.heading_1?.rich_text
                    ?.map((t: any) => t.plain_text)
                    .join(" ")}
                </h1>
              );

            case "heading_2":
              return (
                <h2 key={block.id}>
                  {block.heading_2?.rich_text
                    ?.map((t: any) => t.plain_text)
                    .join(" ")}
                </h2>
              );

            case "bulleted_list_item":
              return (
                <li key={block.id}>
                  {block.bulleted_list_item?.rich_text
                    ?.map((t: any) => t.plain_text)
                    .join(" ")}
                </li>
              );

            default:
              return null;
          }
        })}
      </section>
    </article>
  );
}
