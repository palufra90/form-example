import React, { type FormEvent, useState } from "react";
import { formState } from "./form.store";
import { eventToFormData } from "@/utils/forms";
import Input from "./Input";

export default function FormReact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("submitting form");
    e.preventDefault();
    const formData = eventToFormData(e);
    console.log(formData);
    formState.set({
      userName: formData["userName"].toString() || "",
      email: formData["email"]?.toString() || "",
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input label="Username" required={true} name="userName" />
      <Input label="Email" required={true} name="email" type="email" />
      <Input label="Password" required={true} name="password" type="password" />
      <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
        Submit
      </button>
    </form>
  );
}
