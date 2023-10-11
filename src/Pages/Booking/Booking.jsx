import React, { useState } from 'react'
import classes from './Booking.module.css'
import SessionCardContainer from '../../UI/SessionCardContainer/SessionCardContainer'
import { SlCalender } from 'react-icons/sl'
import PagePath from '../../Components/PagePath/PagePath'
import Tile from '../../Components/Tile/Tile'
import Heading from '../../Components/Heading/Heading'


// Tile Data 1
const td1 = [
    {
        h5: 'Total Received amount',
        h1: '₹34,000',
        p: 'See here your total amount received from admin side against for sessions'
    }
]

// Tile Data 2
const td2 = [
    {
        h5: 'Total Received amount',
        h1: '₹34,000',
        p: 'See here your total amount received from admin side against for sessions'
    },
    {
        h5: 'Total Received amount',
        h1: '₹34,000',
        p: 'See here your total amount received from admin side against for sessions'
    }
]




const Booking = () => {

    const [num, setNum] = useState(1)

    const renderTab = (num) => {
        switch (num) {
            case 1:
                return <SessionCardContainer link={'upcoming-details'} />
            case 2:
                return <SessionCardContainer link={'past-details'} />
            case 3:
                return <SessionCardContainer btns={true} link={'past-details'} />
        }
    }


    return (
        <React.Fragment>

            <PagePath />

            <div className={classes.grid}>
                <Tile data={td1} />
                <Tile data={td2} direction={'row'} />
            </div>

            <Heading heading={'Booking'} p={'You can see your Bookings here and manage them'} />

            <div className={` ${classes.btns_con}`}>
                <div className={classes.btn_container}>
                    <button onClick={() => setNum(1)} className={`${num === 1 ? classes.active_btn : ''}`}>Upcoming</button>
                    <button onClick={() => setNum(2)} className={`${num === 2 ? classes.active_btn : ''}`}>Past</button>
                    <button onClick={() => setNum(3)} className={`${num === 3 ? classes.active_btn : ''}`}>Reschedule</button>
                </div>
                <button className={classes.choose_date}><SlCalender />Choose Date</button>
            </div>

            {
                renderTab(num)
            }
        </React.Fragment>
    )
}

export default Booking