import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
    title: ReactNode;
    color: string;
    size?: "default" | "small";
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
              pressed?: never;
          }
        | {
              link?: undefined;
              external?: never;
              onClick?: () => void;
              type?: "button" | "submit" | "reset";
              disabled?: boolean;
              pressed?: boolean; // toggle buttons → aria-pressed
          }
    );

const colorClasses: Record<string, string> = {
    lime: "bg-neon-green text-black bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.8),transparent)] bg-size-[40%_100%] bg-no-repeat bg-position-[-70%_0] duration-500 not-disabled:hover:bg-position-[170%_0] motion-reduce:bg-none",
    grey: "bg-[#6b6b6b] text-white bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.2),transparent)] bg-size-[40%_100%] bg-no-repeat bg-position-[-70%_0] duration-500 not-disabled:hover:bg-position-[170%_0] motion-reduce:bg-none",
    red: "bg-[#df5f5f] text-white not-disabled:hover:bg-[#f56868]",
    dark: "bg-[#272727] text-white not-disabled:hover:bg-[#333333]",
};

const sizeClasses = {
    default:
        "px-5 text-sm tracking-widest md:px-8 md:text-lg md:tracking-[0.15em]",
    small: "px-5 text-sm tracking-widest md:px-7 md:text-base",
};

export default function StandardButton(props: StandardButtonProps) {
    const className = `inline-block h-fit w-fit -skew-x-12 cursor-pointer border-none py-2 font-syne whitespace-nowrap uppercase ${sizeClasses[props.size ?? "default"]} transition-[box-shadow,background-color,background-position,color,scale] duration-200 ease-out not-disabled:active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none ${colorClasses[props.color] ?? ""} ${props.className ?? ""}`;
    const label = (
        <span className="inline-block skew-x-12 font-syne [&_*]:font-syne">
            {props.title}
        </span>
    );

    if (props.link && props.external) {
        return (
            <Link
                href={props.link}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
                onClick={props.onClick}
            >
                {label}
            </Link>
        );
    }

    if (props.link) {
        return (
            <Link
                href={props.link}
                className={className}
                onClick={props.onClick}
            >
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
            aria-pressed={props.pressed}
        >
            {label}
        </button>
    );
}
