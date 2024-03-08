import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
function Navber() {
  return (
    <>
    <div className="flex gap-5 justify-between items-center px-14 text-sm leading-4 text-white bg-green-600 max-md:flex-wrap max-md:px-5">
    <div className="flex gap-3.5 justify-between self-stretch max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between px-6 py-4 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto">Support24@gmail.com</div>
        <div className="flex-auto">Dhaka, Bangladesh</div>
        <div className="font-black text-center"><IoLocationOutline/></div>
      </div>
      
    </div>
    <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4f013c32ebc1851c2f1f2c2354f1fc70684fbbc3de4779bceed80d727a58cc1c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="my-auto w-28 max-w-full aspect-[3.03] hidden md:flex"
      />
    <div className=" gap-5 justify-between self-stretch my-auto text-white text-opacity-80 max-md:flex-wrap max-md:max-w-full hidden md:flex ">
      <div className="flex-auto">Sunrise At: 5:15 AM</div>
      <div className="flex-auto">Sunset At: 4:50 PM</div>
      <div className="flex-auto">Let’s Talk +88 019 123 456 71</div>
    </div>
  </div>
  </>
  )
}

export default Navber
