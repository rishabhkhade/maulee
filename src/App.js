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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/mauleeswork" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <AfterFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
