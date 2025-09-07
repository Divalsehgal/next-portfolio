import { Navbar } from "./components/Navbar";
import styles from "./page.module.scss";
import { About } from "./section/about";
import { Skills } from "./section/skills";
import { Projects } from "./section/projects";
import { Home } from "./section/home";
import { getPortfolioConfig } from "@/lib/portfolio";
import { Experience } from "./section/experiences";
export default async function Page() {
  const data = await getPortfolioConfig();
  return (
    <main className={styles["container"]}>
      <Navbar {...data} />
      <Home {...data} />
      <Experience {...data} />
      <Skills {...data} />
      <Projects {...data} />
      <About {...data} />
    </main>
  );
}
