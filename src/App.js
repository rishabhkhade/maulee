import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./comp/header/Header";
import Home from "./pages/home/Home";
import Footer from "./comp/footer/Footer";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/mauleeswork" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
