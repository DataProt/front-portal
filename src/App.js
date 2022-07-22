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
import Navbar from "./components/Navbar";
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <SignUpModal />
    <SignInModal />
    <Navbar />
    <Routes>
     <Route path="/" element={<Dashboard />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/settings" element={<Settings />} />
     <Route path="/tasks" element={<Tasks />} />
     <Route path="/projects" element={<Projects />} />
    </Routes>
    </>
  );
}

export default App;
