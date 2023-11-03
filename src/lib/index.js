//helper functions
import Axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AES } from "crypto-js";
import CryptoJS from "crypto-js";
const api = "https://cookpal.up.railway.app";

//function to encrypt user id before login
const SECRETKEY = process.env.REACT_APP_SECRET_KEY;
const encryptUserId = (userId, secretKey) => {
  return AES.encrypt(userId.toString(), secretKey).toString();
};

//function to decrypt user id
export const decryptUserId = (encryptedUserId, secretKey) => {
  if (!encryptedUserId) {
    return false;
  }
  const bytes = AES.decrypt(encryptedUserId, secretKey);
  if (bytes) {
    return bytes.toString(CryptoJS.enc.Utf8);
  } else {
    return false;
  }
};

//function for logging in user
export async function handleLoginRequest(
  loginData,
  setLoading,
  setUser,
  setErrors
) {
  try {
    const response = await Axios.post(`${api}/login`, loginData);
    const data = await response.data;
    setUser(data);
    localStorage.setItem(
      "_react_auth_token_",
      encryptUserId(data?.id, SECRETKEY)
    );
    setLoading(false);
    document.getElementById("my_modal_3").close();
    toast.success("Login successful!");
    window.location.reload();
  } catch (error) {
    toast.error(error.message);
    setErrors(error?.response?.data?.errors);
    setLoading(false);
  }
}

//function to signup users
export async function handleSignupRequest(
  signupData,
  setLoading,
  setUser,
  setErrors
) {
  try {
    const response = await Axios.post(`${api}/signup`, signupData);
    const data = await response.data;
    setUser(data);
    setLoading(false);
    document.getElementById("my_modal_3").close();
    toast.success("Signup successful!");
    localStorage.setItem(
      "_react_auth_token_",
      encryptUserId(data?.id, SECRETKEY)
    );
  } catch (error) {
    toast.error(error.message);
    setErrors(error?.response?.data?.errors);
    setLoading(false);
  }
}

//function to show login popup if the user is not logged in
export function showLoginPopup() {
  const modal = document.getElementById("my_modal_3");
  if (modal) {
    modal.showModal();
  } else {
    console.error("Element with ID 'my_modal_3' not found.");
  }
}
//function to create a new recipe
export async function createRecipe(formData, setLoading, setRecipes) {
  try {
    const response = await Axios.post(`${api}/recipes`, formData);
    const data = await response.data;
    setRecipes((prev) => ({
      ...prev,
      data,
    }));
    setLoading(false);
    document.getElementById("my_modal_4").close();
    toast.success("Recipes added successfully");
    window.location.reload();
  } catch (error) {
    toast.error("Request failed!");
  }
}

//function to delete a recipe
export async function deleteRecipe(id) {
  if (id) {
    try {
      await Swal.fire({
        icon: "warning",
        text: "Are you sure you want to delete this recipe?",
        showCloseButton: true,
        confirmButtonText: "Delete",
        showCancelButton: true,
        cancelButtonText: "Nevermind",
        confirmButtonColor: "#FF0000",
        cancelButtonColor: "#0056f1",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await Axios.delete(`${api}/recipes/${id}`);
          const data = response.data;
          console.log(data);
          toast.success("recipe deleted successfully");
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the recipe.");
    } finally {
      window.location.reload();
    }
  }
}
//function to edit recipes
export async function editRecipe(id, formData, setLoading) {
  if (id) {
    try {
      const response = await Axios.patch(`${api}/recipes/${id}`, formData);
      toast.success("Recipe details updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating the recipe");
    } finally {
      setLoading(false);
      document.getElementById("my_modal_6").close();
      window.location.reload();
    }
  }
}
