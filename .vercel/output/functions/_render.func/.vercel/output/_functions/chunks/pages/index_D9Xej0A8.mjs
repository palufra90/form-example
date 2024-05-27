import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, f as createAstro } from '../astro_BZ7bInFJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { map } from 'nanostores';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$GenericLayout } from './about_BSEWbQ61.mjs';
import 'clsx';

const formState = map({ userName: "", email: "" });

function FormReact$1(props) {
  const { label, name, required, type = "text" } = props;
  return /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium leading-6 text-gray-900", children: [
    label,
    ":",
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
        name,
        required,
        type
      }
    )
  ] });
}

const $$Astro$2 = createAstro();
const $$FormAstro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormAstro;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      formState.set({
        userName: data.get("userName")?.toString() || "",
        email: data.get("email")?.toString() || ""
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="flex flex-col gap-4"> ${renderComponent($$result, "Input", FormReact$1, { "label": "Username", "required": true, "name": "userName" })} ${renderComponent($$result, "Input", FormReact$1, { "label": "Email", "required": true, "name": "email", "type": "email" })} ${renderComponent($$result, "Input", FormReact$1, { "label": "Password", "required": true, "name": "password", "type": "password" })} <button class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">Submit</button> </form>`;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/components/FormAstro.astro", void 0);

function eventToFormData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  return formDataObject;
}

function FormReact() {
  useState("");
  useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = eventToFormData(e);
    formState.set({
      userName: formData.get("userName")?.toString() || "",
      email: formData.get("email")?.toString() || ""
    });
  };
  return /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-4", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(FormReact$1, { label: "Username", required: true, name: "userName" }),
    /* @__PURE__ */ jsx(FormReact$1, { label: "Email", required: true, name: "email", type: "email" }),
    /* @__PURE__ */ jsx(FormReact$1, { label: "Password", required: true, name: "password", type: "password" }),
    /* @__PURE__ */ jsx("button", { className: "bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400", children: "Submit" })
  ] });
}

const $$Astro$1 = createAstro();
const $$FormState = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormState;
  const { userName, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h4>Form state</h4> <p>
name: ${userName} <br>
email: ${email} </p>`;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/components/FormState.astro", void 0);

function FormState() {
  const { userName, email } = formState.get();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h4", { children: "Form state" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "name: ",
      userName,
      /* @__PURE__ */ jsx("br", {}),
      "email: ",
      email
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let userName = "";
  let email = "";
  if (Astro2.request.method === "POST") {
    try {
      console.log(`****here again*****`);
      const data = await Astro2.request.formData();
      userName = data.get("name")?.toString() || "";
      email = data.get("email")?.toString() || "";
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "GenericLayout", $$GenericLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1> <a href="/">Astro form example</a> </h1> <h3 class="mt-6">Astro example</h3> <p>
This is a simple example of a form built with Astro. It uses a POST method
    to get the data.
</p> <div class="grid grid-cols-2"> <div class="flex items-start justify-start mt-4"> ${renderComponent($$result2, "FormAstro", $$FormAstro, {})} </div> <div class="mt-4"> ${renderComponent($$result2, "FormState", $$FormState, { "userName": userName, "email": email })} </div> </div> <div class="mt-10"></div> <h3 class="mt-6">React example</h3> <p>
This is a simple example of a form built with React. It uses nanostore to
    update the form state.
</p> <div class="grid grid-cols-2"> <div class="flex items-start justify-start mt-4"> ${renderComponent($$result2, "FormReact", FormReact, {})} </div> <div class="my-4"> ${renderComponent($$result2, "FormStateReact", FormState, {})} </div> </div> ` })}`;
}, "/Users/francesca.palu/Desktop/projects/astro/form-example/src/pages/index.astro", void 0);

const $$file = "/Users/francesca.palu/Desktop/projects/astro/form-example/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_D9Xej0A8.mjs.map
