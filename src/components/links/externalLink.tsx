import Link from "next/link";

import React from "react";

import classNames from "classnames";
import { FaUpRightFromSquare } from "react-icons/fa6";

export interface ExternalLinkProps {
    href: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ExternalLink(props: ExternalLinkProps) {
    return (
        <Link
            href={props.href}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={classNames(
                "inline-flex items-center gap-1.5 underline visited:text-neutral-300 hover:text-neutral-200",
                props.className,
            )}
        >
            {props.children} <FaUpRightFromSquare role={"img"} aria-label={"opens in a new tab"} focusable={false} />
        </Link>
    );
}
