import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormSignup from "../components/fragments/FromSignup";

function SignUp() {
  return (
    <AuthLayout>
      <FormSignup />
    </AuthLayout>
  );
}

export default SignUp;
