"use client";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = [
  { name: "About", path: "about" },
  { name: "Education", path: "education" },
  { name: "Experience", path: "experience" },
  { name: "Contact", path: "contact" },
];
const NavHeader = () => {
   const [scrolled, setScrolled] = useState(false);
   const [active, setActive] = useState<string | null>(null);
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: scrolled ? "rgba(9, 9, 15, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        <a href="#" className="font-serif text-amber-300" style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.08em" }}>
       IR
        </a>
      <nav className="hidden sm:flex items-center gap-8">
        {Menu.map((item) => (
          <a
            key={item.path}
            href={`#${item.path}`}
            className={`nav-link ${active === item.path ? "active" : ""}`}
            onClick={() => setActive(item.path)}
          >
            {item.name}
          </a>
        ))}
        <a href="/ibhaudur_Rahman_CV.pdf" download className="border border-emerald-400 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300 transition hover:bg-emerald-500 hover:text-black">
          Download CV
        </a>
      </nav>
      <button className="sm:hidden text-gold bg-transparent border-0 p-1" style={{color: "#10B981"}} onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle Menu">
        {menuOpen ? <IoCloseOutline style={{ fontSize: "1.5rem" }} /> : <RxHamburgerMenu style={{ fontSize: "1.5rem" }} />}
      </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden px-6 pb-6 pt-2" style={{background:" rgba(9,9,15,0.97)", borderTop: "1px solid rgba(0, 0, 0, 0.1)"}}>
          {Menu.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              onClick={() => {
                setActive(item.path);
                setMenuOpen(false);
              }}
              className={`block py-2 text-lg ${active === item.path ? "text-emerald-400" : "text-white"}`}
            >
              {item.name}
            </a>
          ))}
          <a href="/ibhaudur_Rahman_CV.pdf" download className="block mt-4 border border-emerald-400 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300 transition hover:bg-emerald-500 hover:text-black">
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

export default NavHeader;
