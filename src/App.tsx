import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/nav";
import Notfound from "./pages/notfound";
import Home from "./pages/home";
import Login from "./pages/login";
import Viliage from "./pages/viliage";
import "./normalize.css";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mining from "./pages/mining";
import { Authorize } from "./auth";
function App() {
  const [UserObj, setUserObj] = useState<Authorize>(new Authorize());
  console.log(UserObj);
  return (
    <>
      <BrowserRouter>
        <Navigation UserObj={""} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viliage" element={<Viliage />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/login" element={<Login UserObj={UserObj} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
