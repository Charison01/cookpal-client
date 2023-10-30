import React from "react";

export default function Home() {
  return (
    <div className="px-2 flex-1">
      <div className="search__wrapper">
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
    </div>
  );
}
