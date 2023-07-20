import Link from "next/link";

import React from "react";

import classNames from "classnames";
import { FaCircleRight } from "react-icons/fa6";

export interface PrimaryButtonProps {
    href: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ActionLink(props: PrimaryButtonProps) {
    return (
        <Link
            className={classNames(
                "flex items-center gap-1.5 rounded-lg bg-neutral-500 px-4 py-2 text-white",
                props.className,
            )}
            href={props.href}
        >
            {props.children}
            <FaCircleRight focusable={false} />
        </Link>
    );
}
