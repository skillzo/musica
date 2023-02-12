import Link from "next/link";
import React, { ReactElement } from "react";

interface navlinks {
  icon: ReactElement;
  text: string;
  href: string;
}
export default function Navlink(props: navlinks) {
  return (
    <Link
      href={props.href}
      className="flex w-max items-center space-x-4 text-lg md:text-md"
    >
      {props.icon}
      <p className="text-ash-text active:font-semibold active:text-[#fff]">
        {props.text}
      </p>
    </Link>
  );
}
