import React from 'react'
import classes from './NotificationModal.module.css'
import Modal from '../../Modal/Modal'

const NotificationModal = (props) => {
    return (
        <Modal cls={`${classes.popup}`} value={props.isPopup} Func={props.popupFunc}>
            <div className={classes.header}>
                <>Notifications</>
                <span className={classes.span}>3 min</span>
            </div>
            <div className={classes.body}>
                <p className={classes.p}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius, eveniet placeat velit est dolore beatae labore at officiis, molestiae quam voluptas nam deserunt ducimus vitae commodi. Ipsa impedit obcaecati velit rerum at natus, corrupti, tenetur repellendus illo aliquid necessitatibus reiciendis facilis cupiditate et sint?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eius, eveniet placeat velit est dolore beatae labore at officiis, molestiae quam voluptas nam deserunt ducimus vitae commodi. Ipsa impedit obcaecati velit rerum at natus, corrupti, tenetur repellendus illo aliquid necessitatibus reiciendis facilis cupiditate et sint?
                </p>
            </div>
            <div className={classes.bottom}>
                <button onClick={()=>{props.popupFunc(!props.isPopup)}}>Cancel</button>
            </div>
        </Modal>
    )
}

export default NotificationModal
