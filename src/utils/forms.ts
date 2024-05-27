import { type FormEvent } from "react";

export function eventToFormData(event: FormEvent): Record<string, any> {
  event.preventDefault();
  const formData = new FormData(event.target as any);
  // Convert FormData to a plain object
  const formDataObject: Record<string, any> = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  return formDataObject;
}
