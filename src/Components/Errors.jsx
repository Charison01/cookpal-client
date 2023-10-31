import React from "react";

export const ErrorList = ({ errors }) => {
  return (
    <ul className=" bg-[#F87272]  p-2 border rounded-lg">
      {errors.map((errorMessage, index) => {
        return (
          <li
            key={index}
            className="flex flex-col items-start  md:flex-row md:items-center gap-2 my-1">
            <span> {errorMessage}</span>
          </li>
        );
      })}
    </ul>
  );
};
