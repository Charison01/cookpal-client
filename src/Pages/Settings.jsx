import React, { useState, useRef } from "react";
import { useAppContext } from "../Context/Provider";
import { showLoginPopup } from "../lib";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "axios";
import Swal from "sweetalert2";
export const Settings = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");

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
          await Axios.patch(`https://cookpal.up.railway.app/users/${user_id}`, {
            picture: imageUrl,
          });
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

  //function to update user name
  async function handleUpdateName() {
    Swal.fire({
      text: "Enter a new name",
      input: "text",
      inputValue: name,
      inputPlaceholder: "Enter a new name",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed) {
        setName(result?.value);
        let newName = result?.value;
        try {
          const response = Axios.patch(
            `https://cookpal.up.railway.app/users/${user_id}`,
            {
              name: newName,
            }
          );

          setUser((prev) => ({
            ...prev,
            name: newName,
          }));
          Swal.fire({
            icon: "success",
            text: "Name updated successfully",
            showCloseButton: true,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            text: "request failed!",
            showCloseButton: true,
          });
        }
      }
    });
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
                alt={user?.name}
                className="rounded-full h-36 w-36"
              />
            </div>
          </div>
          <div className="card border bg-white shadow-lg p-2 md:w-2/3 lg:w-1/2 md:mx-auto bg-opacity-[80%]">
            <p className="mb-2 flex items-center justify-between">
              <span>Name </span>
              <button
                className="text-green-500 cursor-pointer hover:underline"
                onClick={handleUpdateName}>
                Edit
              </button>
            </p>
            <p className="font-bold text-xl text-green-500 capitalize ">
              {user?.name}
            </p>
            <p className="mb-2">Email</p>
            <p className="font-bold text-xl text-green-500  ">{user?.email}</p>
            <h1 className="font-bold my-2">Update Profile Picture</h1>
            <form className="py-2 my-2" onSubmit={uploadImage}>
              <input
                type="file"
                id="picture"
                accept="image/*"
                ref={fileInputRef}
                name="picture"
                maxFileSize="4MB"
                className="file-input file-input-bordered file-input-primary w-full my-2"
                onChange={handleImageChange}
              />
              <div className="flex flex-col md:flex-row items-center justify-evenly gap-5">
                <button
                  className="btn btn-primary my-2 w-40"
                  disabled={
                    profileImage === "" ||
                    isloading ||
                    !fileInputRef?.current?.value
                  }>
                  {isloading ? "Uploading...." : "Upload Image"}
                </button>
                <input
                  type="reset"
                  className="btn btn-neutral w-40"
                  disabled={!fileInputRef?.current?.value}
                />
              </div>
            </form>
          </div>
        </>
      ) : (
        <progress className="progress progress-primary w-56"></progress>
      )}
    </div>
  );
};

export default Settings;
