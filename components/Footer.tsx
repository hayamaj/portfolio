import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      
      <div className="flex justify-center items-center">
        <p className="md:text-xs ml-4 text-stone-400 text-xs md:font-light font-light">
          Haya AlMajali © 2024 
        </p>
      </div>
    </footer>
  );
};

export default Footer;