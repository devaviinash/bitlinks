import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
   src: "./fonts/Poppins-ExtraBold.ttf",
   variable: "--font-poppins",
   weight: "100 900",
});

export default function Home() {
   return (
      <main className="bg-purple-100">
         <section className="grid grid-cols-2 h-[93vh]">
            <div className="flex flex-col gap-4 items-center justify-center bg-gradient-to-r from-purple-400 via-purple-300 animate-fadeInFast">
               <p className={`text-3xl font-bold ${poppins.className} animate-slideInFast`}>
                  The Best URL Shortner In The Market
               </p>
               <p className="px-20 text-center animate-fadeInDelayFast">
                  We are the most <strong>straight forward URL shortner</strong> in the world.
                  Most of the url shortners will track you or ask you to give
                  your details for login. We understand your needs and hence we
                  have created this URL shortner.
               </p>
               <div className="flex gap-3 justify-start">
                  <a
                     href="shorten"
                     className="relative mt-3 inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group transform transition duration-300 ease-in-out hover:scale-110"
                  >
                     {/* Background blur effect */}
                     <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-500 bg-red-500 rounded-full blur-md group-hover:bg-red-400 ease"></span>
                     <span className="absolute inset-0 w-full h-full transition duration-500 group-hover:rotate-180 ease">
                        {/* Purple background effect */}
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md group-hover:bg-purple-400"></span>
                        {/* Pink background effect */}
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md group-hover:bg-pink-400"></span>
                     </span>
                     {/* Button text */}
                     <span className="relative text-2xl text-white z-10">Shorten URL</span>
                  </a>

               </div>
            </div>
            <div className="flex justify-start mix-blend-multiply relative animate-imageFadeFast">
               <Image
                  fill="true"
                  alt="an image of a vector"
                  src={"/home.png"}
                  className="mix-blend-darken"
               ></Image>
            </div>
         </section>
      </main>
   );
}
