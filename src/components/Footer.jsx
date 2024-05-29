import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-[#8D99AE] h-40 -mt-8">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="footer_links grid grid-cols-2 gap-4 text-left">
            <div className="space-y-4">
              <a href="#link1" className="block text-black hover:text-gray-700">Link 1</a>
              <a href="#link2" className="block text-black hover:text-gray-700">Link 2</a>
              <a href="#link3" className="block text-black hover:text-gray-700">Link 3</a>
            </div>
            <div className="space-y-4">
              <a href="#link4" className="block text-black hover:text-gray-700">Link 4</a>
              <a href="#link5" className="block text-black hover:text-gray-700">Link 5</a>
              <a href="#link6" className="block text-black hover:text-gray-700">Link 6</a>
            </div>
          </div>

          <div className="socials flex space-x-4">
            <a href="#facebook" className="text-black hover:text-gray-700">Facebook</a>
            <a href="#twitter" className="text-black hover:text-gray-700">Twitter</a>
            <a href="#instagram" className="text-black hover:text-gray-700">Instagram</a>
            <a href="#linkedin" className="text-black hover:text-gray-700">LinkedIn</a>
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
