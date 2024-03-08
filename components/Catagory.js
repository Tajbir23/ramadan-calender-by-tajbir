import React from 'react'

function Catagory() {
  return (
    <div className='bg-white'>
      <div className='flex container mx-auto max-w-6xl py-2 justify-between'>
        <div className="flex flex-col px-5 text-sm font-bold tracking-tight leading-4 text-center max-w-[122px] text-gray-950">
            <img
                loading="lazy"
                srcSet="/eating.png"
                className="w-20 h-20"
            />
        <div className="mt-2.5 w-full">ইফতারের সময় সূচি</div>
        </div>
        <div className="flex flex-col px-5 text-sm font-bold tracking-tight leading-4 text-center max-w-[122px] text-gray-950">
            <img
                loading="lazy"
                srcSet="/no-eating.png"
                className="w-20 h-20"
            />
        <div className="mt-2.5 w-full">সেহরির সময় সূচি</div>
        </div>
        <div className="flex flex-col px-5 text-sm font-bold tracking-tight leading-4 text-center max-w-[122px] text-gray-950">
            <img
                loading="lazy"
                srcSet="/pray.png"
                className="w-20 h-20"
            />
        <div className="mt-2.5 w-full">নামাজের সময় সূচি</div>
        </div>
      </div>
    </div>
  )
}

export default Catagory
