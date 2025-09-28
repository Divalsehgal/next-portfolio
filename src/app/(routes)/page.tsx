import { Navbar } from "../components/Navbar";
import styles from "./page.module.scss";
import { About } from "../containers/main/about";
import { Projects } from "../containers/main/projects";
import { Home } from "../containers/main/home";
import { getPortfolioConfig } from "@/app/(routes)/services/portfolio";
import { Experience } from "../containers/main/experiences";
import StarsCanvas from "../components/StarsCanvas";
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
