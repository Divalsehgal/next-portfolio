import styles from "./page.module.scss";
import { About } from "../containers/main/about";
import { Projects } from "../containers/main/projects";
import { Home } from "../containers/main/home";
import { Experience } from "../containers/main/experiences";
import StarsCanvas from "../components/StarsCanvas";
import { getPortfolioConfig } from "../services/portfolio";
export default async function Page() {
  const data = await getPortfolioConfig();
  return (
    <main className={styles["container"]}>
      <StarsCanvas />
      <Home data={data.config} />
      <Experience data={data.config} />
      <Projects data={data.config} />
      <About data={data.config} />
    </main>
  );
}
