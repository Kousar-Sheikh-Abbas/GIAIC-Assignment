import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div className='flex items-center justify-between mr-[100px] ml-[100px] mx-6 my-9'>
            <div className="text-[28px]">
                <h1>LoGo</h1>
            </div>
            <div className="flex-grow" >
                <ul className="flex justify-center space-x-16 text-[20px]">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/destination"><li>Destination</li></Link>
                    <Link href="/blogs"><li>Blogs</li></Link>
                    <Link href="/about"><li>About</li></Link>
                </ul>
            </div>
            <div className='text-[22px] text-white'>
                <button className='bg-black hover:bg-slate-500 px-9 py-1 rounded-full'>Sign in</button>
            </div>
        </div>
    )
}

export default Header

