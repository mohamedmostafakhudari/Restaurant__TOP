import Mustache from "mustache";

const content = document.querySelector("#content");

const navItems = [
	{
		label: "Home",
	},
	{
		label: "Menu",
	},
	{
		label: "Contact",
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
      <li class="text-2xl leading-none pt-5 font-bold rounded p-4 px-10 text-white bg-gradient-to-b from-orange-600 from-50% to-orange-500 to-50% bg-[size:100%_200%] bg-[position:0%_0%] duration-200 ease-in-out cursor-pointer hover:bg-[position:0%_100%]">{{ label }}</li>
    {{/navItems}}
  </ul>
</div>
</nav>`;

function render() {
	const $navElement = document.querySelector("nav");
	if ($navElement) {
		$navElement.remove();
	}

	content.insertAdjacentHTML("beforebegin", Mustache.render(template, view));
}

export { render };
