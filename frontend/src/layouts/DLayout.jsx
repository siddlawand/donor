import DSidebar from "../components/DSidebar";
import DHeader from "../components/DHeader";
import DFooter from "../components/DFooter";
import { Outlet } from "react-router-dom";

export default function DLayout() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* LEFT SIDEBAR */}
      <DSidebar />

      {/* RIGHT MAIN AREA */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <DHeader />


        {/* MAIN CONTENT AREA */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            background: "#f9fbfd",
          }}
        >
          <Outlet />
        </div>

        {/* FOOTER */}
        <DFooter />
      </div>
    </div>
  );
}
