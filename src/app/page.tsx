import { Navbar } from "./components/Navbar";
import styles from "./page.module.scss";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Home } from "./pages/home";
import { getPortfolioConfig } from "@/lib/portfolio";
import { Experience } from "./pages/experiences";
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
