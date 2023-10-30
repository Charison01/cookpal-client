import React, { useState } from "react";

export const LoginModal = () => {
  const [signup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const openSignupModal = () => {
    setSignup(true);
  };

  const closeSignupModal = () => {
    setSignup(false);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-gray-600">
        <form method="dialogue">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}>
            ✕
          </button>
          {!signup ? (
            <>
              <h1 className="text-center font-bold my-2 text-2xl">
                Login to Continue
              </h1>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  Email <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
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
                  placeholder="Enter your password"
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
                Login
              </button>
              <p className="py-4">
                Don&apos;t Have an Account?{" "}
                <span className="link" onClick={openSignupModal}>
                  Signup
                </span>
              </p>
            </>
          ) : (
            <>
              {/* Your Signup Form Here */}
              <h1 className="text-center font-bold my-2 text-2xl">
                Signup to Create an Account
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
                  placeholder="Enter your password"
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
                Signup
              </button>
              <p className="py-4">
                Already Have an Account?{" "}
                <span className="link" onClick={closeSignupModal}>
                  Login
                </span>
              </p>
            </>
          )}
        </form>
      </div>
    </dialog>
  );
};
