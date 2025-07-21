import Button from "./components/Button";
import { IconJavascript, IconNodejs, IconReact } from "./components/Icons";

export default function Home() {
  return (
    <div className="">
      hi my name is dival<Button>Click Me</Button>
      <div className="heading heading--regular">Regular Display Text</div>
      <div className="heading heading--semibold">Semibold Display Text</div>
      <div className="heading heading--bold">Bold Display Text</div>
      <div className="heading heading--extrabold">Extra Bold Display Text</div>
      <div className="heading heading--outlined heading--regular">
        Outlined Regular Display Text
      </div>
      <div className="heading heading--outlined heading--semibold">
        Outlined Semibold Display Text
      </div>
      <div className="heading heading--outlined heading--bold">
        Outlined Bold Display Text
      </div>
      <div className="heading heading--outlined heading--extrabold">
        Outlined Extra Bold Display Text
      </div>
      <IconJavascript height={24} width={24}/>
      <IconNodejs />
      <IconReact />
    </div>
  );
}
