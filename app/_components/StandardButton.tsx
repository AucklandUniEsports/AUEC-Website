import Link from "next/link";

type StandardButtonProps =
  | {
      title: string;
      color: string;
      link: string; // link present → render <Link>
      onClick?: never;
      type?: never;
    }
  | {
      title: string;
      color: string;
      link?: undefined;
      onClick?: () => void;
      type?: "button" | "submit" | "reset";
    };

export default function StandardButton(props: StandardButtonProps) {
  const className = `button-standard button-${props.color}`;

  if (props.link) {
    return (
      <Link href={props.link} className={className}>
        {props.title}
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      {props.title}
    </button>
  );
}
