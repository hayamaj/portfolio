import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}:{title:string, icon: React.ReactNode, position:string; handleClick?: () => void; otherClasses?:string;}) => {
    return (
        
        // Button code
        <a
        href="/AlMajali-Resume.pdf"
        download="AlMajali-Resume.pdf" className="uppercase sm:px-8 px-4 text-xs rounded-full underline font-bold text-neutral-400 tracking-widest sm:text-sm font-mono transform hover:scale-105 hover:text-black transition-colors duration-200">
  download my resume
</a>
      
    )
}

export default MagicButton


