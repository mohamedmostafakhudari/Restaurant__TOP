import Mustache from "mustache";
import { render as homeRender } from "./home";
import { render as menuRender } from "./menu";
import { render as contactRender } from "./contact";

const content = document.querySelector("#content");

let navItems = [
	{
		label: "Home",
		active: true,
	},
	{
		label: "Menu",
		active: false,
	},
	{
		label: "Contact",
		active: false,
	},
];

const view = {
	navItems,
};

const template = `
<nav class="bg-gradient-to-b from-black/60 backdrop-blur-sm to-black/20 shadow-md shadow-black/20 py-6">
<div class="container mx-auto px-4">
  <ul class="flex items-center justify-between">
    {{#navItems}}
      <li data-label="{{ label }}" class="text-2xl leading-none pt-5 font-bold rounded p-4 px-10 text-white {{^active}}bg-gradient-to-b from-orange-600 from-50% to-orange-500 to-50% bg-[size:100%_200%] bg-[position:0%_0%]{{/active}} duration-200 ease-in-out cursor-pointer hover:bg-[position:0%_100%] relative overflow-hidden {{#active}}bg-violet-500{{/active}}">{{ label }}</li>
    {{/navItems}}
  </ul>
</div>
</nav>`;

function render() {
	const $navElement = document.querySelector("nav");
	if ($navElement) {
		$navElement.remove();
	}
	console.log(view);
	content.insertAdjacentHTML("beforebegin", Mustache.render(template, view));
	bindEvents();
}
function bindEvents() {
	const $navItems = document.querySelectorAll("nav li");
	$navItems.forEach(($item) => {
		$item.addEventListener("click", (e) => {
			const label = e.target.dataset.label;
			if (label === "Home") {
				addActiveState(label);
				homeRender();
			} else if (label === "Menu") {
				addActiveState(label);

				menuRender();
			} else if (label === "Contact") {
				addActiveState(label);

				contactRender();
			}
		});
	});
}
function addActiveState(label) {
	for (const item of navItems) {
		if (item.label === label) {
			item.active = true;
		} else {
			item.active = false;
		}
	}
}
export { render };
