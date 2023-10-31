import React, { useState } from "react";
import { ErrorList } from "./Errors";
function NewRecipeForm({ setRecipes }) {
  const userId = sessionStorage.getItem("user_id");
  const [formData, setFormData] = useState({
    user_id: userId,
    title: "",
    image: "",
    ingredients: [],
    instructions: "",
    cooking_time: 0,
    servings: 0,
  });
  function handleChange(e) {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "ingredients") {
      newValue = value.split(",");
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box text-gray-600">
        <h1 className="text-xl font-bold text-center my-2">
          Fill this form to create a new recipe!
        </h1>
        <form method="dialogue" onSubmit={handleSubmit}>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
            onClick={() => {
              document.getElementById("my_modal_4").close();
            }}>
            ✕
          </button>

          <div className="mb-6">
            {/* Name input */}
            <label htmlFor="title" className="block mb-2">
              Title <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the title for the recipe"
              required
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block mb-2">
              Image Url <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste an image url for your recipe"
              required
              className="input input-bordered input-primary w-full"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="mb-6">
              <label htmlFor="cooking_time" className="block mb-2">
                Cooking Time <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="number"
                name="cooking_time"
                id="cooking_time"
                value={formData.cooking_time}
                onChange={handleChange}
                placeholder="Cooking time in minutes"
                required
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="servings" className="block mb-2">
                Cooking Time <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="number"
                name="servings"
                id="servings"
                value={formData.servings}
                onChange={handleChange}
                placeholder="People that can be served"
                required
                className="input input-bordered input-secondary w-full"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="ingredients" className="block mb-2">
              Ingredients <span className="text-red-600 font-bold">*</span>
            </label>
            <textarea
              type="text"
              name="ingredients"
              rows={2}
              id="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Enter comma separated list of ingredients"
              required
              className="textarea textarea-bordered textarea-primary w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="instructions" className="block mb-2">
              Cooking Instructions{" "}
              <span className="text-red-600 font-bold">*</span>
            </label>
            <textarea
              type="text"
              name="instructions"
              id="instructions"
              onChange={handleChange}
              minLength={50}
              value={formData.instructions}
              rows={3}
              placeholder="cooking instructions"
              required
              className="textarea textarea-bordered textarea-primary w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default NewRecipeForm;
