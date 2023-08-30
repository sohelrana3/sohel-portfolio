import * as React from "react";
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <div className="w-full py-6 px-4 flex justify-between  top-0 left-0 fixed">
            <div>
                <h2 className="text-4xl font-semibold text-[#fbfcfc]">Sohel</h2>
            </div>
            <div>
                <ul className="flex gap-x-8">
                <li><Link activeClass="active" className="test1" to="home" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                    <li className="text-lg active">
                        <Link activeClass="active" to="home" smooth={true} duration={600}>
                           Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" smooth={true} duration={600}>
                           About
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={600}>
                           What I Do
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" smooth={true} duration={600}>
                           Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={600} >
                          Protfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={600}>
                          Clients
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={600}>
                          Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div>socil</div>
        </div>
    );
};

export default Nav;
