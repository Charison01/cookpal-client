import "./Navbar.css";
export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <a href="#" className="logo__wrapper">
            <img src="./logo.svg" alt="Logo" className="logo-small" />
            <span className="hide">Cookpal</span>
          </a>
        </div>
        <div className="expand-btn">
          <svg
            width="16"
            height="16"
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
        <input type="search" placeholder="Search for anything..." />
      </div>
      <div className="sidebar-links">
        <h2>Main</h2>
        <ul>
          <li>
            <a href="#home" title="Home" className="tooltip">
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
            <a href="#orders" title="Orders" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-box"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                <path d="M12 12l8 -4.5"></path>
                <path d="M12 12l0 9"></path>
                <path d="M12 12l-8 -4.5"></path>
              </svg>
              <span className="link hide">Orders</span>
              <span className="tooltip__content">Orders</span>
            </a>
          </li>
          <li>
            <a href="#documentation" title="Documentation" className="tooltip">
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
                <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"></path>
              </svg>
              <span className="link hide">Documentation</span>
              <span className="tooltip__content">Documentation</span>
            </a>
          </li>
          <li>
            <a href="#map-overview" title="Map Overview" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-check"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v8"></path>
                <path d="M15 19l2 2l4 -4"></path>
              </svg>
              <span className="link hide">Map Overview</span>
              <span className="tooltip__content">Map Overview</span>
            </a>
          </li>
          <li>
            <a href="#statistics" title="Statistics" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chart-pie"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
                <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
              </svg>
              <span className="link hide">Statistics</span>
              <span className="tooltip__content">Statistics</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-links">
        <h2>Communication</h2>
        <ul>
          <li>
            <a href="#communication" title="Communication" className="tooltip">
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
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M4 13h3l3 3h4l3 -3h3"></path>
              </svg>
              <span className="link hide">Communication</span>
              <span className="tooltip__content">Communication</span>
            </a>
          </li>
          <li>
            <a href="#couriers" title="Couriers" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-users"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
              </svg>
              <span className="link hide">Couriers</span>
              <span className="tooltip__content">Couriers</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar__action__wrapper">
        <div className="sidebar__action">
          <div className="progress-bar">
            <div className="progress-bar__value">60%</div>
          </div>
          <h2>Used Capacity</h2>
          <p>You are already using 60% of your capacity.</p>
          <button>Upgrade plan</button>
        </div>
      </div>
      <div className="sidebar-links bottom-links">
        <ul>
          <li>
            <a href="#settings" title="Settings" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokewidth="2"
                stroke="currentColor"
                fill="none"
                strokelinecap="round"
                strokelinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              </svg>
              <span className="link hide">Settings</span>
              <span className="tooltip__content">Settings</span>
            </a>
          </li>
          <li>
            <a href="#help" title="Help" className="tooltip">
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
      <div className="sidebar__profile">
        <div className="avatar__wrapper">
          <img
            className="avatar"
            src="assets/profile.png"
            alt="Joe Doe Picture"
          />
          <div className="online__status"></div>
        </div>
        <section className="avatar__name hide">
          <div className="user-name">Joe Doe</div>
          <div className="email">joe.doe@atheros.ai</div>
        </section>
        <a href="#logout" className="logout">
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
    </nav>
  );
}
