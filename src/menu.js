import Mustache from "mustache";
import { render as navbarRender } from "./navbar";

const contentContainer = document.querySelector("#content");

const menuItems = [
	{
		name: "Hamburger",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/burger-4145977_640.jpg",
	},
	{
		name: "Eggs",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/eggs-1467286_640.jpg",
	},
	{
		name: "Pancakes",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/pancakes-2291908_640.jpg",
	},
	{
		name: "Pizza",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/plate-2802332_640.jpg",
	},
	{
		name: "Pancakes",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/pancakes-2291908_640.jpg",
	},
	{
		name: "Pizza",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/plate-2802332_640.jpg",
	},

	{
		name: "Eggs",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/eggs-1467286_640.jpg",
	},
	{
		name: "Hamburger",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/burger-4145977_640.jpg",
	},
	{
		name: "Eggs",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/eggs-1467286_640.jpg",
	},
	{
		name: "Hamburger",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/burger-4145977_640.jpg",
	},

	{
		name: "Pancakes",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/pancakes-2291908_640.jpg",
	},
	{
		name: "Pizza",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est pariatur illum hic aliquid voluptatem dolores magni ipsum veniam commodi!",
		imgUrl: "./assets/plate-2802332_640.jpg",
	},
];
const template = `
<div class="container gap-10 mx-auto grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] px-4 mt-16 py-6 animate-[fadeIn_0.5s_ease-in-out]">
  {{#menuItems}}
				<div class="relative rounded-md overflow-hidden group">
					<div class="absolute inset-0 px-6 bg-black/60 text-white grid grid-cols-1 items-center duration-300 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
						<div class="py-4 pb-0">
							<h3 class="text-3xl leading-[1.6]">{{ name }}</h3>
							<p class="">{{ desc }}</p>
						</div>
						<a
							href="#"
							class="text-orange-500 ml-auto text-right text-lg capitalize p-4"
							>read more</a
						>
					</div>
          <div class="h-full">
            <img
              src="{{ imgUrl }}"
              alt="{{ name }}"
              class="w-full h-full object-cover object-center"
            />
          </div>
				</div>
  {{/menuItems}}
</div>
`;

const view = {
	menuItems,
};

function render() {
	navbarRender();
	contentContainer.innerHTML = "";
	contentContainer.innerHTML = Mustache.render(template, view);
}

export { render };
