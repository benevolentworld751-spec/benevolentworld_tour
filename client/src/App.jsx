import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ import this
import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
// import Destinations from "./components/Destinations";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import AboutPage from "./Page/AboutPage"
import Home from "./components/Home";
import Search from "./Page/Search";
import BlogPage from "./Page/BlogPage";
import Profile from "./Page/Profile";
import SignupPage from "./Page/SignupPage";
import LoginPage from "./Page/LoginPage";
import PackagesPage from "./Page/PackagePage";
import VisaApply from "./components/VisaApply";
import FlightApplyPage from "./components/FlightApply";
import VisaPage from "./Page/VisaPage";
import FlightPage from "./Page/FlightPage";
import HolidayPage from "./Page/HolidayPage";
import BookHolidayPage from "./Page/BookHolidayPage";
import CarPackagePage from "./Page/CarPackagePage";
import BookCar from "./components/BookCar";
import NotFound from "./components/NotFound";
import AdminDashboard from "./Page/admin/AdminDashboard";
import RoleSelectionCard from "./components/RoleSelectionCard";
import PrivateRoute from "./Routes/PrivateRoute"
import AdminRoute from "./Routes/AdminRoute"
import UpdatePackage from "./Page/admin/UpdatePackage";
import RatingsPage from "./Page/user/RatingPage";
import Package from "./Page/Package";
import { FaRobot } from "react-icons/fa";
import AskAIModal from "./components/AskAIModal";
import Booking from "./Page/user/Booking";

function App() {

     const [showModal, setShowModal] = useState(false);
  const [aiReply, setAIReply] = useState("");
  const [loading, setLoading] = useState(false);
 // const [defaultPrompt, setDefaultPrompt] = useState("");
  const handleAsk = async (question) => {
    setLoading(true);
    try {
      const res = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        },
      });
      const response = res.data.candidates?.[0]?.content?.parts?.[0]?.text;
      setAIReply(response || "No answer from AI.");
    } catch (error) {
      console.log(error);
      setAIReply("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };    


  return (
    <>
    <Router> {/* ✅ Router wrapper */}
      <Navbar />
      <ScrollToTop />
      <Routes> {/* ✅ All routes must be inside <Routes> */}
        <Route
          path="/"
          element={
            <Home />  
          }
        />  
          <Route path="/select-role" element={<RoleSelectionCard />} /> 
          {/* <Route path="/user/profile" element={<UpdateProfile />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
           <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} /> {/* ✅ Your blogs route */}
          <Route path="/about" element={<AboutPage />} />
         {/* <Route path="/service" element={<Services />} /> */}
            {/* user */}
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="user" element={<Profile />} />
            </Route>
            {/* admin */}
            <Route path="/profile" element={<AdminRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route
                path="admin/update-package/:id"
                element={<UpdatePackage />}
              />
            </Route>
            <Route path="/package" element={<PackagesPage/>} />
            <Route path="/package/:id" element={<Package />} />
            <Route path="/package/ratings/:id" element={<RatingsPage />} />
          <Route path="/visa-package" element={<VisaPage/>} />
          <Route path="/air-package" element={<FlightPage/>} />
          <Route path="/holiday" element={<HolidayPage />} />
          <Route path="/book-holiday" element={<BookHolidayPage />} />
          <Route path="/book-flight" element={<FlightApplyPage/>} />
          <Route path="/visa-apply" element={<VisaApply />} />
          <Route path="/contact" element={<Contacts />} />
            <Route path="/booking" element={<PrivateRoute />}>
            <Route path=":packageId" element={<Booking />} />
          </Route>
          <Route path="/car-package" element={<CarPackagePage />} />
          <Route path="/car-book" element={<BookCar />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl animate-bounce"
      >
        <FaRobot size={24} />
      </button>
         {/* AI Modal */}
         <AskAIModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onAsk={handleAsk}
          reply={aiReply}
          loading={loading}
      />
    </>
  );
}

export default App;

