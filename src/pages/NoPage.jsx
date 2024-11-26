import React from 'react'

const NoPage = () => {
  return (
    <div>
      <div class="grid place-items-center h-screen">
        <div class="text-center">
        <p className='text-9xl font-bold font-italic text-black'>#404</p>
        <p className='text-xl font-bold text-black p-2'>Page Not Found</p>
        <p className='text-2xl text-black p-2'>The resource requested could not be found on this server!</p>
        </div>
        </div>
    </div>
  )
}

export default NoPage