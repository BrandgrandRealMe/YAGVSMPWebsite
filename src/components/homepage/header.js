import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import Logo from "@/components/logo.js";
import { ToastContainer, toast } from 'react-toastify';


const Header = () => {
    function copyIP() {
        navigator.clipboard.writeText("YAGVSMP.brandgrand.rocks");
        toast("Copied code to clipboard!");
    }

    return (
        <div className="header">
            <ToastContainer position="top-center" pauseOnHover theme="dark" />
            <div className="headerTitle">
                <div className="Logo"><Logo /></div>
                <div className="Title">YAGVSMP</div>
                <div className="SubTitle">Yet Another General Vanilla SMP</div>
            </div>
            <div className="IP" ><div className="text">YAGVSMP.brandgrand.rocks</div><FontAwesomeIcon onClick={copyIP} className="icon" icon={faCopy} /></div>
        </div>
    );
};

export default Header;