import React from 'react'

function Sections() {
  return (
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16  font-semibold text-center h-[400px] max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ff2d93614463fa7c7d7237356c4c9bbbe52feed47d8397e900cba754167be6?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="object-cover absolute inset-0 size-full"
      />
      {/*  */}
      <div className='flex flex-col md:flex-row relative justify-items-start container mx-auto max-w-6xl gap-2 '>
         <div>
            <h1 className='text-white'>Search your Location </h1>
            <div className="flex">
              <input 
                type="text"
                placeholder='search your location'
                className='w-full p-2 rounded-md' />
              <button 
                className='p-2 ml-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 
                focus:ring-opacity-50'
              >
                Search
              </button>
            </div>
            <h1></h1>
          </div>
      {/* 2nd */}
      <div className='w-full'>
            <h1 className='text-white text-3xl font-semibold'>আজকের সময় সূচি </h1>
            <div className="flex">
              <h1 className='text-white text-3xl w-full'>Time Now</h1>
            </div>
            {/* hadith */}
           <div>
                <h1  className='text-gray-400 text-sm container mx-auto max-w-2xl mt-5'>"আবূ হুরায়রা (রাঃ) থেকে বর্ণিত, আল্লাহর দূত (সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম) বলেন, 'রমজান মাস আসে, তখন আকাশের দরজা খুলে দেওয়া হয় এবং জাহান্নামের দরজা বন্ধ হয়ে যায় এবং শয়তানরা শোষিত হয়ে যায়।' (সহীহ আল-বুখারী ১৮৯৯)</h1>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Sections
