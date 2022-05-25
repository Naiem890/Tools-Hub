import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Pages/Blogs/Blogs";

import Home from "./components/Pages/Home/Home";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import NotFound from "./components/Shared/NotFound";
import Order from "./components/Pages/Order/Order";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Login/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
