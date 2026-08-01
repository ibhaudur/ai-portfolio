"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, useScroll, useSpring } from "framer-motion";

const Menu = [
  { name: "About", path: "about" },
  { name: "Education", path: "education" },
  { name: "Experience", path: "experience" },
  { name: "Contact", path: "contact" },
  // { name: "Admin", path: "/admin" },
];
const NavHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");
  const pathName = usePathname();
  let pathValidate = pathName?.split("/")?.includes("admin");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 30) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <>
      <header
        className={`Header fixed top-0 left-0 right-0 z-10 ${
          navbar ? "bg-gray-700" : "bg-gray-800"
        }`}
      >
        {" "}
        <nav>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 sm:py-3 lg:px-8">
            <div className="relative flex h-16 items-center justify-between px-2 sm:px-0">
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
                  <h3 className="text-orange-500">Portfolio</h3>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <RxHamburgerMenu className="sm:hidden text-2xl text-green-500" />
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {pathValidate ? (
                      <Link href="/" className="inactive" aria-current="page">
                        Portfolio
                      </Link>
                    ) : (
                      Menu.map((item, index) => {
                        return (
                          <Link
                            href={
                              item.name === "Admin"
                                ? item.path
                                : `#${item.path}`
                            }
                            key={index}
                            onClick={() => setActive(item.path)}
                            className={
                              active === item.path ? "active" : "inactive"
                            }
                            aria-current="page"
                          >
                            {item.name}
                          </Link>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </>
  );
};

export default NavHeader;
