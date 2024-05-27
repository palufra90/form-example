import React from "react";
import { formState } from "./form.store";

export default function FormState() {
  const [userName, setUsersName] = React.useState<string>(" ");
  const [email, setEmail] = React.useState<string>("");

  formState.listen(() => {
    setEmail(formState.get().email);
    setUsersName(formState.get().userName);
  });

  return (
    <>
      <h4>Form state</h4>
      <p>
        name: {userName}
        <br />
        email: {email}
      </p>
    </>
  );
}
