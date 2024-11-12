"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Shorten = () => {
   const [url, seturl] = useState("");
   const [shorturl, setshorturl] = useState("");
   const [generated, setGenerated] = useState("");

   const generate = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
         url: url,
         shorturl: shorturl,
      });

      const requestOptions = {
         method: "POST",
         headers: myHeaders,
         body: raw,
         redirect: "follow",
      };

      fetch("/api/genrate", requestOptions)
         .then((response) => response.json())
         .then((result) => {
            console.log(result);
            if (result.message) {
               setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
               seturl("");
               setshorturl("");
               alert(result.message);
            }
         })
         .catch((error) => console.error(error));
   };

   return (
      <main className="bg-purple-100 bg-gradient-to-r from-purple-400 via-purple-300 h-[93vh] flex">
         {/* Left Section: Form */}
         <div className="w-1/2 flex justify-center items-center p-10">
            <div className="max-w-lg bg-purple-100 bg-gradient-to-r from-purple-400 via-purple-300 p-10 rounded-lg flex flex-col gap-6 animate-slideInFast">
               <h1 className="font-bold text-2xl mb-6 text-center animate-textPop">
                  Generate your short URLs
               </h1>
               <div className="flex flex-col gap-4">
                  <input
                     type="text"
                     value={url}
                     className="px-6 py-3 focus:outline-purple-600 rounded-md shadow-md focus:ring-2 focus:ring-purple-500 animate-inputPop"
                     placeholder="Enter your URL"
                     onChange={(e) => {
                        seturl(e.target.value);
                     }}
                  />
                  <input
                     type="text"
                     value={shorturl}
                     className="px-6 py-3 focus:outline-purple-600 rounded-md shadow-md focus:ring-2 focus:ring-purple-500 animate-inputPop"
                     placeholder="Enter preferred short URL text"
                     onChange={(e) => {
                        setshorturl(e.target.value);
                     }}
                  />
                  <button
                     onClick={generate}
                     className="bg-purple-500 rounded-lg shadow-lg py-3 text-lg font-bold text-white mt-4 hover:bg-purple-600 transition duration-300 ease-in-out hover:scale-110 hover:rotate-6 animate-buttonPop"
                  >
                     Generate
                  </button>
               </div>
               {generated && (
                  <>
                     <div className="font-bold text-lg animate-textPop pt-4">
                        Your Link
                     </div>
                     <code className="text-pink-700 text-lg animate-textPop pt-2 hover:underline hover:text-pink-600">
                        <Link target="_blank" href={generated}>
                           {generated}
                        </Link>
                     </code>
                  </>
               )}
            </div>
         </div>

         {/* Right Section: Image */}
         <div className="w-1/2 flex mr-10 justify-center items-center animate-imageSlideIn">
            <Image
               src="/shorten.png" // Update this to your image file path
               alt="Shorten illustration"
               width={900}
               height={900}
               className="object-contain"
            />
         </div>
      </main>
   );
};

export default Shorten;
