import React, { useState } from "react";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SingUpForm";
import signInImage from "../images/sign_in.png";

export const SignIn = () => {
  const [formState, setFormState] = useState(true);

  return (
    <div className="grid grid-cols-2 min-h-screen min-w-screen">
      {formState && <SignInForm setFormState={(val) => setFormState(val)} />}
      {!formState && <SignUpForm setFormState={(val) => setFormState(val)} />}
      <div className="h-full flex items-center justify-center bg-blue-700">
        <img src={signInImage} alt="signinimage" />
      </div>
    </div>
  );
};
