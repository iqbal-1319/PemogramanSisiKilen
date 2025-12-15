import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="bg-defaultBlack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between px-4 sm:px-7 py-12">
        <div>
          <div className="mb-10">
            <Logo variant="secondary" />
          </div>

          <nav className="space-y-2">
            {["Overview", "Balances", "Transactions"].map((item, i) => (
              <div
                key={i}
                className="flex items-center hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md cursor-pointer"
              >
                <div className="mx-auto sm:mx-0">{item[0]}</div>
                <div className="ms-3 hidden sm:block">{item}</div>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center bg-special-bg3 text-white px-4 py-3 rounded-md cursor-pointer">
          <div className="mx-auto sm:mx-0">L</div>
          <div className="ms-3 hidden sm:block">Logout</div>
        </div>

        <div>
          <div className="border my-10 border-special-bg"></div>
          <div className="flex justify-between items-center text-sm">
            <div>Avatar</div>
            <div className="hidden sm:block">
              <div>Username</div>
              <div className="text-special-bg2">View Profile</div>
            </div>
            <div className="hidden sm:block">icon</div>
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="bg-special-mainBg flex-1 flex flex-col">
        <header className="border-b border-gray-05 px-6 py-7 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="font-bold text-2xl">Username</div>
            <div className="text-gray-03 hidden sm:block">May 19, 2023</div>
          </div>

          <div className="flex items-center gap-6">
            <div>icon</div>
            <Input backgroundColor="bg-white" border="border-white" />
          </div>
        </header>

        <main className="flex-1 px-6 py-4">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
