import { Navbar } from "./components/Navbar";
import styles from "./page.module.scss";
import { About } from "./pages/about";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Home } from "./pages/home";
export default function Page() {
  return (
    <main className={styles["home-page"]}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
