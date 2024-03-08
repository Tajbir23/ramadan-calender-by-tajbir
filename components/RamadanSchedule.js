import RamadanDataContext from '@/pages/RamadanDataContext';
import React, { useState, useEffect, useContext } from 'react';

const RamadanSchedule = () => {
  
  const {data} = useContext(RamadanDataContext)

  return (
    <div>
      <h2>Ramadan Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sehri Time</th>
            <th>Iftar Time</th>
          </tr>
        </thead>
        <tbody>
          
            <tr  className='border-2 justify-between'>
              <td>hi</td>
              <td>hello</td>
              <td>hey</td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default RamadanSchedule;
