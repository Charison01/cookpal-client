//helper functions
import Axios from "axios";
import toast from "react-hot-toast";
const api = "https://cookpal.up.railway.app/";
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
    sessionStorage.setItem("user_id", data?.id);
    setLoading(false);
    document.getElementById("my_modal_3").close();
    toast.success("Login successful!");
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
    sessionStorage.setItem("user_id", data?.id);
  } catch (error) {
    toast.error(error.message);
    setErrors(error?.response?.data?.errors);
    setLoading(false);
  }
}

//function to update the rating of a recipe
export function handleUpdateRating(pct, recipeId) {
  const newRating = pct * 5;
  //post to /ratings and give the recipe id to update
}
