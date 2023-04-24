import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dash";
import Signup from "./pages/signUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;