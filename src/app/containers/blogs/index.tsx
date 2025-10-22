import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { NotionBlogPost } from "@/app/services/notion";

export const BlogsPage = ({ posts }: { posts: NotionBlogPost[] }) => {
  return (
    <div className={classNames(styles["blogs"], "page")} id="blogs">
      <h1 className={styles["blogs__title"]}>All Blogs</h1>

      <ul className={styles["blogs__list"]}>
        {posts.map((post) => (
          <li key={post.id} className={styles["blogs__item"]}>
            <Link
              href={`/blogs/${post.slug}`}
              className={styles["blogs__link"]}
            >
              {post.title}
            </Link>
            <p className={styles["blogs__date"]}>
              {new Date(post.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
