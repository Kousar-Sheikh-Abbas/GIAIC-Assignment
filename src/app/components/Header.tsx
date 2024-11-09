import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between  flex-grow border-b border-black'>
        <div className='pl-10 pt-[30px] mx-[100px] text-[35px] text-red-400 font-bold'>p0rtf0liO</div>
        <div className='pr-20 pt-[50px] mx-[100px]'>
            <ul className='flex gap-20 capitalize font-semibold text-[20px]'>
            <Link href="/"><li>home</li></Link>
            <Link href="/about"><li>about</li></Link>
            <Link href="/contact"><li>contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header

