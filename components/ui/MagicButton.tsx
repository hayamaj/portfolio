import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}:{title:string, icon: React.ReactNode, position:string; handleClick?: () => void; otherClasses?:string;}) => {
    return (
        
        // Button code
        <a
        href="/AlMajali-Resume.pdf"
        download="AlMajali-Resume.pdf" className="p-[1.75px] lowercase text-xs rounded-sm bg-transparent border-[0.5px] border-black font-light text-black sm:text-sm font-mono hover:bg-transparent">
  resume
</a>
      
    )
}

export default MagicButton


