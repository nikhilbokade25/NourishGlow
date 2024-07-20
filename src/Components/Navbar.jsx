import React from 'react';
import './Navbar.css';
import ShoppingCart from '../assets/cart.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import { Link, animateScroll as Scroll } from 'react-scroll';

export default function Navbar() {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        navRef.current.classList.toggle("nav_closed");
    }

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    }

    return (
        <div className="header">
            <h3 className="logo">Nourish Glow</h3>
            <nav className="nav" ref={navRef}>
                <ul>
                    <li><Link to="home" smooth={true} duration={500} onClick={hideNavbar}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} onClick={hideNavbar}>About Us</Link></li>
                    <li><Link to="products" smooth={true} duration={500} onClick={hideNavbar}>Products</Link></li>
                    <li><Link to="order" smooth={true} duration={500} onClick={hideNavbar}>Order Online</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} onClick={hideNavbar}>Contact Us</Link></li>
                </ul>
                <button className="nav_btn nav_btn_close" onClick={showNavbar}>
                    <FaTimes /><span>CLOSE</span>
                </button>
            </nav>
            <div className="menu-cart-container">
                <button className="nav_btn nav_btn_menu" onClick={showNavbar}>
                    <FaBars /><span>MENU</span>
                </button>
                <div className="cart-icon">
                    <img src={ShoppingCart} alt="Cart" />
                </div>
            </div>
        </div>
    );
}
