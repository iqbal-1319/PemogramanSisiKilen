import React from "react";
import { Link } from "react-router-dom";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignIn() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form>
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

          <div className="mb-3">
            <CheckBox />
          </div>

          <Button>Login</Button>
        </form>
      </div>
      {/* form end */}

      {/* divider start */}
      <div className="my-9 relative flex flex-col justify-center items-center text-xs text-gray-400">
        <div className="border border-gray-300 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
      </div>
      {/* divider end */}

      {/* sign in with Google start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.736.868 7.261 2.607 10.388l7.904-6.051c-.447-1.364-.697-2.82-.697-4.337z"
                fill="#FBBC05"
              />
              <path
                d="M23.714 10.133c3.312 0 6.306 1.174 8.656 3.093l6.836-6.826C35.036 2.773 29.695.533 23.714.533 14.427.533 6.445 5.844 2.623 13.604l7.909 6.04C12.355 14.112 17.549 10.133 23.714 10.133z"
                fill="#EB4335"
              />
              <path
                d="M23.714 37.867c-6.164 0-11.358-3.978-13.18-9.51l-7.909 6.038c3.822 7.761 11.803 13.072 21.09 13.072 5.732 0 11.205-2.035 15.312-5.848l-7.507-5.804c-2.118 1.334-4.786 2.052-7.804 2.052z"
                fill="#34A853"
              />
              <path
                d="M46.145 24c0-1.387-.214-2.88-.534-4.267L23.714 19.733v9.067h12.605c-.63 3.091-2.345 5.468-4.8 7.014l7.507 5.804c4.315-4.004 7.121-9.969 7.121-17.618z"
                fill="#4285F4"
              />
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign in with Google end */}

      {/* link to register */}
      <div className="flex justify-center">
        <Link to="/register" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
    </>
  );
}

export default FormSignIn;
