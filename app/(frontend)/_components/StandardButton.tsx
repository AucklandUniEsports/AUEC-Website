import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  title: ReactNode;
  color: string;
  className?: string;
};

type StandardButtonProps = CommonProps &
  (
    | {
        link: string; // link present → render <Link>
        external?: boolean;
        onClick?: () => void;
        type?: never;
        disabled?: never;
      }
    | {
        link?: undefined;
        external?: never;
        onClick?: () => void;
        type?: "button" | "submit" | "reset";
        disabled?: boolean;
      }
  );

export default function StandardButton(props: StandardButtonProps) {
  const className = `button-standard button-${props.color} inline-block -skew-x-12 ${props.className ?? ""}`;
  const label = <span className="inline-block skew-x-12">{props.title}</span>;

  if (props.link && props.external) {
    return (
      <a
        href={props.link}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={props.onClick}
      >
        {label}
      </a>
    );
  }

  if (props.link) {
    return (
      <Link href={props.link} className={className} onClick={props.onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={props.onClick}
      type={props.type ?? "button"}
      disabled={props.disabled}
    >
      {label}
    </button>
  );
}
