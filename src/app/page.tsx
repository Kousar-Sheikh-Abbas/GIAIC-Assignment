import React from "react"

function page() {
  return (
    <div className="h-[600px] flex ml-10" style={{ backgroundImage: "url('/images/img1.png')" }}>
      <div className="w-1/2">
        <h1 className="text-[80px] capitalize">Discover the world's <span className="text-slate-700"> hidden</span> wonders</h1>
        <p className="text-[22px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui esse mollitia autem alias quibusdam quae pariatur distinctio nobis libero deleniti, dignissimos ea aliquid facere vitae voluptate architecto explicabo incidunt officiis.</p>
        <button className="mx-5 my-6 rounded-full bg-transparent border-solid border-2 border-black px-20 text-[22px]">Discover Now</button>
      </div>
      <div className="w1/2 flex">
         <div className= "w-[250px] h-[500px] mx-4 bg-repeat-x my-10 rounded-3xl " style={{ backgroundImage: "url('/images/tour1.jpg')"}}></div>
         <div className=" w-[200px] h-[500px] mx-4 bg-repeat-x my-10 rounded-3xl "style={{ backgroundImage: "url('/images/tour2.jpg')"}}></div>
         <div className= "w-[200px] h-[500px] mx-4 bg-repeat-x my-10 rounded-3xl bg-cover "style={{ backgroundImage: "url('/images/tour3.jpg')"}}></div>
      </div>
    </div>
  )
}

export default page
