import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
  const { children } = props;


    return (
        <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
          {/* card start */}
          <div className="w-full max-w-sm bg-white rounded-xl shadow-md px-6 py-8">
            <Logo />
            {children}
            
          </div>
          {/* card end */}
        </main>
      );
}

export default AuthLayout;
