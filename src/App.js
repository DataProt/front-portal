import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <SignUpModal />
    <SignInModal />
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
