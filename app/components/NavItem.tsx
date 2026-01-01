import Link from "next/link";

interface NavItemProps{
    onClick: () => void;
    page:string;
}

export default function NavItem({onClick, page}: NavItemProps){
    return(
        <Link href={"/" + page}>
            <li className="nav-item" onClick={onClick}>
                <header className="nav-item-heading">
                    <img className="page-heading-icon" src={"/" + page + ".svg"} alt="" />
                    <h1 className="page-heading-title">{page}</h1>
                </header>
                <div className='divider-standard'></div>
            </li>
        </Link>
    );
}