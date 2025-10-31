
import AboutPage from "../Page/AboutPage";
import Services from "../components/Services";
import Footer from "../components/Footer";
import BlogPage from "../Page/BlogPage";
import Hero from "../components/Hero";
import PackagesPage from "../Page/PackagePage";

const Home = () => {
  return (
    <>
     <Hero />
     <Services />
     <PackagesPage />
     <BlogPage />
     <AboutPage />
     <Footer />
    </>
 
  );
};

export default Home;
