'use client';

import { useEffect, useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import StandardButton from './StandardButton';
import NavItem from './NavItem';
import AUECLogo from './icons/AUECLogo';

const pages = ["dashboard", "users", "events", "sponsors", "miscellaneous", "settings"];

export default function Navbar(){
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
    return(
        <>
            <div className='top-layer'>
                <header className='navbar'>
                    <AUECLogo/>
                    <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
                </header>
                {isOpen && (
                    <nav className='navbar-open'>
                            <ul className='navbar-menu'>
                                {
                                    pages.map(page =>
                                        <NavItem key={page} onClick={() => setOpen(false)} page={page}/>
                                    )
                                }
                            </ul>
                    </nav>
                )}
            </div>
        </>
    );
}