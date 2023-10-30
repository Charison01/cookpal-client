//helper functions
import Axios from "axios";
import toast from "react-hot-toast";
const api = "https://cookpal.up.railway.app/";
//function for logging in user
export async function handleLoginRequest(loginData, setLoading, setUser) {
  try {
    const response = await Axios.post(`${api}/login`, loginData);
    const data = await response.data;
    setUser(data);
    setLoading(false);
    document.getElementById("my_modal_3").close();
    toast.success("Login successful!");
  } catch (error) {
    toast.error(error.message);
    setLoading(false);
  }
}

//function to signup users
export async function handleSignupRequest(signupData, setLoading, setUser) {
  try {
    const response = await Axios.post(`${api}/signup`, signupData);
    const data = await response.data;
    setUser(data);
    setLoading(false);
    document.getElementById("my_modal_3").close();
    toast.success("Signup successful!");
  } catch (error) {
    toast.error(error.message);
    setLoading(false);
  }
}
