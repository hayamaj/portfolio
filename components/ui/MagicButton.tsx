import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}:{title:string, icon: React.ReactNode, position:string; handleClick?: () => void; otherClasses?:string;}) => {
    return (
        
        // Button code
        <a
        href="/AlMajali-Resume.pdf"
        download="AlMajali-Resume.pdf" className="p-[1.75px] px-2 lowercase text-xs rounded-sm bg-black font-normal text-white sm:text-sm font-mono hover:bg-neutral-300">
  resume
</a>
      
    )
}

export default MagicButton


