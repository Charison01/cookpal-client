import "./Settings.css"
import React, { useState } from "react";
import { useAppContext } from "../Context/Provider";
import toast from "react-hot-toast";

export default function Settings() {
  const { user, setUser } = useAppContext();
  const [updateData, setUpdateData] = useState({
    name: user.name || "",
    picture: user.picture || "",
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
    <div className="settings-container">
      <h2>Account Settings</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={updateData.name}
            onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Profile Picture URL</label>
          <input
            type="text"
            id="picture"
            value={updateData.picture}
            onChange={(e) => setUpdateData({ ...updateData, picture: e.target.value })}
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="update-button"
            onClick={handleUpdateSettings}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Settings"}
          </button>
        </div>
      </form>
    </div>
  );
};