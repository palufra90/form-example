import React from "react";

interface Props {
  name: string;
  label: string;
  required: boolean;
  type?: string;
}

export default function FormReact(props: Props) {
  const { label, name, required, type = "text" } = props;
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label}:
      <input
        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
