import React from "react";

export default function SkeletonRecipeDetails() {
  return (
    <div className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto bg-slate-100 rounded-md">
      <div className="skeleton h-4 w-1/3 rounded-sm my-2"></div>
      <div className="skeleton h-2 w-1/4 rounded-sm mt-2"></div>
      {/* first div for image */}
      <div className="flex flex-col lg:flex-row items-center gap-5 mb-3 mt-2">
        <div className="skeleton h-[250px] md:h-[300px] w-full lg:w-3/5"></div>
        <div className="px-2 h-[250px] md:h-[300px] w-full lg:w-2/5 ">
          <div className="skeleton h-2 w-full rounded-sm"></div>
          {Array(10)
            .fill(0)
            .map((item, i) => (
              <div
                key={i}
                className="skeleton h-2 w-full rounded-sm mt-2"></div>
            ))}
          <div className="skeleton h-2 w-1/3 rounded-sm mt-2"></div>
          {/* divs for the cooking time etc */}
          <div className="skeleton h-2 w-1/3 rounded-sm mt-5"></div>
          <div className="skeleton h-2 w-1/2 rounded-sm mt-2"></div>
          <div className="skeleton h-2 w-1/3 rounded-sm mt-2"></div>
          <div className="flex items-center  gap-2 mt-2">
            <div className="text-3xl text-gray-400 animate-pulse duration-300">
              ★
            </div>
            <div className="text-3xl text-gray-400 animate-pulse duration-300">
              ★
            </div>
            <div className="text-3xl text-gray-400 animate-pulse duration-300">
              ★
            </div>
            <div className="text-3xl text-gray-400 animate-pulse duration-300">
              ★
            </div>
            <div className="text-3xl text-gray-400 animate-pulse duration-300">
              ★
            </div>
          </div>
        </div>
      </div>
      {/* div for ingredients */}
      <div className="h-[200px] w-full mt-5">
        <div className="skeleton h-3 w-1/3 rounded-sm mb-2"></div>
        {Array(10)
          .fill(0)
          .map((item, i) => (
            <div key={i} className="skeleton h-2 w-3/4 rounded-sm mt-2"></div>
          ))}
        <div className="skeleton h-2 w-1/2 rounded-sm mt-2"></div>
      </div>
      {/* div for comments */}
      <div className="skeleton h-3 w-1/3 rounded-sm mt-2"></div>
      <div className="skeleton h-2 w-3/4 rounded-sm mt-2"></div>
      <div className="bg-transparent animate-pulse duration-300 h-16 w-full rounded-lg mt-2 cursor-pointer input input-bordered"></div>
      <div className="skeleton btn h-6 w-1/5 mt-4"></div>
    </div>
  );
}
