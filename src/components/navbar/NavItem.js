import Link from "next/link";
import React, { useState } from 'react';
import Image from "next/image";

const NavItem = ({ text, href, target, icon, hint, active }) => {
    const availableIcons = {
        home: "/icons/home.svg",
        shop: "/icons/piggybank.svg",
        discord: "/icons/discord.svg"
    };

    const selectedIcon = availableIcons[icon];

    return (
        <Link title={hint} href={href} target={target}>
            <div className={`nav__link`}><Image src={selectedIcon} className="icon" width={23} height={23} /><div className={`text`}>{text}</div></div>
        </Link>
    );
};

export default NavItem;