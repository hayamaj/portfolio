import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}:{title:string, icon: React.ReactNode, position:string; handleClick?: () => void; otherClasses?:string;}) => {
    return (
        
        // Button code
        <a
        href="/AlMajali-Resume.pdf"
        download="AlMajali-Resume.pdf" className="lowercase sm:px-8 sm:py-4 px-4 py-2 text-md rounded-full underline font-bold text-red-400 tracking-widest sm:text-sm transform hover:scale-105 hover:text-white hover:bg-red-400 transition-colors duration-200">
  download my resume
</a>
      
    )
}

export default MagicButton


