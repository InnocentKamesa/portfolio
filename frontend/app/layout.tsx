import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innocent Kamesa",
  description: "This is my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"

    >
      <body className="bg-white text-black min-h-full flex flex-col">
        <div className="drawer">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle lg:hidden" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar w-full bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
              <div className="flex-none lg:hidden ml-auto">
                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square bg-white text-black border-0 drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2 font-bold text-lg"><a href="#hero">Innocent Kamesa</a></div>
              <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  {/**contact me */}
                    <li><div className="">
                        <a href="#contact" className="btn btn-neutral rounded-full">Contact</a>
                    </div></li>
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {children}
          </div>
          <div className="drawer-side  backdrop-blur-md">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-white/50"></label>
            <ul className="menu bg-white min-h- w-70 h-full  py-30 px-4">
              {/* Sidebar content here */}
              <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
