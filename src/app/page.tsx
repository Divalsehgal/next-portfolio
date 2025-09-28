import { Navbar } from "./components/Navbar";
import styles from "./page.module.scss";
import { About } from "./section/about";
import { Projects } from "./section/projects";
import { Home } from "./section/home";
import { getPortfolioConfig } from "@/lib/portfolio";
import { Experience } from "./section/experiences";
import StarsCanvas from "./components/StarsCanvas";
export default async function Page() {
  const data = await getPortfolioConfig();
  return (
    <main className={styles["container"]}>
      <StarsCanvas />
      <Navbar navbar={data.config.navbar} />
      <Home data={data.config} />
      <Experience data={data.config} />
      <Projects data={data.config} />
      <About data={data.config} />
    </main>
  );
}
