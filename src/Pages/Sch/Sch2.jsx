import React, { useState } from 'react'
import ScheduleCalendarHeader from './SchComponents/ScheduleCalendarHeader/ScheduleCalendarHeader'
import classes from './Sch.module.css'

import BlackButton from '../../Component/BlackButton/BlackButton'

import SchTile from './SchComponents/SchTile/SchTile'
import Heading from '../../Component/Heading/Heading'

const Sch2 = (props) => {

    const [dateTiles, setDateTiles] = useState([])

    const timeArr = [
        '1:00pm',
        '1:30pm',
        '2:00pm',
        '2:30pm'
    ]

    const getDayName = (date) => {
        const options = { weekday: 'long' };
        return date.toLocaleDateString('en-US', options);
    };

    const getDateTiles = (arr) => {
        setDateTiles(arr)
    }

    return (
        <div className={classes.section}>
            <Heading cls={classes.reverse} h2={'Set Your Meeting Availability'} p={'Please select your available time slots and indicate whether you want to set this as a recurring availability across future period.'} />
            <ScheduleCalendarHeader arraySetter={getDateTiles} />
            <div className={classes.overall_con}>
                <div className={classes.calendar_container}>
                    <div className={classes.weekdays}>
                        <div>Time/Day</div>
                        {dateTiles.length > 1 && dateTiles?.map((obj, index) => (
                            <div>{getDayName(obj)}</div>
                        ))}
                    </div>
                    <div className={classes.time_grid}>
                        {
                            timeArr.map((element) => (
                                <div className={classes.grid_row}>
                                    <div>
                                        {element}
                                    </div>
                                    {dateTiles.length > 1 && dateTiles?.map((obj, index) => (
                                        <SchTile key={index} date={obj} />
                                    ))}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={classes.bottom}>
                <button>Cancel</button>
                <BlackButton>Next</BlackButton>
            </div>
        </div>
    )
}

export default Sch2