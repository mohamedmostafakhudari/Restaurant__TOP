import Mustache from "mustache";
import { render as navbarRender } from "./navbar";
const contentContainer = document.querySelector("#content");

const template = `<div class="grid grid-cols-[1fr_1fr] h-full">
<div class="bg-gradient-to-b text-center from-black/20 to-black/60 px-8">
  <h1 class="text-5xl font-serif leading-[1.4] py-16 text-white uppercase font-black tracking-widest">
   {{{ heroHeading }}}
  </h1>
  <p class="text-xl text-white">{{heroText}}</p>
</div>
</div>`;

const view = {
	heroHeading: "A meal <br /> that you will <br /> remember!",
	heroText: "Our restaurant is one of the most famous in the city, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, saepe!",
};

function render() {
	navbarRender();
	contentContainer.innerHTML = "";
	contentContainer.innerHTML = Mustache.render(template, view);
}

export { render };
