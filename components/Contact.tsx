import React from 'react'
import MapChart from './ui/Map'

export const Contact = () => {
  return (
    <section id='contact' className='h-screen snap-center'>
        <div className='container flex flex-col md:flex-row md:justify-between items-center w-full h-full mx-auto md:gap-10'>
          {/* Form */}
          <div className='flex flex-col items-center justify-center py-1 px-3 w-full'>
            <h1 className='py-5 text-4xl md:text-6xl font-thin tracking-wider'>Contact</h1>
            <form className='flex flex-col gap-5 w-full'>
              <input className='px-4 py-2 rounded-md text-slate-800 bg-slate-300 tracking-wider w-full focus:outline-none
                focus:ring-0' type="text" placeholder='Name'  />
              <input className='px-4 py-2 rounded-md text-slate-800 bg-slate-300 tracking-wider w-full focus:outline-none
                focus:ring-0' type="email" placeholder='Email'  />
              <textarea rows={4} className='px-4 py-2 rounded-md text-slate-800 bg-slate-300 tracking-wider w-full focus:outline-none
                focus:ring-0' placeholder='Message'  />
              <button type='button' className='w-full bg-pink-600 font-bold uppercase px-3 py-2 rounded-md hover:opacity-75 transition'>send</button>
            </form>
          </div>
          {/* Map */}
            <MapChart />
        </div>
    </section>
  )
}
