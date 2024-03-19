import React from 'react'


function Footer() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center  font-semibold text-center h-[50px] max-md:px-5">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
      className="object-cover absolute inset-0 size-full"
    />
    {/*  */}
    <div className='flex flex-col md:flex-row relative justify-between container mx-auto max-w-6xl gap-2 '>
       <div className=''>
          <h1 className=' text-white'>All rights reserved 2024 © </h1>
        </div>
    {/* 2nd */}
    <div className=''>
          <a href='/privacy-policy' className='text-white'>Privacy Policy</a>
        </div>
    </div>
  </div>
  )
}

export default Footer
