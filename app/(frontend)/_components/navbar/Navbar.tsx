"use client";

import { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarPages from "./NavbarPages";
import NavItem from "./NavItem";
import SocialMediaLinkBar from "../SocialMediaLinkBar";
import StandardButton from "../StandardButton";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/events", label: "EVENTS" },
        { href: "/about", label: "ABOUT" },
        { href: "/team", label: "TEAM" },
        { href: "/sponsors", label: "SPONSORS" },
        { href: "/contact", label: "CONTACT" },
    ];

    const isActiveLink = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <>
            <div className="top-layer">
                <header className={`navbar ${isOpen ? "menu-open" : ""}`}>
                    <Link href="/" onClick={() => setOpen(false)}>
                        <img
                            className="navbar-logo"
                            src="/auec_logo_no_text.svg"
                            alt="AUEC logo"
                        />
                    </Link>

                    <nav className="navbar-items">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`navbar-link ${
                                    isActiveLink(link.href) ? "active" : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="navbar-right">
                        <div className="navbar-socials-wrapper">
                            <a
                                href="https://discord.com/invite/ZmcUREd"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="navbar-logo navbar-socials"
                                    src="/discord.svg"
                                    alt="Discord"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/aucklanduniesports/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="navbar-logo navbar-socials"
                                    src="/instagram.svg"
                                    alt="Instagram"
                                />
                            </a>

                            <a
                                href="https://twitch.tv/aucklanduniesports"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="navbar-logo navbar-socials"
                                    src="/twitch.svg"
                                    alt="Twitch"
                                />
                            </a>
                        </div>

                        <StandardButton
                            title={
                                <em>
                                    <strong>SIGN UP</strong>
                                </em>
                            }
                            color="lime"
                            link="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform"
                            external
                            className="signup-button"
                        />
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
                        </ul>

                        <div className="navbar-open-bottom">
                            <StandardButton
                                title={
                                    <>
                                        Sign up to{" "}
                                        <em>
                                            <strong>AUEC.</strong>
                                        </em>
                                    </>
                                }
                                color="lime"
                                link="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
                                external
                                onClick={() => setOpen(false)}
                            />

                            <SocialMediaLinkBar />
                        </div>
                    </nav>
                )}
            </div>
        </>
    );
}
