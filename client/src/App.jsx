import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ import this
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
import Book from "./components/Book";
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
import UpdateProfile from "./Page/user/UpdateProfile";
import PrivateRoute from "./Routes/PrivateRoute"
import AdminRoute from "./Routes/AdminRoute"
import UpdatePackage from "./Page/admin/UpdatePackage";
import RatingsPage from "./Page/user/RatingPage";
import Package from "./Page/Package";




function App() {
  return (
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
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} /> {/* ✅ Your blogs route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Services />} />
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
          <Route path="/book-now" element={<Book />} />
          <Route path="/car-package" element={<CarPackagePage />} />
          <Route path="/car-book" element={<BookCar />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;

