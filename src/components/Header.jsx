import React from 'react';
import { FaUser } from "react-icons/fa";


function Header() {
  return (
    <div className="header">
      <button>
        <FaUser /> Login
       </button>
    </div>
  );
}

export default Header;