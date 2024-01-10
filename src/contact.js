import Mustache from "mustache";
import { render as navbarRender } from "./navbar";

const contentContainer = document.querySelector("#content");

const template = `
<div class="grid place-content-center h-full">
				<div class="bg-white px-8 rounded-md">
					<h2 class="text-4xl font-bold py-12">Visit us or Call us today!</h2>
					<div class="flex flex-col items-start gap-10 pb-12 md:flex-row">
						<section>
							<h3 class="text-3xl">Opening <span class="font-bold">Hours</span></h3>
							<div class="mt-4 text-lg">
								<p>Tues - Thurs: 9am - 5pm</p>
								<p>Fri: 9am - 7pm / Sat: 8am - 4pm</p>
								<p>Sun - Mon: Closed</p>
							</div>
						</section>
						<form
							action="/"
							method="post"
							class="space-y-4"
						>
							<div class="relative">
								<input
									type="text"
									name="name"
									id="name"
									placeholder=""
									class="border-2 border-slate-400 py-2 px-4 rounded-sm min-w-[400px] focus:border-slate-800 peer"
								/>
								<label
									for="name"
									class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-[&:not(:placeholder-shown)]:-z-10 peer-focus:-z-10"
									>Name</label
								>
							</div>
							<div class="relative">
								<input
									type="email"
									name="email"
									id="email"
									placeholder=""
									class="border-2 border-slate-400 py-2 px-4 rounded-sm min-w-[400px] focus:border-slate-800 peer"
								/>
								<label
									for="email"
									class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 peer-[&:not(:placeholder-shown)]:-z-10 peer-focus:-z-10"
									>Email</label
								>
							</div>
							<div class="relative">
								<textarea
									name="message"
									id="message"
									placeholder=""
									class="border-2 border-slate-400 h-48 py-3 px-4 rounded-sm min-w-[400px] focus:border-slate-800 peer"
								></textarea>
								<label
									for="message"
									class="absolute left-4 top-4 text-gray-500 peer-[&:not(:placeholder-shown)]:-z-10 peer-focus:-z-10"
									>Message</label
								>
							</div>
							<div>
								<button class="bg-orange-500 text-white px-4 py-2 text-lg font-bold rounded-sm">Submit</button>
							</div>
						</form>
					</div>
				</div>
</div>
`;

function render() {
	navbarRender();
	contentContainer.innerHTML = "";
	contentContainer.innerHTML = Mustache.render(template, {});
}

export { render };
