import { ClassSample } from "./ClassSample";
import { number } from "../config2";

export class ClassSample2 extends ClassSample {
  run() {
    console.log("ClassSample2", number);
  }
  generate() {
    super.generate();
    const obj2 = {
      title: super.generate().title,
      desc: super.generate().desc,
      pubDate: super.generate().pubDate,
      video: "video.mpw4"
    }
    return obj2;
  }
  squeeze(): void {
    console.log("wow")
  }
  sample(): void {
    console.log("mainブランチでの修正");
  }
}

new ClassSample2();