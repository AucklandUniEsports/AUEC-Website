import Image from "next/image";

interface PageHeadingProps{
    page:string;
}

export default function PageHeading({page}: PageHeadingProps){
    return(
        <header className="page-heading">
            <img className="page-heading-icon" src={"/" + page + ".svg"} alt="" />
            <h1 className="page-heading-title">{page}</h1>
        </header>
    );
}