import Link from "next/link";

type Page = {
    title: string;
    link: string;
}

type NavItemProps = {
    onClick: () => void;
    page: Page;
    index:number;
}

export default function NavItem({onClick, page, index}: NavItemProps){
    return(
        <Link href={page.link}>
            <li className="nav-item" onClick={onClick}>
                <h1 className="page-heading-title">{page.title}</h1>
                <p className="nav-item-index">{index.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</p>
            </li>
        </Link>
    );
}