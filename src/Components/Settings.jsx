// import React, { useState } from "react";
// import { useAppContext } from "../Context/Provider";
// import toast from "react-hot-toast";

// export const Settings = () => {
//   const { user, setUser } = useAppContext();

//   const [updateData, setUpdateData] = useState({
//     name: user.name || "",
//     picture: user.picture || "",
//     // Add other fields you want to update
//   });

//   const [loading, setLoading] = useState(false);

//   const handleUpdateChange = (event) => {
//     const { name, value } = event.target;
//     setUpdateData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdateSettings = () => {
//     setLoading(true);
//     // Here you should make an API request to update the user settings on the backend.
//     // You can use the `fetch` or any other method for making API requests.
//     // Once the request is successful, you can update the user data in the context.
//     // For example, using the `setUser` function.

//     // Example of an API request:
//     // fetch("/api/update-settings", {
//     //   method: "PATCH",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(updateData),
//     // })
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     setUser(data); // Assuming the API returns the updated user object
//     //     setLoading(false);
//     //     toast.success("Settings updated successfully!");
//     //   })
//     //   .catch((error) => {
//     //     setLoading(false);
//     //     toast.error("Failed to update settings. Please try again.");
//     //   });
//   };

//   return (
//     <div className="container mx-auto my-10 p-6 bg-white rounded-md shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Settings</h1>
//       <form onSubmit={handleUpdateSettings}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={updateData.name}
//             onChange={handleUpdateChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="picture" className="block mb-2">
//             Profile Picture
//           </label>
//           <input
//             type="text"
//             name="picture"
//             id="picture"
//             value={updateData.picture}
//             onChange={handleUpdateChange}
//             className="input input-bordered w-full"
//           />
//         </div>

//         {/* Add more fields for other settings here as needed. */}

//         <div className="mt-4">
//           <button
//             type="submit"
//             className={`btn btn-primary w-full ${
//               loading ? "cursor-not-allowed" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? (
//               <span className="loading loading-spinner text-white"></span>
//             ) : (
//               "Update Settings"
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useAppContext } from "./ContextProvider";
import toast from "react-hot-toast";


export const Settings = () => {
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

export default Settings;
