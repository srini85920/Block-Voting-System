import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userAddress, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">Voting System</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/details">Details</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/election">Election</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/voting">Voting</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/result">Result</Link>
            </li>
          </ul>

          {userAddress ? (
            <button className="btn btn-danger" onClick={() => { onLogout(); navigate("/"); }}>
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
