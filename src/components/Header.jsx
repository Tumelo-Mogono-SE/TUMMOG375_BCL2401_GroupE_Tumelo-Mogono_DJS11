import React from 'react';
import { FaUser } from "react-icons/fa";
import "../Styles/header.css"


function Header() {
  return (
    <div className="header">
      <button>
        <span><FaUser /></span> Login
       </button>
    </div>
  );
}

export default Header;