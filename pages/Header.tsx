import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <div>
                <Image alt='logo' 
                
                src={"/header_logo.png"} width={500} height={500} />
            </div>
        </div>
    </header>
  )
}

export default Header