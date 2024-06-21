import React from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/images/podcast.png"
import "../Styles/sideBar.css"



function SideBar() {
  return (
    <div className="side-bar">
      <img src={logo} alt="Logo" className='logo'/>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>
                <MdHomeFilled/>
              </span>
              <p>Podcasts</p>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <span>
                <FaHeart/>
              </span>  
              <p>Favorites</p>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <span>
                <CiSearch />
              </span>  
              <p>Search</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;