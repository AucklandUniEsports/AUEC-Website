interface StandardButtonProps{
    title: string;
    isLink: true | false;
    type?: "button" | "submit" | "reset";
}

export default function StandardButton({title, type = "button"}: StandardButtonProps){
    return(
        <button className="action-block">
            {title}
        </button>
    );
}