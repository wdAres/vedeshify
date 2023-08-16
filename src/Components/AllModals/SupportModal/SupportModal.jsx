import React from 'react'
import Modal from '../../Modal/Modal'
import classes from './SupportModal.module.css'
import BlackButton from '../../BlackButton/BlackButton'
import Heading from '../../Heading/Heading'
import LabelledInput from '../../LabelledInput/LabelledInput'


const SupportModal = (props) => {
    return (
        <Modal cls={`${classes.popup}`} value={props.isPopup} Func={props.popupFunc}>
            <div className={classes.top}>
                <Heading heading={'Add Ticket'} p={'Add a ticket for query'} />
            </div>

            <div className={classes.body}>
                <LabelledInput id={'category'} label={'Category'} />
                <LabelledInput id={'select_category'} label={'Select Category'} />
                <div className={classes.txtarea}>
                    <label htmlFor="txt">Query</label>
                    <textarea id="txt"></textarea>
                </div>
            </div>

            <div className={classes.bottom}>
                <button onClick={() => { props.popupFunc(!props.isPopup) }}>Cancel</button>
                <BlackButton>Add Ticket</BlackButton>
            </div>
        </Modal>
    )
}

export default SupportModal