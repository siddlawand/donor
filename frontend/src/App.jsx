import { BrowserRouter, Routes, Route } from "react-router-dom";
import DLayout from "./layouts/DLayout";
import DDashboard from "./pages/DDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DLayout />}>
          <Route index element={<DDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
