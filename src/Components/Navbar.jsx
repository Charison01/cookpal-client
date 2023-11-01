import "./Navbar.css";
import { useAppContext } from "../Context/Provider";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginModal } from "./login";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

// beginning of function body
export default function Sidebar() {
  const { user, setUser } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate();
  //code to set the navbar to collapsed on small screens
  useEffect(() => {
    const updateCollapseState = () => {
      if (window.innerWidth < 680) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", updateCollapseState);
    updateCollapseState();

    return () => {
      window.removeEventListener("resize", updateCollapseState);
    };
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const expandSidebar = () => {
    setCollapsed(!collapsed);
  };

  //function to logout users
  function handleLogout() {
    Swal.fire({
      icon: "warning",
      text: "Are you sure you want to logout",
      showCloseButton: true,
      confirmButtonText: "Logout",
      confirmButtonColor: "#0056f1",
      showCancelButton: true,
      cancelButtonColor: "#00FF00",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("user_id");
        fetch("https://cookpal.up.railway.app/logout", {
          method: "DELETE",
        });
        setUser(null);
        toast.success("logged out successfully");
        navigate("/");
        window.location.reload();
      }
    });
  }
  //function to handle subscriptions
  function handleSubscription() {
    Swal.fire({
      icon: "info",
      text: "Kindly enter your email address to subscribe",
      input: "email",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: "#0056f1",
      confirmButtonText: "Subscribe",
      cancelButtonColor: "#FF0000",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Subscribed!", "Thank you for subscribing!", "success");
      }
    });
  }

  return (
    <nav
      className={`sidebar bg-base-200 shadow-lg ${
        collapsed ? "collapsed" : ""
      }`}>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <a href="/" className="logo__wrapper">
            <h2 className={` font-bold ${collapsed ? "hidden" : "text-2xl"}`}>
              C<span className="text-green-500 text-3xl">oo</span>kpal🥣
            </h2>
            <h2 className={` font-bold ${collapsed ? "text-2xl" : "hidden"}`}>
              🥣
            </h2>
          </a>
        </div>
        <div className="expand-btn" onClick={expandSidebar}>
          <svg
            onClick={expandSidebar}
            width="60"
            height="60"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
              stroke="#4A516D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="sidebar-links">
        <ul>
          <li>
            <a
              href="/"
              title="Home"
              className={`tooltip ${activeLink === "/" ? "active" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
              </svg>
              <span className="link hide">Home</span>
              <span className="tooltip__content">Home</span>
            </a>
          </li>
          <li>
            <a
              href="/recipes"
              title="recipes"
              className={`tooltip ${
                activeLink === "/recipes" ? "active" : ""
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-map-check">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              <span className="link hide">Explore</span>
              <span className="tooltip__content">Explore</span>
            </a>
          </li>
          {user ? (
            <li>
              <a
                href="/my-recipes"
                title="my-recipes"
                className={`tooltip ${
                  activeLink === "/my-recipes" ? "active" : ""
                }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="link hide">My Recipes</span>
                <span className="tooltip__content">My Recipes</span>
              </a>
            </li>
          ) : null}
          <li>
            <a
              href="/favorites"
              title="favorites"
              className={`tooltip ${
                activeLink === "/favorites" ? "active" : ""
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-map-check">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <span className="link hide">Favorites</span>
              <span className="tooltip__content">Favorites</span>
            </a>
          </li>
          <li>
            <a
              href="/community"
              title="community"
              className={`tooltip ${
                activeLink === "/community" ? "active" : ""
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-map-check">
                <path d="M14 19a6 6 0 0 0-12 0" />
                <circle cx="8" cy="9" r="4" />
                <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
              </svg>
              <span className="link hide">Community</span>
              <span className="tooltip__content">Community</span>
            </a>
          </li>

          <li>
            <a
              href="/help"
              title="Help"
              className={`tooltip ${activeLink === "/help" ? "active" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 16v.01"></path>
                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
              </svg>
              <span className="link hide">Help</span>
              <span className="tooltip__content">Help</span>
            </a>
          </li>
          <li>
            <a
              href="/settings"
              title="Settings"
              className={`tooltip ${
                activeLink === "/settings" ? "active" : ""
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              </svg>
              <span className="link hide">Settings</span>
              <span className="tooltip__content">Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="divider"></div>
      {/* hide sidebar profile when no user is logged in */}
      <div className={!user ? "text-black p-5" : "hidden"}>
        <h2 className={collapsed ? "hidden" : ""}>Login to create recipes!</h2>
        <div
          className="login"
          onClick={() => document.getElementById("my_modal_3").showModal()}>
          {collapsed ? (
            <span className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="login-svg cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
              <span className="tooltip__content">Login</span>
            </span>
          ) : (
            <button
              className="btn btn-primary w-full  mt-5 flex items-center"
              onClick={() => document.getElementById("my_modal_3").showModal()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="!text-white r"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
              Login
            </button>
          )}
        </div>
      </div>
      <div className={user ? "sidebar__profile" : "hidden"}>
        <div
          className={
            user
              ? "h-10 w-10 rounded-full ring-2 ring-offset-2 ring-blue-500 my-1"
              : "hidden"
          }>
          {user ? (
            <img
              className="rounded-full h-10 w-10"
              src={
                user?.picture ||
                (user?.name
                  ? `https://ui-avatars.com/api/?name=${user?.name}`
                  : null)
              }
              alt="user-icon"
            />
          ) : null}
        </div>
        <section className="avatar__name hide">
          <div className="user-name">{user?.name}</div>
          <div className="email">{user?.email}</div>
        </section>
        <span onClick={handleLogout} className="logout cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-logout"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
          </svg>
        </span>
      </div>
      <div
        className={`my-10  text-black flex flex-col items-center justify-start px-5 ${
          collapsed ? "hidden" : ""
        } ${!user ? "hidden" : ""}`}>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
          </svg>
          <h2>Get weekly recipes directly to your email</h2>
        </div>
        <button
          className="btn bg-[--sidebar-primary] hover:bg-green-500 text-white my-2 w-full "
          onClick={handleSubscription}>
          Subscribe Now
        </button>
      </div>
      {/* set the login modal as absolute */}
      <LoginModal />
    </nav>
  );
}
