import React, {useState} from 'react'
import './css/main.css'
import favlogo from '../../images/favicon.ico'
import './css/main.css';
import logo from '../../images/favicon.ico'

import {Link} from 'react-scroll'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <div>
        	<header style={{display: 'flex', justifyContent: 'center'}} className="header-section clearfix">
		<div className="container-fluid">
			<a href="index.html" className="site-logo">
				<img src="img/logo.png" alt="" />
			</a>
			<div classNameName="responsive-bar"><i className="fa fa-bars"></i></div>
			<a href="" className="user"><i className="fa fa-user"></i></a>
			<a href="" className="site-btn">Sign Up Free</a>
			<nav className="main-menu">
				<ul className="menu-list">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#features">Features</a></li>
					<li><a href="#tutorials">Features</a></li>
					<li><a href="#news">News</a></li>
					
					<li><a href="">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>
      </div>
    );
}

export default Navbar