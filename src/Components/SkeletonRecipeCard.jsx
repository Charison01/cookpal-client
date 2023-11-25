import React from "react";

export default function SkeletonRecipeCard() {
  return (
    <div className="xsm:h-fit xsm:pb-2 h-[300px] lg:h-[320px] xsm:w-full md:w-full lg:w-80 card border shadow-lg bg-base-100 my-2 md:my-3 md:mr-5 relative">
      {/* Skeleton loading elements */}
      <div className="h-3/5 rounded-lg skeleton"></div>
      <div className="rounded-full h-12 w-12 absolute top-1/2 right-[44%] md:mt-5 skeleton"></div>
      <div className="mt-2 w-1/3 h-3 mx-2 rounded-md skeleton"></div>
      <div className="flex items-center justify-between gap-5 px-2 mt-2">
        <div className="h-5 my-3  w-[50%] rounded-md skeleton "></div>
        <div className="h-5 my-3  w-[50%] rounded-md skeleton"></div>
      </div>
      <div className="flex items-center justify-evenly gap-5 px-2">
        <div className="h-6 my-3  w-[50%] rounded-md skeleton "></div>
        <div className="h-6 my-3  w-[50%] rounded-md skeleton"></div>
      </div>
    </div>
  );
}
