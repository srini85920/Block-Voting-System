import React, { useState } from "react";
import { ethers } from "ethers";
import allowedWallets from "../config/allowedWallets"; 

const MetaMaskLogin = ({ onLogin }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask not detected! Please install MetaMask.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setAccount(address);
      if (allowedWallets.map(addr => addr.toLowerCase()).includes(address.toLowerCase())) {
        onLogin(address); 
      } else {
        alert("❌ You are not an authorized voter.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("⚠ Something went wrong!");
    }
  };

  return (
    <div className="text-center">
      <button className="btn btn-primary" onClick={connectWallet}>
        {account ? `Connected: ${account.slice(0, 6)}...` : "Login with MetaMask"}
      </button>
    </div>
  );
};

export default MetaMaskLogin;
