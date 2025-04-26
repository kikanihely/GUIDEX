import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Feedback from "../pages/Feedback";
import Schemes from "../pages/Schemes";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import AddScheme1 from "../components/AddScheme1";
import AddScheme2 from "../components/AddScheme2";
import AddScheme3 from "../components/AddScheme2";
import SchemePage from "../pages/SchemePage";
import Navbar from "../components/Navbar";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePAge";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/register" element={<Register />} />   
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/add-scheme" element={<AddScheme1 />} /> 
        <Route path="/add-scheme-2" element={<AddScheme2 />} /> 
        <Route path="/scheme" element={<SchemePage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/admin/dashboard" element={<Admin />} /> 

      </Routes>
    </Router>
  );
};

export default AppRouter;