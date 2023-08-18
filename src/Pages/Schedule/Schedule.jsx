import React, { useState } from 'react'
import classes from './Schedule.module.css'
import PagePath from '../../Components/PagePath/PagePath'
import Heading from '../../Components/Heading/Heading'
import Calendar from '../../Components/Calender/Calendar'
import ListCalendar from '../../Components/ListCalendar/ListCalendar'
import RescheduleModal from '../../Components/AllModals/RescheduleModal/RescheduleModal'

const Schedule = () => {

    const [num, setNum] = useState(0)
    const [popup,setPopup] = useState(false)


    const switchComp = (number) => {
        switch (number) {
            case 0:
                return <Calendar />
            case 1:
                return <ListCalendar />
        }
    }

    return (
        <React.Fragment>
            <PagePath />
            <Heading heading={'Schedule'} p={'You can see your schedule here and know your classes'} btnFunction={setPopup} btnValue={popup} btn={'Add Session'} />
            <div className={classes.btn_container}>
                <button onClick={() => setNum(0)} className={`${num === 0 ? classes.active : ''}`}>Calendar View</button>
                <button onClick={() => setNum(1)} className={`${num === 1 ? classes.active : ''}`}>List View</button>
            </div>

            {switchComp(num)}

            <RescheduleModal isPopup={popup} popupFunc={setPopup} /> 

        </React.Fragment>
    )
}

export default Schedule