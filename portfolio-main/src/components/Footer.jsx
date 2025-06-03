
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => (
  <footer className="w-full bg-gray-900 text-white">
    
    <div className="flex justify-center space-x-6 py-4">
     
      <a
        href="https://github.com/Krrish-agrawal"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 hover:border-gray-500 transition"
      >
        <FaGithub className="w-6 h-6 text-gray-800" />
      </a>

      <a
        href="https://www.linkedin.com/in/krrish-agrawal-3a8704255"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 hover:border-gray-500 transition"
      >
        <FaLinkedin className="w-6 h-6 text-blue-700" />
      </a>

      <a
        href="https://leetcode.com/u/_agrus/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 hover:border-gray-500 transition"
      >
        <SiLeetcode className="w-6 h-6 text-orange-600" />
      </a>

  
      <a
        href="https://www.geeksforgeeks.org/user/agrusc7n4/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-300 hover:border-gray-500 transition"
      >
        <SiGeeksforgeeks className="w-6 h-6 text-green-600" />
      </a>
    </div>


    <div className="w-full py-2 text-center text-sm">
      © {new Date().getFullYear()} Krrish Portfolio. All rights reserved.
    </div>
  </footer>
);

export default Footer;
