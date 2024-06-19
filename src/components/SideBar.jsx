import React from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import logo from "../assets/images/podcast.png"
import "../Styles/sidebar.css"



function SideBar() {
  return (
    <div className="side-bar">
      <img src={logo} alt="Logo" className='logo'/>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <MdHomeFilled/>
              <span>  </span>
              <p>Podcasts</p>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <FaHeart/>  Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;