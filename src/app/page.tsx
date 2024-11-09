
import React from 'react'

function page() {
    return (
        <div className="h-[600px] bg-cover" style={{ backgroundImage: "Url('/images/img1.png')" }}>
            <div className='text-center my-32'>
                <p className='text-[50px] font-extralight'><i>This is me</i></p>
                <h1 className='text-[80px]'>KOUSAR SHIAKH ABBAS</h1>
                <h3 className='text-[60px] font-bold'><i>Junior Nextjs Developer</i></h3>
                <div className="flex mx-[450px] my-28 gap-6">
                    <button className="flex px-16 py-3 bg-gradient-to-r from-red-400 to-slate-500 text-white font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-slate-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.5v-2h2v2h-2zm0-4v-5h2v5h-2z"></path>
                        </svg>
                        <span>Hire Me</span>
                    </button>
                    <button className="flex px-16 py-3 bg-gradient-to-r from-slate-500 to-red-400 text-white font-semibold rounded-lg shadow-md hover:from-slate-600 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-slate-400">
                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 10h-2v4H9l3 3 3-3h-2v-4z"></path>
                        </svg>
                        <span>Get CV</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
