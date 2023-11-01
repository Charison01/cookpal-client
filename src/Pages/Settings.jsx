import React, { useState } from "react";
import { useAppContext } from "../Context/Provider";
import { showLoginPopup } from "../lib";
import { useNavigate } from "react-router-dom";
export const Settings = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({
    name: "",
    picture: "",
  });
  if (!user) {
    showLoginPopup();
    navigate("/");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      <h2 className="text-2xl text-center lg:text-3xl font-bold py-2 px-2">
        My information
      </h2>
      {user ? (
        <>
          {/* div for holding user information */}
          <div>
            <div className="avatar h-10 w-10 ring-2 ring-offset-2 ring-blue-500">
              <img src={user?.picture} alt="user-picture" />
            </div>
          </div>
          <form className="bg-base-100 p-2 rounded-md shadow-lg my-auto">
            <div className="mb-2">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-primary input-bordered w-full"
                value={updateData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="picture" className="label">
                Profile Picture
              </label>
              <input
                type="file"
                id="picture"
                accept="image/*"
                name="picture"
                className="file-input file-input-bordered file-input-primary w-full"
                value={updateData.picture}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 flex items-center justify-center">
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokelinecap="round"
                  strokelinejoin="round">
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M12 2v2" />
                  <path d="M12 22v-2" />
                  <path d="m17 20.66-1-1.73" />
                  <path d="M11 10.27 7 3.34" />
                  <path d="m20.66 17-1.73-1" />
                  <path d="m3.34 7 1.73 1" />
                  <path d="M14 12h8" />
                  <path d="M2 12h2" />
                  <path d="m20.66 7-1.73 1" />
                  <path d="m3.34 17 1.73-1" />
                  <path d="m17 3.34-1 1.73" />
                  <path d="m11 13.73-4 6.93" />
                </svg>
                Update
              </button>
            </div>
          </form>
        </>
      ) : (
        <progress
          className="progress progress-primary w-56"
          value={5}
          max="100"></progress>
      )}
    </div>
  );
};

export default Settings;
