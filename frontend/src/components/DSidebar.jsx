import { useState } from "react";
import {
  FiUser,
  FiFolder,
  FiPlusCircle,
  FiFileText,
  FiUsers,
  FiHelpCircle,
  FiLogOut,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiLayers,
  FiBookOpen,
  FiChevronDown,
} from "react-icons/fi";

import logo from "../assets/logo.png";

const Separator = () => (
  <div
    style={{
      width: "100%",
      height: "1px",
      background: "rgba(255,255,255,0.10)",
      marginTop: "2px",
      marginBottom: "6px",
    }}
  />
);

export default function DSidebar() {
  const [active, setActive] = useState("");
  const [openSchemes, setOpenSchemes] = useState(false);
  const [openApps, setOpenApps] = useState(false);
  const [openDon, setOpenDon] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ACTIVE_BLUE = "#0A64BC";
  const HOVER_BG = "rgba(255,255,255,0.08)";

  const menuItem = (icon, label, key, toggle) => {
    const isActive = active === key;

    return (
      <>
        <div
  className="sidebar-menu-item"
  onClick={() => {
    setActive(key);
    if (toggle) toggle();
  }}
  style={{
    position: "relative",   // ⭐ ADD THIS ⭐
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "8px",
    transition: "0.25s",
    color: isActive ? "#fff" : "#E8F1F7",
  }}
>
          {isActive && (
            <div
              style={{
                position: "absolute",
                left: 0,
                width: "4px",
               height: "60%",
               top: "20%",
                background: ACTIVE_BLUE,
                borderRadius: "4px",
              }}
            />
          )}

          <span style={{ fontSize: "20px", color: "#C8D4DF" }}>{icon}</span>
          <span style={{ flex: 1 }}>{label}</span>

          {toggle && (
            <FiChevronDown
              style={{
                fontSize: "18px",
                color: "#BFD2DF",
                transform:
                  (key === "schemes" && openSchemes) ||
                  (key === "applications" && openApps) ||
                  (key === "donations" && openDon)
                    ? "rotate(180deg)"
                    : "rotate(0)",
                transition: "0.25s",
              }}
            />
          )}
        </div>
        <Separator />
      </>
    );
  };

  const subItem = (icon, label, key) => {
    const isActive = active === key;

    return (
      <div
        className="sidebar-sub-item"
        onClick={() => setActive(key)}
        style={{
          width: "calc(100% - 25px)",
          marginLeft: "25px",
          padding: "10px 16px",
          borderRadius: "8px",
          background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
          marginBottom: "6px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: 500,
          transition: "0.25s",
          color: isActive ? "#fff" : "#C9D6E1",
        }}
      >
        <span style={{ fontSize: "18px" }}>{icon}</span>
        {label}
      </div>
    );
  };

  return (
    <>
      {/* SIDEBAR */}
      <div
        id="donor-sidebar"
        className={`donor-sidebar ${sidebarOpen ? "open" : ""}`}
        style={{
          width: "270px",
          background: "rgba(34,71,99,1)",
          height: "100vh",
          padding: "28px 20px",
          overflowY: "auto",
          color: "white",
          scrollBehavior: "smooth",
          zIndex: 9999,
        }}
      >
        {/* Hide scrollbar */}
        <style>{`
          #donor-sidebar::-webkit-scrollbar { display: none; }
          #donor-sidebar { scrollbar-width: none; }
        `}</style>

        {/* Close button mobile */}
        <div
          className="sidebar-close-btn"
          onClick={() => setSidebarOpen(false)}
          style={{
            display: "none",
            textAlign: "right",
            padding: "4px 0 10px",
            fontSize: "26px",
            cursor: "pointer",
          }}
        >
          ×
        </div>

        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            src={logo}
            alt="VidyaSetu Logo"
            style={{
              width: "170px",
              marginBottom: "20px",
              filter:
                "drop-shadow(0 0 5px rgba(255,255,255,0.8)) drop-shadow(0 0 15px rgba(255,215,0,0.8))",
            }}
          />
          <h2 style={{ margin: 0, fontSize: "25px", fontWeight: 700 }}>
            VidyaSetu
          </h2>
          <p style={{ margin: 0, opacity: 0.7 }}>𝘉𝘳𝘪𝘥𝘨𝘪𝘯𝘨 𝘋𝘳𝘦𝘢𝘮𝘴 𝘵𝘰 𝘙𝘦𝘢𝘭𝘪𝘵𝘺</p>
        </div>

        {/* MENU */}
        {menuItem(<FiUser />, "Profile", "profile")}
        {menuItem(<FiPlusCircle />, "Create Scheme", "create")}
        {menuItem(<FiFolder />, "My Schemes", "schemes", () =>
          setOpenSchemes(!openSchemes)
        )}

        {openSchemes && (
          <>
            {subItem(<FiLayers />, "Active Schemes", "active")}
            {subItem(<FiClock />, "Draft Schemes", "draft")}
            {subItem(<FiBookOpen />, "Closed Schemes", "closed")}
          </>
        )}

        {menuItem(<FiFileText />, "Applications", "applications", () =>
          setOpenApps(!openApps)
        )}

        {openApps && (
          <>
            {subItem(<FiClock />, "Pending", "pending")}
            {subItem(<FiCheckCircle />, "Approved", "approved")}
            {subItem(<FiXCircle />, "Rejected", "rejected")}
            {subItem(<FiHelpCircle />, "Special Requests", "specialRequests")}
          </>
        )}

        {menuItem(<FiUsers />, "Donations", "donations", () =>
          setOpenDon(!openDon)
        )}

        {openDon && (
          <>
            {subItem(<FiBookOpen />, "History", "donHistory")}
            {subItem(<FiClock />, "Pending", "donPending")}
            {subItem(<FiFileText />, "Receipts", "donReceipts")}
          </>
        )}

        {menuItem(<FiHelpCircle />, "Help", "help")}
        {menuItem(<FiLogOut />, "Logout", "logout")}
      </div>

     {/* HAMBURGER BUTTON */}
<div
  className="sidebar-toggle-btn"
  onClick={() => setSidebarOpen(true)}
  style={{
    position: "fixed",
    top: "8px",
    left: "14px",
    background: "transparent",   // ❌ remove circle
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    display: sidebarOpen ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 8000,
    boxShadow: "none",           // ❌ remove shadow
  }}
>
  <svg
    width="26"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="3"
    strokeLinecap="round"
  >
    <line x1="5" y1="6" x2="22" y2="6" />
    <line x1="5" y1="14" x2="16" y2="14" />
  </svg>
</div>



      {/* MOBILE CSS */}
      <style>{`
        @media (max-width: 768px) {

          .donor-sidebar {
            position: fixed;
            top: 0;
            left: -270px;
            transition: left 0.3s ease;
          }

          .donor-sidebar.open {
            left: 0;
          }

          .sidebar-close-btn {
            display: flex !important;
            justify-content: flex-end;
            color: #fff;
          }
             .sidebar-menu-item div[style*="position: absolute"][style*="width: 4px"] {
              top: 50% !important;
              height: 60% !important; /* same proportional height as desktop */
              transform: translateY(-50%) !important;
              }
        }

        @media (min-width: 769px) {
          .sidebar-menu-item:hover {
            background: rgba(255,255,255,0.08) !important;
          }
          .sidebar-sub-item:hover {
            background: rgba(255,255,255,0.08) !important;
          }
        }

        @media (max-width: 768px) {

  /* Remove large top padding on mobile */
  .donor-sidebar {
    padding-top: 0px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  /* Close button should sit higher */
  .sidebar-close-btn {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  /* Reduce logo spacing on mobile */
  .donor-sidebar img {
    margin-top: 0 !important;
    margin-bottom: 10px !important;
    width: 150px !important;
  }

  /* Reduce title spacing */
  .donor-sidebar h2 {
    margin-top: 4px !important;
  }

  .donor-sidebar p {
    margin-top: 2px !important;
    margin-bottom: 16px !important;
  }
}


      `}</style>
    </>
  );
}
