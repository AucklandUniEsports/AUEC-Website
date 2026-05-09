"use client";

import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StandardButton from "../StandardButton";
import NavbarPages from "./NavbarPages";
import NavItem from "./NavItem";
import SocialMediaLinkBar from "../SocialMediaLinkBar";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/events", label: "EVENTS" },
        { href: "/about", label: "ABOUT" },
    ];

    return (
        <>
            <div className="top-layer">
                <header className={`navbar ${isOpen ? "menu-open" : ""}`}>
                    <Link href="/">
                        <img
                            className="navbar-logo"
                            src="auec_logo_no_text.svg"
                            alt=""
                        />
                    </Link>

                    <nav className="navbar-items">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`navbar-link ${
                                    link.href === "/"
                                        ? pathname === "/"
                                            ? "active"
                                            : ""
                                        : pathname.startsWith(link.href)
                                          ? "active"
                                          : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="AUEC 2026 Sponsorship Deck.pdf"
                            className="navbar-link"
                            target="_blank"
                        >
                            SPONSORS
                        </a>

                        <a
                            href="mailto:uoaesports@gmail.com"
                            className="navbar-link"
                        >
                            CONTACT
                        </a>
                    </nav>
                    <div className="navbar-right">
                        <div className="navbar-socials-wrapper">
                            <a
                                href="https://discord.com/invite/ZmcUREd"
                                target="_blank"
                            >
                                <img
                                    className="navbar-logo navbar-socials"
                                    src="discord.svg"
                                    alt="Discord"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/aucklanduniesports/"
                                target="_blank"
                            >
                                <img
                                    className="navbar-logo navbar-socials"
                                    src="instagram.svg"
                                    alt="Instagram"
                                />
                            </a>
                            <a
                                href="twitch.tv/aucklanduniesports"
                                target="_blank"
                            >
                                <img
                                    className="navbar-logo navbar-socials"
                                    src="twitch.svg"
                                    alt="Twitch"
                                />
                            </a>
                        </div>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform"
                            className="button-standard button-lime signup-button"
                            target="_blank"
                        >
                            <em>
                                <strong>SIGN UP</strong>
                            </em>
                        </a>
                    </div>

                    <div className="navbar-hamburger">
                        <Hamburger
                            size={28}
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </div>
                </header>

                {isOpen && (
                    <nav className="navbar-open">
                        <ul className="navbar-menu">
                            {NavbarPages.map((page, index) => (
                                <NavItem
                                    key={index}
                                    onClick={() => setOpen(false)}
                                    page={page}
                                    index={index + 1}
                                />
                            ))}
                            <a
                                href="AUEC 2026 Sponsorship Deck.pdf"
                                target="_blank"
                            >
                                <li
                                    className="nav-item"
                                    onClick={() => setOpen(false)}
                                >
                                    <h1 className="nav-item-title">Sponsors</h1>
                                    <p className="nav-item-index">04</p>
                                </li>
                            </a>
                            <a href="mailto:uoaesports@gmail.com">
                                <li
                                    className="nav-item"
                                    onClick={() => setOpen(false)}
                                >
                                    <h1 className="nav-item-title">Contact</h1>
                                    <p className="nav-item-index">05</p>
                                </li>
                            </a>
                        </ul>

                        <div className="navbar-open-bottom">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
                                target="_blank"
                                className="button-standard button-lime"
                                onClick={() => setOpen(false)}
                            >
                                Sign up to AUEC.
                            </a>
                            <SocialMediaLinkBar />
                        </div>
                    </nav>
                )}
            </div>
        </>
    );
}
