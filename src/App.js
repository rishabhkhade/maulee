import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./comp/header/Header";
import Home from "./pages/home/Home";
import Footer from "./comp/footer/Footer";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
