"use client";

import { Home, Briefcase, Contact, BrainCircuit } from 'lucide-react'
import { NavBar } from "../ui/tubelight-navbar"
import { useState, useEffect } from "react";

const Navbar = () => {

    const navItems = [
        { name: 'HOME', url: '#home', icon: Home },
        { name: 'PROJECTS', url: '#projects', icon: Briefcase },
        { name: 'AI', url: '#ai', icon: BrainCircuit },
        { name: 'CONTACT', url: '#contact', icon: Contact },
    ]
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            setLastScrollY(window.scrollY);
            };

            window.addEventListener("scroll", handleScroll);
            
            return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    return (
        <div
            className={`w-full z-10 h-0 md:h-24 transition-opacity duration-300 ${
                showNavbar ? "opacity-1" : "opacity-0"
            }`}
        >
        <NavBar items={navItems} />
        </div>
    );
  };
  
  export default Navbar;