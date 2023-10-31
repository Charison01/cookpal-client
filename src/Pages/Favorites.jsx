import React, { useState } from "react";
import { useAppContext } from "../Context/Provider";
import { showLoginPopup } from "../lib";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  if (!user) {
    showLoginPopup();
    navigate("/");
  }
  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-600">
        Here are your favorite recipes
      </h1>
    </section>
  );
}
