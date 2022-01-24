
// react router
import { Routes, Route, useNavigate } from "react-router-dom";

// container
import Home from "./container/Home";

// components
import Login from "./components/Login";


function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
