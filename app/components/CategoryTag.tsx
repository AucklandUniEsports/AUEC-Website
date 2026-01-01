type  CategoryTagProps =
    |{
        name: string;
        htmlFor?: string;
     }
    |{
        name: string;
        htmlFor?: undefined;
    };

export default function CategoryTag(props: CategoryTagProps){
    if (props.htmlFor){
        return(
                <label className="category-tag" htmlFor={props.htmlFor}>{props.name}</label>
        )
        
    }
    return(
        <li className="category-tag">
            <p>{props.name}</p>
        </li>
    );
}