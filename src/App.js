import './App.css';
import './style.css';
import Use from "./use";
import Conf from "./Conf";
import Cookies from "./Cookies";
import MainPage from "./MainPage";
import ScrollToTop from './ScrollToTop';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Chats from './Chats';

function App() {
  return (
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
      <Route path="/use" element={<Use />}/>
      <Route path="/" element={<MainPage />} />
      <Route path="/conf" element={<Conf />} />
      <Route path="/Cookies" element={<Cookies />} />
      <Route path="/Chats" element={<Chats />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
