import { FiSearch, FiUser } from "react-icons/fi";

export default function DHeader({ openSidebar }) {
  return (
    <div
      className="donor-header"
      style={{
        width: "100%",
        background: "#005F99",
        padding: "14px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #005F99",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >

      {/* TITLE */}
      <h2
        className="header-title"
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "white",
          marginLeft: 60,
          whiteSpace: "nowrap",
        }}
      >
        Donor Portal
      </h2>

      {/* SEARCH BAR */}
      <div
        className="header-search"
        style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          padding: "10px 20px",
          borderRadius: "40px",
          width: "40%",
          maxWidth: "450px",
          border: "1px solid #DDE3EA",
        }}
      >
        <FiSearch style={{ fontSize: "18px", color: "#475569" }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            border: "none",
            outline: "none",
            marginLeft: "12px",
            width: "100%",
            fontSize: "15px",
            background: "transparent",
          }}
        />
      </div>

      {/* USER */}
      <div
        className="header-user"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          color: "white",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
        onClick={() => alert("clicked")}
      >
        <FiUser style={{ fontSize: "22px" }} />
        <span>donor.user</span>
        <span>▼</span>
      </div>

      {/* ⭐ MOBILE-ONLY LAYOUT FIXES */}
      <style>{`
        @media (max-width: 768px) {
          /* Show hamburger */
          .mobile-menu-btn {
            display: block !important;
          }

          /* Header becomes 2 rows */
          .donor-header {
            padding: 10px 14px !important;
            flex-wrap: wrap;
            row-gap: 8px;
          }

          /* First row: menu + title + user */
          .header-title {
            font-size: 18px !important;
            margin-right: 8px;
          }

          .header-user {
            gap: 6px !important;
          }

          .header-user span {
            font-size: 14px !important;
          }

          /* Second row: full-width search bar */
          .header-search {
            order: 3;
            width: 100% !important;
            max-width: none !important;
            padding: 8px 14px !important;
          }

          .header-user {
            order: 2;
          }

          .header-title {
            order: 1;
          }
        }
      `}</style>
    </div>
  );
}
