import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormSignIn from "../components/fragments/FormSignin";

function SignIn() {
  return (
    <AuthLayout>
      <FormSignIn />
    </AuthLayout>
  );
}

export default SignIn;
