import { useState, useEffect } from 'react'
import { differenceInDays, endOfMonth, getMonth, startOfMonth } from 'date-fns'
import Day from './Day'

function Month() {

  const [date, setDate] = useState("")
  const [month, setMonth] = useState("")

  const currentDate = () => {
    const day = new Date()
    setMonth(getMonth(day)+1)
    const currentMonth = day.getMonth();
    const currentYear = day.getFullYear();
    const dayNum = day.getUTCDate();
    setDate(day)
    setMonth(currentMonth)
    // console.log("current year", currentYear)
    // console.log("day numb", dayNum)
    // console.log("this is month", month)
  }
 
  console.log(month)


  useEffect(() => {
    currentDate()
  }, [])

    return (
      <div className="cal">
        {month}
        <div className="cal-week">
          <Day props="date" />
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
        </div>
        <div className="cal-week">
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
        </div>
        <div className="cal-week">
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
        </div>
        <div className="cal-week">
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
        </div>
        <div className="cal-week">
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
        </div>
        <div className="cal-week">
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
          <div className="cal-day"></div>
        </div>
      </div>
    );
  }
  
  export default Month;
  