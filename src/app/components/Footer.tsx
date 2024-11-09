import React from 'react'

function Footer() {
    return (
        <div className=' flex justify-between flex-grow border-t border-black h-[300px]'>
            <div className='w-[400px] ml-24 mt-20 '>
                <h1 className='text-red-400 text-[30px] font-bold uppercase'>About me</h1>
                <p className='text-[14px] pt-8'>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                <p className='pt-8'>Copyright ©2024 All rights reserved | This template is made with  by kousar</p>
            </div>
            <div className=''>
                <h1 className='w-[300px] mt-20 text-red-400 text-[30px] font-bold uppercase'>newslatter</h1>
                <p className='text-[14px] pt-8'>Stay updated with our latest trends.</p>
            </div>
            <div >
                <h1 className='w-[240px] mt-20 text-red-400 text-[30px] font-bold uppercase mr-24'>follow me</h1>
                <ul className='capitalize'>
                    <li>instagram</li>
                    <li>twitter</li>
                    <li>facebook</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
