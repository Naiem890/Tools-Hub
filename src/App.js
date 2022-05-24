import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Pages/Blogs/Blogs";

import Home from "./components/Pages/Home/Home";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import NotFound from "./components/Shared/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
