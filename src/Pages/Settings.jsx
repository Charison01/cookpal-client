import React, { useState } from "react";
import { useAppContext } from "../Context/Provider";
import toast from "react-hot-toast";
import "./Settings.css";
export const Settings = () => {
  const { user, setUser } = useAppContext();
  const [updateData, setUpdateData] = useState({
    name: "",
    picture: "",
  });
  const [loading, setLoading] = useState(false);

  const handleUpdateSettings = () => {
    setLoading(true);

    const updatePayload = {
      name: updateData.name,
      picture: updateData.picture,
    };

    fetch(`https://cookpal.up.railway.app/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePayload),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to update settings.");
        }
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
        toast.success("Settings updated successfully!");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="settings-container px-2 flex-1 lg:max-w-[75%] lg:mx-auto">
      <h2 className="text-2xl text-center lg:text-3xl font-bold py-2 px-2">
        Account Settings
      </h2>
      <form className="bg-base-100 p-2 rounded-md shadow-lg my-auto">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={updateData.name}
            onChange={(e) =>
              setUpdateData({ ...updateData, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Profile Picture</label>
          <input
            type="file"
            id="picture"
            value={updateData.picture}
            onChange={(e) =>
              setUpdateData({ ...updateData, picture: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="update-button"
            onClick={handleUpdateSettings}
            disabled={!loading}>
            {!loading ? "Updating..." : "Update Settings"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
