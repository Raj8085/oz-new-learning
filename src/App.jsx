import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Service from "./pages/service/Service";
// import Contact from "./component/contact-component/Contact";
import ContactPage from "./pages/contact/ContactPage";
import ScrollToTop from "./components/layout/TopScroll";
import Home from "./pages/Home/Home";
import WebsiteWrapper from "./components/layout/Loader";
// import About from "./pages/about/About";
// import Gallery from "./pages/gallery/Gallery";
// import Contact from "./pages/contact/Contact";
// import Services from "./pages/services/Services";
// import Clientele from "./pages/clientele/Clientele";
// import Product from "./pages/product/Product";
// import ScrollToTop from "./layout/ScrollToTop";


function App() {
  return (
    // <WebsiteWrapper>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Service />} />
       <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    // </WebsiteWrapper>
  );
}

export default App;
