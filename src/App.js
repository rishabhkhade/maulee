import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./comp/header/Header";
import Home from "./pages/home/Home";
import Footer from "./comp/footer/Footer";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import AfterFooter from "./comp/afterFooter/AfterFooter";
import Blog from "./pages/blogs/Blog";
import ScrollToTop from "./comp/scrolltotop/ScrollToTop";
import PopUp from "./comp/popup/PopUp";
import { useEffect, useState } from "react";
import Testimoneal from "./pages/testimoneal/Testimoneal";
import BlogView from "./pages/blogview/BlogView";
import Tatto_care from "./pages/tattocare/Tatto_care";
import Privacy from "./pages/privacy/Privacy";
import Cookies from "./pages/cookies/Cookies";
import ArtClasses from "./pages/artClasses/ArtClasses";
import ReactGA from "react-ga4";

import Error from "./pages/error/Error";
import Kharadi from "./pages/best-tattoo-shops-kharadi/Kharadi";
import Koregaon from "./pages/best-tattoo-shops-koregaon/Koregaon";
import TingreNagar from "./pages/tattoo-studio-tingre-nagar-pune/TingreNagar";
import Kalyaninagar from "./pages/best-tattoo-shops-kalyaninagar/Kalyaninagar";
import Vishrantwadi from "./pages/tatto-shops-vishrantiwadi-pune/Vishrantwadi";
import VimanNagar from "./pages/tattoo-artists-viman-nagar-pune/VimanNagar";
function App() {
  const [popup, setPopup] = useState(false);
  const [blogview, setBlogView] = useState([]);

  ReactGA.initialize("G-LFH7NC7P8K");

  useEffect(() => {
    // Add the analytics script to the <head>
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-Y66VD4YHRR";
    document.head.appendChild(script1);

    // Add the gtag initialization script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y66VD4YHRR');
    `;
    document.head.appendChild(script2);
  }, []);

  const openPopUpdely = () => {
    setTimeout(() => {
      setPopup(true);
    }, 10000);
  };
  useEffect(() => {
    openPopUpdely();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        {popup && <PopUp setPopup={setPopup} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/mouleeswork" element={<Gallery />} />
          <Route path="/our_Clients" element={<Testimoneal />} />
          <Route path="/blogs" element={<Blog setBlogView={setBlogView} />} />
          <Route path="/Moulee’s_care" element={<Tatto_care />} />
          <Route
            path="/blog/:title"
            element={<BlogView blogview={blogview} />}
          />
          <Route path="/contact-form" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/best-tattoo-shop-kharadi-pune" element={<Kharadi />} />
          <Route
            path="/best-tattoo-shop-koregaon-pune"
            element={<Koregaon />}
          />
          <Route
            path="/tattoo-studio-tingre-nagar-pune"
            element={<TingreNagar />}
          />
          <Route
            path="/tattoo-artists-kalyani-nagar-pune"
            element={<Kalyaninagar />}
          />
          <Route
            path="/tattoo-shops-vishrantwadi-pune"
            element={<Vishrantwadi />}
          />
          <Route
            path="/tattoo-artists-viman-nagar-pune"
            element={<VimanNagar />}
          />
          <Route path="*" element={<Error />} />

          <Route path="/artclasses" element={<ArtClasses />} />
        </Routes>
        <Footer setPopup={setPopup} />
        <AfterFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
