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

function App() {
  const [popup, setPopup] = useState(false);
const [blogview, setBlogView] = useState([])
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
          <Route path="/blog" element={<Blog setBlogView={setBlogView} />} />
          <Route path="/Moulee’s_care" element={<Tatto_care />} />
          <Route path="/blogView" element={<BlogView blogview={blogview} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/artclasses" element={<ArtClasses />} />
        </Routes>
        <Footer setPopup={setPopup} />
        <AfterFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
