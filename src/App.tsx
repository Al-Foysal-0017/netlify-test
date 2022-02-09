import { motion } from "framer-motion";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components";
import Footer from "./components/footer/Footer";
import Home from "./pages/home";
import OurVision from "./pages/ourVision";
import Drops from "./pages/drops";
import NotFound from "./pages/notFound";
import PrivacyPolicy from "./pages/privacyPolicy";
import ScrollToTop from "./components/scrollToTop";
import "./_app.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  // useEffect(() => {
  //   // ReactGA.initialize("G-2RWJCW96CF"); //Lian sir
  //   // ReactGA.initialize("G-9H8YD31NBE"); //Naiem Foysal
  //   ReactGA.initialize("G-CQ8WJQB378"); //Al Foysal
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <>
      <motion.div initial="hidden" animate="show" className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="our-vision" element={<OurVision />} />
          <Route path="drops" element={<Drops />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
