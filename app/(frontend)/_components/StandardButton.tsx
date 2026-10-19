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
    lime: "bg-neon-green text-black not-disabled:hover:shadow-[0_0_1.25rem_rgb(226_255_0/0.45)]",
    grey: "bg-[#6b6b6b] text-white not-disabled:hover:bg-[#868686] not-disabled:hover:shadow-[0_0_1.25rem_rgb(255_255_255/0.3)]",
    red: "bg-[#df5f5f] text-white not-disabled:hover:bg-[#f56868]",
    dark: "bg-[#272727] text-white not-disabled:hover:bg-[#333333]",
};

const sizeClasses = {
    default: "px-6 text-base tracking-[0.15em] md:px-8 md:text-lg",
    small: "px-5 text-sm tracking-widest md:px-7 md:text-base",
};

export default function StandardButton(props: StandardButtonProps) {
    const className = `inline-block h-fit w-fit -skew-x-12 cursor-pointer border-none py-2 font-syne whitespace-nowrap uppercase ${sizeClasses[props.size ?? "default"]} transition-[box-shadow,background-color,color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none ${colorClasses[props.color] ?? ""} ${props.className ?? ""}`;
    const label = <span className="inline-block skew-x-12">{props.title}</span>;

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
