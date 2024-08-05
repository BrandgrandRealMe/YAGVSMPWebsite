import Link from "next/link";
import Image from "next/image";

import DiscordPNG from "@/utils/images/icons/discord.svg";
import PiggybankPNG from "@/utils/images/icons/piggybank.svg";

const Buttons = () => {
    return (
        <div className="ButtonsContainer">
            <Link className="Button" href="https://discord.gg/H8a78ErzRx" target="_blank"><Image src={DiscordPNG} className="icon"/></Link>
            <Link className="Button" href="https://shop.brandgrand.rocks/#tab_1" target="_blank"><Image src={PiggybankPNG} className="icon"/></Link>
        </div>
    );
};

export default Buttons;