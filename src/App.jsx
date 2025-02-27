import React, { useState, useEffect } from "react";
import MetaMaskLogin from "./components/MetaMaskLogin";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Election from "./pages/Election";
import Voting from "./pages/Voting";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";
function App() {
  const [userAddress, setUserAddress] = useState(localStorage.getItem("userAddress") || null);

  const handleLogin = (address) => {
    setUserAddress(address);
    localStorage.setItem("userAddress", address);
  };

  const handleLogout = () => {
    setUserAddress(null);
    localStorage.removeItem("userAddress");
  };

  return (
    <Router>
    <div className="container mt-5">
      <h1 className="text-center">Blockchain Voting System</h1>

      {userAddress ? (
        <>
          <Navbar userAddress={userAddress} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/election" element={<Election />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </>
      ) : (
        <MetaMaskLogin onLogin={handleLogin} />
      )}
    </div>
  </Router>
  );
}

export default App;
