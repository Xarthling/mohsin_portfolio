import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Using Heroicons from react-icons
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/Sign-Logo/signature (1).svg?react";

const sections = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 dark:bg-[#0a0a0a]/90 bg-[#f2ebeb]/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#hero" className="z-[60]">
          <Logo className="w-32 md:w-40 h-auto text-black dark:text-gray-300" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {sections.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-md font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-4 md:hidden z-[60]">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="text-3xl text-gray-800 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen w-full bg-white dark:bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {sections.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-gray-800 dark:text-white hover:text-indigo-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;