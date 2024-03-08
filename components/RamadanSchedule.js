import React, { useState, useEffect } from 'react';

const RamadanSchedule = () => {
  // State to hold the list of Ramadan dates and corresponding Iftar and Sehri times
  const [ramadanSchedule, setRamadanSchedule] = useState([]);

  // Function to calculate or fetch Ramadan schedule
  const calculateRamadanSchedule = () => {
    // Example: Calculate Ramadan schedule for 30 days (you may need more accurate calculation)
    const startDate = new Date(); // Get current date
    const ramadanSchedule = [];

    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000); // Increment date by 1 day
      const dateString = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

      // Example: Calculate Iftar time based on sunset time (replace with your own logic)
      const sunsetTime = '7:00 PM'; // Example sunset time (replace it with actual sunset time)
      const iftarHour = parseInt(sunsetTime.split(':')[0], 10);
      const iftarMinute = parseInt(sunsetTime.split(':')[1], 10) + 20;

      let iftarHourString = iftarHour.toString();
      let iftarMinuteString = iftarMinute.toString();

      // Pad single-digit minutes with a leading zero
      if (iftarMinute < 10) {
        iftarMinuteString = '0' + iftarMinute;
      }

      // Construct the Iftar time string
      const iftarTimeString = `${iftarHourString}:${iftarMinuteString} PM`;

      // Example: Calculate Sehri time based on Fajr time (replace with your own logic)
      const fajrTime = '4:30 AM'; // Example Fajr time (replace it with actual Fajr time)
      const sehriHour = parseInt(fajrTime.split(':')[0], 10);
      const sehriMinute = parseInt(fajrTime.split(':')[1], 10) - 20;

      let sehriHourString = sehriHour.toString();
      let sehriMinuteString = sehriMinute.toString();

      // Pad single-digit minutes with a leading zero
      if (sehriMinute < 10) {
        sehriMinuteString = '0' + sehriMinute;
      }

      // Construct the Sehri time string
      const sehriTimeString = `${sehriHourString}:${sehriMinuteString} AM`;

      ramadanSchedule.push({ date: dateString, iftarTime: iftarTimeString, sehriTime: sehriTimeString });
    }

    setRamadanSchedule(ramadanSchedule);
  };

  useEffect(() => {
    calculateRamadanSchedule();
  }, []);

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
          {ramadanSchedule.map((day, index) => (
            <tr key={index} className='border-2 justify-between'>
              <td>{day.date}</td>
              <td>{day.sehriTime}</td>
              <td>{day.iftarTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RamadanSchedule;
