import React from 'react'
import Modal from '../../Modal/Modal'
import classes from './RescheduleModal.module.css'
import BlackButton from '../../BlackButton/BlackButton'
import Heading from '../../Heading/Heading'
import LabelledInput from '../../LabelledInput/LabelledInput'
import LabelledTextarea from '../../LabelledTextarea/LabelledTextarea'


const RescheduleModal = (props) => {
    return (
        <Modal cls={`${classes.popup}`} value={props.isPopup} Func={props.popupFunc}>
            <div className={classes.top}>
                <Heading heading={'Add Session'} p={'You can Add a schedule meeting'} />
            </div>

            <div className={classes.body}>
                <LabelledInput id={'booking_with'} label={'Booking With'} />
                <LabelledInput id={'Session'} label={'Session Name'} />
                <LabelledInput id={'date'} label={'Date'} />
                <LabelledInput id={'new_start'} label={'New Start Time'} />
                <LabelledInput id={'new_end'} label={'New End Time'} />
                <div className={classes.div}>
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="Individual Sessions">Individual Sessions</option>
                        <option value="Recurring Sessions">Recurring Sessions</option>
                    </select>
                </div>
                {/* <LabelledInput id={'agenda'} label={'Agenda'} /> */}
                <LabelledInput id={'attendees'} label={'Add Attendees'} />
                {/* <LabelledInput id={'instructions'} label={'Instructions'} /> */}
                <LabelledTextarea label={'Description'} id={'description'} />
            </div>

            <div className={classes.bottom}>
                <button onClick={()=>{props.popupFunc(!props.isPopup)}}>Cancel</button>
                <BlackButton>Send Request</BlackButton>
            </div>
        </Modal>
    )
}

export default RescheduleModal