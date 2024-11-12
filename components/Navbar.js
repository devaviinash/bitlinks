import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between px-5 items-center text-white inset-0 bg-gradient-to-r from-[#7e22ce] via-[#a855f7] to-[#c084fc] relative">
      <div className="logo font-bold text-3xl"><Link href="/">BitLinks</Link></div>
      <ul className="flex justify-center gap-5 items-center">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
          <a
            href="shorten"
            className="relative inline-flex items-center justify-center mt-2 p-2 px-4 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            {/* Gradient Background Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-full"></span>

            {/* Rotating Circle Effect */}
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>

            {/* Button Text */}
            <span className="relative z-10 text-white">Try Now</span>
          </a>
        </li>
        <li className="flex gap-3">
          <a
            href="github"
            className="relative inline-flex items-center justify-center mt-2 p-2 px-4 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            {/* Gradient Background Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-full"></span>

            {/* Rotating Circle Effect */}
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>

            {/* Button Text */}
            <span className="relative z-10 text-white">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
