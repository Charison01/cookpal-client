import React, { useState } from "react";
import { handleLoginRequest, handleSignupRequest } from "../lib";
import { ErrorList } from "../Components/Errors";
import toast from "react-hot-toast";
import { useAppContext } from "../Context/Provider";
export default function Login() {
  const { setUser } = useAppContext();
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSignupChange(event) {
    const { name, value } = event.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const [showPassword, setShowPassword] = useState(false);
  const openSignupModal = () => {
    setSignup(true);
    setShowPassword(false);
    setLoading(false);
    setErrors(false);
  };

  const closeSignupModal = () => {
    setSignup(false);
    setShowPassword(false);
    setLoading(false);
    setErrors(false);
  };
  //function to handle signup and sigin
  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    toast("processing signin request...", {
      icon: "⏳",
    });
    handleLoginRequest(loginData, setLoading, setUser, setErrors, "home");
  }
  function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    toast("processing signup request...", {
      icon: "⏳",
    });
    handleSignupRequest(signupData, setLoading, setUser, setErrors, "home");
  }

  return (
    <section className="px-2 flex-1 lg:max-w-[75%] lg:mx-auto bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="w-full flex h-screen flex-col items-center justify-center text-gray-600 ">
        <form
          onSubmit={!signup ? handleLogin : handleSignup}
          className="border-2 bg-base-100 p-4 rounded-md ">
          {!signup ? (
            <>
              <h1 className="text-center font-bold my-2 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                Login to Continue
              </h1>
              <div className="mb-6">
                <label htmlFor="loginemail" className="block mb-2">
                  Email <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="loginemail"
                  autoComplete="on"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email address"
                  required
                  className="input input-bordered input-primary w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="loginpassword" className="block mb-2">
                  Password <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="loginpassword"
                  autoComplete="on"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center justify-start gap-4">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className=""
                  />
                  <p>{!showPassword ? "Show Password" : "Hide Password"}</p>
                </div>

                <div>
                  <a
                    className="hover:link-primary underline cursor-pointer"
                    href="/reset">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  " Login"
                )}
              </button>
              <p className="py-4">
                Don&apos;t Have an Account?{" "}
                <span
                  className="link hover:text-primary"
                  onClick={openSignupModal}>
                  Signup
                </span>
              </p>
            </>
          ) : (
            <>
              {/* Your Signup Form Here */}
              <h1 className="text-center font-bold my-2 text-2xl bg-clip-text  text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                Create an Account
              </h1>
              <div className="mb-6">
                {/* Name input */}
                <label htmlFor="name" className="block mb-2">
                  Name <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  placeholder="Enter your name"
                  required
                  className="input input-bordered input-primary w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  Email <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email address"
                  required
                  className="input input-bordered input-primary w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2">
                  Password <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Enter your password"
                  minLength={8}
                  required
                  className="input input-bordered input-secondary w-full"
                />
              </div>
              <div className="mb-6 flex items-center justify-start gap-4">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className=""
                />
                <p>{!showPassword ? "Show Password" : "Hide Password"}</p>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  "Signup"
                )}
              </button>
              <p className="py-4">
                Already Have an Account?{" "}
                <span
                  className="link hover:text-primary"
                  onClick={closeSignupModal}>
                  Login
                </span>
              </p>
              <p className="alert alert-warning block">
                By signing up, you agree to our{" "}
                <a href="/terms" className="link link-primary">
                  Terms of service
                </a>{" "}
                and confirm that you have read our{" "}
                <a href="/privacy" className="link link-primary">
                  {" "}
                  Privacy Policy
                </a>
              </p>
            </>
          )}
          {errors && <ErrorList errors={errors} />}
        </form>
      </div>
    </section>
  );
}
