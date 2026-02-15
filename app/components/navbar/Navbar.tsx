'use client';

import { useEffect, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import StandardButton from '../StandardButton';
import NavbarPages from './NavbarPages';
import NavItem from './NavItem';
import SocialMediaLinkBar from '../SocialMediaLinkBar';


export default function Navbar(){
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
    return(
        <>
            <div className='top-layer'>
                <header className='navbar'>
                    <a href="/">
                    <img className='navbar-logo' src="auec_logo.svg" alt="" />
                    </a>
                    <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
                </header>
                {isOpen && (
                    <nav className='navbar-open'>
                            <ul className='navbar-menu'>
                                {
                                    NavbarPages.map((page, index) =>
                                        <NavItem key={index} onClick={() => setOpen(false)} page={page} index={index + 1}/>
                                    )
                                }
                                <a href="AUEC 2026 Sponsorship Deck.pdf" target="_blank">
                                    <li className="nav-item" onClick={() => setOpen(false)}>
                                        <h1 className="page-heading-title">SPONSORS</h1>
                                        <p className="nav-item-index">04</p>
                                    </li>
                                </a>
                                <a href="mailto:uoaesports@gmail.com">
                                    <li className="nav-item" onClick={() => setOpen(false)}>
                                        <h1 className="page-heading-title">CONTACT</h1>
                                        <p className="nav-item-index">05</p>
                                    </li>
                                </a>

                            </ul>
                            <div className='navbar-open-bottom'>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"  target="_blank" className="button-standard button-lime" onClick={() => setOpen(false)}>
                                    Sign up to AUEC.
                                </a>
                                <SocialMediaLinkBar/>
                            </div>
                    </nav>
                )}
            </div>
        </>
    );
}