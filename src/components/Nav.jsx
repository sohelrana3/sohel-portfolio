import * as React from "react";
import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsDribbble } from "react-icons/bs";

const Nav = () => {
    return (
        <div className="w-full py-6 px-4 flex justify-between  top-0 left-0 fixed">
            <div>
                <h2 className="text-4xl font-semibold text-[#fbfcfc]">Sohel</h2>
            </div>
            <div>
                <ul className="flex gap-x-8">
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={45}
                        >
                            About
                        </Link>
                    </li>
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="what"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            What I Do
                        </Link>
                    </li>
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="protfolio"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Protfolio
                        </Link>
                    </li>
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="clients"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Clients
                        </Link>
                    </li>
                    <li className="text-white hover:text-[#20c997] cursor-pointer">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-x-6 text-xl text-white">
                <BsTwitter className="hover:text-[#00ACEE]" />
                <FaFacebookF className="hover:text-[#3B5998]" />
                <BsDribbble className="hover:text-[#EA4C89]"/>
            </div>
        </div>
    );
};

export default Nav;
