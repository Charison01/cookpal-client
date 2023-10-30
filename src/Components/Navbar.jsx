import "./Navbar.css";
import { useAppContext } from "../Context/Provider";
import React, { useState, useEffect } from "react";
export default function Sidebar() {
  const { user } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;
    console.log(currentPath);
    // Define the links you want to match for active status
    const linksToMatch = [
      "/",
      "/recipes",
      "/favorites",
      "/community",
      "/settings",
      "/help",
    ];

    // Find the link that matches the current path
    const matchedLink = linksToMatch.find((link) =>
      currentPath.startsWith(link)
    );

    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, []);

  const expandSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSearchFocus = () => {
    setCollapsed(false);
  };
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

      <div className="search__wrapper">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
            stroke="#697089"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          className="text-black bg-base-100 shadow-lg"
          type="search"
          placeholder="Search for recipes..."
          onFocus={handleSearchFocus}
        />
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
                strokewidth="2"
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
        </ul>
      </div>
      <div className="divider"></div>
      {/* hide sidebar profile when no user is logged in */}
      <div className="text-black p-5">
        <h2 className={collapsed ? "hidden" : ""}>Login to create recipes!</h2>
        <a href="/login" className="login">
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="login-svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" x2="3" y1="12" y2="12" />
            </svg>
          ) : (
            <button className="btn btn-primary w-full  mt-5 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="!text-white"
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
        </a>
      </div>
      <div className={user ? "sidebar__profile" : "hidden"}>
        <div className="avatar__wrapper">
          <img
            className="avatar"
            src="https://utfs.io/f/299cfb3c-a557-4483-817a-fb3ed3bb98ea-wvvx2k.jpg"
            alt="user-icon"
          />
          <div className="online__status"></div>
        </div>
        <section className="avatar__name hide">
          <div className="user-name">Donvine Mugendi</div>
          <div className="email">donvine@example.com</div>
        </section>
        <a href="/logout" className="logout">
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
        </a>
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
            strokeLinejoin="round"
            class="">
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
          </svg>
          <h2>Get weekly recipes directly to your email</h2>
        </div>
        <button className="btn bg-green-500 text-white my-2 w-full ">
          Subscribe Now
        </button>
      </div>
    </nav>
  );
}
