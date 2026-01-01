'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import BackArrowIcon from "./icons/BackArrowIcon";

export default function BackNav(){
    const parentPath = usePathname().split('/')[1];
    return(
        <>
            <nav className="back-nav">
                <Link className="back-nav-button" href={'/' + parentPath}>
                    <BackArrowIcon/>
                </Link>
                <p>Back to <span className="capitalize">{parentPath}</span></p>
            </nav>
            <div className='divider-standard'></div>
        </>
    );
}