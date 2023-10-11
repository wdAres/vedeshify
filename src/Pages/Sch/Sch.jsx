import React, { useState } from 'react'
import ScheduleCalendarHeader from './SchComponents/ScheduleCalendarHeader/ScheduleCalendarHeader'
import classes from './Sch.module.css'

import BlackButton from '../../Components/BlackButton/BlackButton'

import SchTile from './SchComponents/SchTile/SchTile'
import Heading from '../../Components/Heading/Heading'

const Sch = (props) => {

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
            <Heading cls={classes.reverse} heading={'Schedule your lessons'} p={'Lessons in a package must be scheduled within 6 months of purchase date.'} />
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

export default Sch