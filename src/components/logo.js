import Image from "next/image";
import LogoPNG from "../utils/images/logo/YAGVSMPRounded.png";

const Logo = () => {
    return (
        <Image
            src={LogoPNG}
            alt="A Sheild with TLDR on it."
            className="Logo"
        />
    );
};

export default Logo;