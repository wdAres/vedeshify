import React, { useEffect, useState } from 'react'
import classes from './ScheduleCalendarHeader.module.css'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'


const ScheduleCalendarHeader = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const newDate = new Date(currentDate);
    const [dateArray, setDateArray] = useState([])

    const changeDate = (action) => {
        if (action == 'plus') {
            newDate.setDate(newDate.getDate() + 7);
            setCurrentDate(newDate);
            return;
        }
        newDate.setDate(newDate.getDate() - 7);
        setCurrentDate(newDate);
    }

    const dateGenerator = (date) => {
        const day = date.getDate()
        const month = date.toLocaleDateString(undefined, { month: 'long' })
        const year = date.getFullYear()

        return `${month} ${day}, ${year}`
    }

    const returnArr = (date) => {
        let newArr = []
        let my_new_date = new Date(date)
        for (let i = 0; i < 7; i++) {
            let newDate = new Date(my_new_date);
            newDate.setDate(newDate.getDate() + i);
            newArr.push(newDate);
        }

        setDateArray(newArr)
        props.arraySetter(newArr)

    }

    useEffect(() => {
        returnArr(currentDate)
    }, [currentDate])


    const previewValues = () => {
        return dateArray.length > 0 ? `${dateGenerator(dateArray[0])} To ${dateGenerator(dateArray[6])}` : 'loading...'
    }

    return (
        <div className={classes.select_date_container}>
            <button onClick={() => changeDate('minus')}><AiOutlineLeft /></button>
            <span>{previewValues()}</span>
            <button onClick={() => changeDate('plus')}><AiOutlineRight /></button>
        </div>
    )
}

export default ScheduleCalendarHeader