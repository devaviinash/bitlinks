"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { abortOnSynchronousPlatformIOAccess } from "next/dist/server/app-render/dynamic-rendering";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Contact() {
  return (
    <main className="bg-purple-100 bg-gradient-to-r from-purple-400 via-purple-300">
      {/* Main Section: Left and Right parts */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen py-16 bg-purple-100 text-center bg-gradient-to-r from-purple-400 via-purple-300 animate-fadeInFast">
        {/* Left Column: Contact Form */}
        <div className="flex flex-col gap-16 justify-around px-4 md:px-10 animate-slideInLeft">
          {/* Upper Left: Heading and Description */}
          <div className="flex flex-col gap-4 items-center justify-center animate-slideInFast">
            <h2 className={`text-5xl font-bold text-purple-500 ${poppins.className} animate-textPop`}>
              Get In Touch
            </h2>
            <p className="px-10 text-xl text-gray-700 animate-fadeInDelayFast">
              Have a question or need support? We are here to help. Fill out the form below and we will get back to you as soon as possible.
            </p>
          </div>
          {/* Contact Form */}
          <div className="flex flex-col gap-6 animate-slideInFast">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 animate-fadeInDelayFast"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 animate-fadeInDelayFast"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none animate-fadeInDelayFast"
            />
            <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group w-fit">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Send Message
              </span>
            </a>
          </div>
        </div>
        {/* Right Column: Image */}
        <div className="relative flex justify-center items-center animate-slideInRight">
          <Image
            fill="true"
            alt="contact us image"
            src={"/contact.png"}
            className="mix-blend-darken object-cover"
          />
        </div>
      </section>
    </main>
  );
}