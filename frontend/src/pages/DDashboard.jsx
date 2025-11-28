import {
  FiUsers,
  FiDollarSign,
  FiLayers,
  FiFileText,
  FiAlertTriangle,
  FiActivity,
  FiClock,
} from "react-icons/fi";

export default function DDashboard() {
  const card = (title, value, icon, bgGradient, onClick) => (
    <div
      className="impact-card"
      onClick={onClick}
      style={{
        background: bgGradient,
        padding: "26px",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        cursor: "pointer",
        transition: "0.25s",
        position: "relative",
        overflow: "hidden",
        color: "#0A2A43",
      }}

      // ⭐ RESTORED DESKTOP HOVER (NOT mobile)
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 22px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
    >
      {/* Watermark icon */}
      <div
        style={{
          position: "absolute",
          right: "-5px",
          bottom: "-5px",
          fontSize: "72px",
          opacity: 0.12,
        }}
      >
        {icon}
      </div>

      {/* Foreground Icon */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontSize: "26px", color: "#0A2A43" }}>{icon}</span>
      </div>

      <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 700 }}>
        {title}
      </h3>
      <p style={{ fontSize: "15px", opacity: 0.8 }}>{value}</p>
    </div>
  );

  return (
    <div className="dashboard-wrapper" style={{ width: "100%" }}>
      
      {/* WELCOME CARD */}
      <div
        className="welcome-card"
        style={{
          background: "white",
          padding: "28px",
          borderRadius: "14px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          marginBottom: "35px",
          borderLeft: "6px solid rgb(0, 95, 153)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "28px", color: "rgb(0,95,153)" }}>
          👋 Welcome Back, Donor Name
        </h2>
        <p style={{ marginTop: "10px", fontSize: "16px", color: "#555" }}>
          Thank you for your incredible contribution through VidyaSetu.
        </p>
      </div>

      <h2
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "rgb(0,95,153)",
          marginBottom: "25px",
        }}
      >
        Your Impact Overview
      </h2>

      {/* GRID */}
      <div
        className="impact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {card("Students Sponsored", "45 Students Supported", <FiUsers />, "linear-gradient(135deg, #E3F2FD, #BBDEFB)")}
        {card("Total Amount Donated", "₹ 2,75,000 Donated", <FiDollarSign />, "linear-gradient(135deg, #E1F5FE, #B3E5FC)")}
        {card("Active Schemes", "3 Schemes Running", <FiLayers />, "linear-gradient(135deg, #E8EAF6, #C5CAE9)")}
        {card("Special Requests", "4 Special Requests", <FiAlertTriangle />, "linear-gradient(135deg, #E0F7FA, #B2EBF2)")}
        {card("Pending Applications", "8 New Requests", <FiClock />, "linear-gradient(135deg, #FFF3E0, #FFE0B2)")}
        {card("Recent Activity", "You reviewed a special support request from Amit Verma.", <FiActivity />, "linear-gradient(135deg, #E8F5E9, #C8E6C9)")}
      </div>

      {/* 📱 MOBILE FONTS */}
      <style>{`
        @media (max-width: 768px) {
          .dashboard-wrapper { padding: 10px !important; }

          .welcome-card h2 { font-size: 20px !important; }
          .welcome-card p { font-size: 14px !important; }

          .impact-card { padding: 16px !important; }
          .impact-card h3 { font-size: 16px !important; }
          .impact-card p { font-size: 13px !important; }
          .impact-card span { font-size: 20px !important; }

          h2 { font-size: 20px !important; }
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
