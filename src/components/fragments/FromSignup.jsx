import React from "react";
import { Link } from "react-router-dom";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignup() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form>
          <div className="mb-6">
            <LabeledInput
              label="Full Name"
              id="name"
              type="text"
              placeholder="John Doe"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="************"
              name="password"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="************"
              name="confirmPassword"
            />
          </div>

          <div className="mb-4">
            <CheckBox />
          </div>

          <Button>Create Account</Button>
        </form>
      </div>
      {/* form end */}

      {/* link start */}
      <div className="mt-8 flex justify-center">
        <Link to="/login" className="text-primary text-sm font-bold">
          sign in here
        </Link>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignup;
