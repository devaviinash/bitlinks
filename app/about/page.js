"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function About() {
  return (
    <main className="bg-purple-100 bg-gradient-to-r from-purple-400 via-purple-300">
      {/* Main Section: Left and Right parts */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen py-16 bg-purple-100 text-center bg-gradient-to-r from-purple-400 via-purple-300 animate-fadeInFast">
        {/* Left Column: Our Mission, Key Features & Get in Touch */}
        <div className="flex flex-col gap-16 justify-around">
          {/* Upper Left: Our Mission */}
          <div className="flex flex-col gap-4 items-center justify-center animate-slideInLeft">
            <h2 className={`text-5xl font-bold text-purple-500 ${poppins.className} animate-textPop`}>
              Our Mission
            </h2>
            <p className="px-10 text-xl text-gray-700 animate-fadeInDelayFast">
              At <strong>BitLinks</strong>, we aim to provide a <strong>reliable</strong>, <strong>secure</strong>, and <strong>user-friendly</strong> URL shortening service that helps individuals and businesses simplify their online presence.
            </p>
          </div>

          {/* Lower Left: Key Features & Get in Touch in Horizontal Row */}
          <div className="flex flex-row gap-16 justify-center animate-slideInRight">
            {/* Key Features */}
            <div className="text-center animate-fadeInFast w-1/2">
              <h2 className={`text-3xl font-bold text-purple-500 p-2 animate-textPop`}>
                Key Features
              </h2>
              <ul className="list-none text-gray-700 flex flex-col gap-3 animate-fadeInDelayFast">
                <li>Customizable short links</li>
                <li>Secure and reliable infrastructure</li>
                <li>User-friendly interface</li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="text-center animate-fadeInFast w-1/2">
              <h2 className={`text-3xl font-bold text-purple-500 p-2 animate-textPop`}>
                Get in Touch
              </h2>
              <p className="text-gray-700 animate-fadeInDelayFast">
                Have a question or need support?
              </p>
              <Link href="/contact">
                <button className="bg-purple-500 rounded-lg shadow-lg mt-3 p-3 py-2 font-bold text-white w-fit transform transition duration-300 ease-in-out">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative flex justify-center items-center animate-imageSlideIn">
          <Image
            fill="true"
            alt="an image of a vector"
            src={"/about.png"}
            className="mix-blend-darken object-cover"
          />
        </div>
      </section>
    </main>
  );
}
