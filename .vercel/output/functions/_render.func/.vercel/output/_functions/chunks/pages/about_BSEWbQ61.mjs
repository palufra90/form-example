import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, f as createAstro, g as renderHead, h as renderComponent } from '../astro_BZ7bInFJ.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';

const $$Astro$2 = createAstro();
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/components/HeaderLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$GenericLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GenericLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900"> <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex justify-end gap-x-4 h-14 max-w-screen-2xl items-center relative py-[2.125rem]"> <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog" }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about" }, { "default": ($$result2) => renderTemplate`About` })} </div> </nav> </header> <main class="w-100 mt-20"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-black text-white py-4 mt-10"> <div> <p class="text-center">© 2024 Astro</p> </div> </footer> </body></html>`;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/layouts/GenericLayout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "GenericLayout", $$GenericLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1> <a href="/">Astro example</a> </h1> ` })}`;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/pages/about.astro", void 0);

const $$file = "/Users/francesca.palu/Desktop/projects/astro/form-example/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GenericLayout as $, about as a };
//# sourceMappingURL=about_BSEWbQ61.mjs.map
