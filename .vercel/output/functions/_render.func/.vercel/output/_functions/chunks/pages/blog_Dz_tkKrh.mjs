import { c as createComponent, r as renderTemplate, h as renderComponent, f as createAstro, m as maybeRenderHead } from '../astro_BZ7bInFJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$GenericLayout } from './about_BSEWbQ61.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  return renderTemplate`${renderComponent($$result, "GenericLayout", $$GenericLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Astro Learning Blog</h1> <p>This is where I will post about my journey learning Astro.</p> <ul> <li><a href="/posts/post-1/">Post 1</a></li> </ul> ` })}`;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/pages/blog.astro", void 0);

const $$file = "/Users/francesca.palu/Desktop/projects/astro/form-example/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
//# sourceMappingURL=blog_Dz_tkKrh.mjs.map
