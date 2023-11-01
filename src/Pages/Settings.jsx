import React, { useState, useRef } from "react";
import { useAppContext } from "../Context/Provider";
import { showLoginPopup } from "../lib";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "axios";
export const Settings = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const fileInputRef = useRef(null);

  //check if there is a logged user
  const user_id = sessionStorage.getItem("user_id");
  if (!user_id) {
    showLoginPopup();
    navigate("/");
  }

  //function to upload image

  async function uploadImage(e) {
    e.preventDefault();
    setIsloading(true);

    try {
      let imageUrl;
      if (
        (profileImage !== "" && profileImage.type === "image/png") ||
        profileImage.type === "image/jpg" ||
        profileImage.type === "image/jpeg"
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "dvgfo1dcc");
        image.append("upload_preset", "ywp3b54h");
        const response = await Axios.post(
          "https://api.cloudinary.com/v1_1/dvgfo1dcc/image/upload",
          image
        );
        const data = response.data;
        imageUrl = data?.secure_url;
        setIsloading(false);
        fileInputRef.current.value = null;
        try {
          const patchRequest = await Axios.patch(
            `https://cookpal.up.railway.app/users/${user_id}`,
            { picture: imageUrl }
          );
          const responseData = await patchRequest.data;
          toast.success("Image updated successfully");
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed");
    }
  }
  function handleImageChange(e) {
    setProfileImage(e.target.files[0]);
    setUser((prev) => ({
      ...prev,
      picture: URL.createObjectURL(e.target.files[0]),
    }));
  }
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      <h2 className="text-2xl text-center lg:text-3xl font-bold py-2 px-2">
        My information
      </h2>
      {user ? (
        <>
          {/* div for holding user information */}
          <div className="flex items-center justify-center my-2">
            <div className="rounded-full h-36 w-36 ring-2 ring-offset-2 ring-blue-500">
              <img
                src={user?.picture}
                alt="user-picture"
                className="rounded-full h-36 w-36"
              />
            </div>
          </div>
          <h1 className="text-center font-bold">Update Profile Picture</h1>
          <form
            className="flex flex-col items-center justify-center py-2"
            onSubmit={uploadImage}>
            <input
              type="file"
              id="picture"
              accept="image/*"
              ref={fileInputRef}
              name="picture"
              className="file-input file-input-bordered file-input-primary"
              onChange={handleImageChange}
            />
            <button
              className="btn btn-primary my-2"
              disabled={profileImage === "" || isloading}>
              {isloading ? "Uploading...." : "Upload Image"}
            </button>
          </form>
        </>
      ) : (
        <progress
          className="progress progress-primary w-56"
          value={5}
          max="100"></progress>
      )}
      <div className="card border bg-white shadow-lg p-2">
        <p className="mb-2 flex items-center justify-between">
          <span>Name </span>
          <button className="text-green-500 cursor-pointer hover:underline">Edit</button>
        </p>
        <p className="font-bold text-xl text-green-500 capitalize ">
          {user?.name}
        </p>
        <p className="mb-2">Email</p>
        <p className="font-bold text-xl text-green-500  ">{user?.email}</p>
      </div>
    </div>
  );
};

export default Settings;
