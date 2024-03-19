import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import { usePDF } from "react-to-pdf";

const RamadanTime = ({district}) => {

  const [data, setData] = useState([])
  const {toPDF, targetRef} = usePDF({filename: `${district}-district-ramadan-calendar-by-tajbir.pdf`})
  
  useEffect(() => {
    fetch(`https://ramadan-calender-by-tajbir.onrender.com/current_month?district=${district}`)
    
   .then((res) => res.json())
   .then((datas) => setData(datas?.data?.data))
  }, [district])

  return (
    <>
    <div className="flex justify-between items-center py-4 overflow-hidden w-full">
      <button type="button" onClick={() => toPDF()} className=" px-5 py-2 bg-green-600 m-auto">Convert To Pdf</button>
    </div>
<div className="overflow-x-auto" ref={targetRef}>
  <table className="table-auto w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2">Sehri</th>
        <th className="px-4 py-2 hidden sm:table-cell">Fajr</th>
        <th className="px-4 py-2 hidden sm:table-cell">Dhuhr</th>
        <th className="px-4 py-2 hidden sm:table-cell">Asr</th>
        <th className="px-4 py-2">Maghrib</th>
        <th className="px-4 py-2 hidden sm:table-cell">Isha</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr className="border border-gray-300 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-800 text-center" key={index}>
          <td className="px-4 py-2">{item?.date?.readable}</td>
          <td className="px-4 py-2">{item?.timings?.Imsak}</td>
          <td className="px-4 py-2 hidden sm:table-cell">{item?.timings?.Fajr}</td>
          <td className="px-4 py-2 hidden sm:table-cell">{item?.timings?.Dhuhr}</td>
          <td className="px-4 py-2 hidden sm:table-cell">{item?.timings?.Asr}</td>
          <td className="px-4 py-2">{item?.timings?.Maghrib}</td>
          <td className="px-4 py-2 hidden sm:table-cell">{item?.timings?.Isha}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>

  )
}

export default RamadanTime