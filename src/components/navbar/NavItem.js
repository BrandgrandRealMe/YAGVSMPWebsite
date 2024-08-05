import Link from "next/link";
import React, { useState } from 'react';
import Image from "next/image";

import DiscordPNG from "@/utils/images/icons/discord.svg";
import HomePNG from "@/utils/images/icons/home.svg";
import PiggybankPNG from "@/utils/images/icons/piggybank.svg";

const NavItem = ({ text, href, target, icon, hint, active }) => {
    const availableIcons = {
        home: HomePNG,
        shop: PiggybankPNG,
        discord: DiscordPNG
    };

    const selectedIcon = availableIcons[icon];

    return (
        <Link title={hint} href={href} target={target}>
            <div className={`nav__link`}><Image src={selectedIcon} className="icon" /><div className={`text`}>{text}</div></div>
        </Link>
    );
};

export default NavItem;