import React from "react";

 function ServiecssCard({ data }) {
  return (
    <div>
        <div>
        {data.map((item) => (
         <div className='gap-5 grid grid-cols-1 mt-5  mr-10'>
            <div className='bg-slate-200 w-80 h-48 rounded-2xl  shadow-lg shadow-gray-500/30 flex justify-center'>
          <div key={item.id} className='bg-slate-100 rounded-2xl w-28 h-24  mr-5 mt-2 ' >
            <img className=' h-20 w-20 mt-8 mb-0  mr-4' src={item.image} />
            <h2 className='mr-8 text-sm mt-3 ' >{item.title}</h2>
            <button className='bg-blue-300 rounded-sm w-20 mr-8 text-xs '> احجز هنا  </button>

          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiecssCard;