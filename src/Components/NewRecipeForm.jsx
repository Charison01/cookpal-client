import React, { useState } from "react";

function NewRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    ingredients: [],
    instructions: "",
    cooking_time: null,
    servings: null,
  });
  return <div>NewRecipeForm</div>;
}

export default NewRecipeForm;
