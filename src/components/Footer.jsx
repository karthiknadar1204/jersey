import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer relative">
      <div className="bg-[#415a77] h-40 -mt-8">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="footer_links grid grid-cols-2 gap-4 text-left">
            <div className="space-y-4">
              <a href="#link1" className="block text-white hover:text-red-700">Link 1</a>
              <a href="#link2" className="block text-white hover:text-red-700">Link 2</a>
              <a href="#link3" className="block text-white hover:text-red-700">Link 3</a>
            </div>
            <div className="space-y-4">
              <a href="#link4" className="block text-white hover:text-red-700">Link 4</a>
              <a href="#link5" className="block text-white hover:text-red-700">Link 5</a>
              <a href="#link6" className="block text-white hover:text-red-700">Link 6</a>
            </div>
          </div>

          <div className="socials flex space-x-4">
            <a href="#facebook" className="text-white hover:text-red-700"><AiOutlineFacebook/></a>
            <a href="#twitter" className="text-white hover:text-red-700"><FaXTwitter/> </a>
            <a href="#instagram" className="text-white hover:text-red-700"><FaInstagram /></a>
            <a href="#linkedin" className="text-white hover:text-red-700"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="bg-white py-2">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
