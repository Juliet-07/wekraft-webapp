import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/wekraft-logo.svg";
import { FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaPhone, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="hidden w-full h-full md:flex flex-col items-center justify-center p-4 md:px-10 bg-[#3C91BA]/10">
        {/* 1 */}
        <div className="w-full flex items-stretch justify-between gap-4 my-5">
          {/* a */}
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Wekraft Logo" className="w-[168px]" />
            <div className="mt-2 text-[#3C91BA] font-cocon">
              Empower minds and <br />
              inspire futures.
            </div>
          </div>
          {/* b */}
          <div className="grid text-[#1E1E1E]/80 font-cocon">
            <div className="font-medium text-xl">Quick Links</div>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/our-toolkit">Toolkit</Link>
            <Link to="/skillseed">Skillseed</Link>
          </div>
          {/* c */}
          <div className="grid text-[#1E1E1E]/80 font-cocon">
            <div className="font-medium text-xl">Social Media</div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/wekraft-ltd/"
                target="_blank"
              >
                <FaLinkedin size={20} color="#1E1E1E" />
              </a>
              <a href="https://www.tiktok.com/@wekraft_limited" target="_blank">
                <FaTiktok size={20} color="#1E1E1E" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaFacebook size={20} color="#1E1E1E" />
              <a href="https://www.instagram.com/wekraft_ltd/" target="_blank">
                <FaInstagram size={20} color="#1E1E1E" />
              </a>
            </div>
            <div></div>
            <div></div>
          </div>
          {/* d */}
          <div className="grid text-[#1E1E1E]/80">
            <div className="font-medium text-xl font-cocon">Contact</div>
            <div className="flex items-center gap-2">
              <a href="#">
                <IoLocationSharp size={20} color="#1E1E1E" />
              </a>
              <span className="font-cocon font-regular">
                Norsken House, Kigali, RW
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone size={20} color="#1E1E1E" />
              <p className="font-bold">+250793177089 / +250787161453</p>
            </div>
            <div className="flex items-center gap-2 font-cocon">
              <a href="#">
                <AiOutlineMail size={20} color="#1E1E1E" />
              </a>
              <span className="font-regular">skillseed@wekraft.co</span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-4">
          <p className="text-[#1E1E1E]/60 text-xs font-cocon">
            Wekraft Ltd Copyrights{new Date().getFullYear()}
          </p>
          <div className="border-b-2 border-[#1E1E1E]/60 w-full my-4"></div>
        </div>
      </div>
      {/* mobile view */}
      <div className="md:hidden w-full h-full flex flex-col p-4 bg-[#3C91BA]/10">
        <div className="grid gap-4">
          {/* 1 */}
          <div className="flex flex-col">
            <img src={Logo} alt="Wekraft Logo" className="w-20" />
            <div className="text-xs mt-2 text-[#3C91BA] font-cocon">
              Empower minds and <br />
              inspire futures.
            </div>
          </div>

          {/* 2 */}
          <div className="grid gap-4 text-[#1E1E1E]/80 font-cocon">
            <div className="font-medium text-lg">Social Media</div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/wekraft-ltd/"
                target="_blank"
              >
                <FaLinkedin size={20} color="#1E1E1E" />
              </a>
              <a href="https://www.tiktok.com/@wekraft_limited" target="_blank">
                <FaTiktok size={20} color="#1E1E1E" />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook size={20} color="#1E1E1E" />
              <a href="https://www.instagram.com/wekraft_ltd/" target="_blank">
                <FaInstagram size={20} color="#1E1E1E" />
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="grid gap-3 text-[#1E1E1E]/80">
            <div className="font-medium text-lg font-cocon">Contact</div>
            <div className="flex items-center gap-2">
              <a href="#">
                <IoLocationSharp size={15} color="#1E1E1E" />
              </a>
              <span className="text-xs font-regular font-cocon">
                Norsken House Kigali, RW
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#">
                <FaPhone size={15} color="#1E1E1E" />
              </a>
              <span className="text-xs font-bold">
                +250793177089 / +250787161453
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a href="#">
                <AiOutlineMail size={15} color="#1E1E1E" />
              </a>
              <span className="text-xs font-regular font-cocon">
                skillseed@wekraft.co
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full flex items-center gap-4 mt-5">
          <p className="text-[#1E1E1E]/60 text-xs font-cocon">
            Wekraft Ltd Copyrights{new Date().getFullYear()}
          </p>
          <div className="border-b-2 border-[#1E1E1E]/60 w-full my-4"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
