import React from "react";
import DefaultCarousel from "./Carousel";
export default function Home() {
  return (
    <section className="px-2 flex-1">
      <div className="flex items-center gap-4">
        <div className="search__wrapper flex-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
              stroke="#697089"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            className="text-black bg-base-100 shadow-lg w-full"
            type="search"
            placeholder="What do you want to cook today?"
          />
        </div>
        {/* filter svg */}
        <div className="bg-slate-100 h-[45px] p-2 rounded-md hover:shadow-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sm  ">
            <line x1="21" x2="14" y1="4" y2="4" />
            <line x1="10" x2="3" y1="4" y2="4" />
            <line x1="21" x2="12" y1="12" y2="12" />
            <line x1="8" x2="3" y1="12" y2="12" />
            <line x1="21" x2="16" y1="20" y2="20" />
            <line x1="12" x2="3" y1="20" y2="20" />
            <line x1="14" x2="14" y1="2" y2="6" />
            <line x1="8" x2="8" y1="10" y2="14" />
            <line x1="16" x2="16" y1="18" y2="22" />
          </svg>
        </div>
      </div>
      {/* section for carousel */}
      <div className="relative">
        <div className="absolute top-20 left-16 z-50 py-5 bg-slate-300 bg-opacity-[65%] px-2 rounded-md xsm:hidden md:block max-w-[75%]">
          <h1 className="bg-blend-screen text-3xl lg:text-4xl font-bold text-green-500">
            Trending Now
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-600">
            Kelvin&apos;s Famous Salad With Cheese
          </h2>
          <p className="text-xl lg:text-2xl ">By Kelvin Kimaru</p>
        </div>
        <DefaultCarousel />
      </div>
    </section>
  );
}
