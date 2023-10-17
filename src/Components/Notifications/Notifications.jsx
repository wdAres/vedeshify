import React, { useState } from 'react'
import classes from './Notifications.module.css'
import Container from '../../UI/Container/Container';
import NotificationDiv from './NotificationDiv/NotificationDiv';
import NotificationModal from '../AllModals/NotificationModal/NotificationModal';

const data = [
    {
        id: 1,
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus voluptates cumque vero sequi ea modi architecto. Iure hic, praesentium reiciendis consequuntur quis, ipsam saepe veritatis vel ipsum, libero doloribus harum rerum possimus soluta quas placeat dignissimos? Pariatur enim repudiandae maxime laudantium? Consequuntur, et dicta?',
        time: '3 min'
    },
    {
        id: 2,
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus voluptates cumque vero sequi ea modi architecto. Iure hic, praesentium reiciendis consequuntur quis, ipsam saepe veritatis vel ipsum, libero doloribus harum rerum possimus soluta quas placeat dignissimos? Pariatur enim repudiandae maxime laudantium? Consequuntur, et dicta?',
        time: '4 min'
    },
    {
        id: 3,
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus voluptates cumque vero sequi ea modi architecto. Iure hic, praesentium reiciendis consequuntur quis, ipsam saepe veritatis vel ipsum, libero doloribus harum rerum possimus soluta quas placeat dignissimos? Pariatur enim repudiandae maxime laudantium? Consequuntur, et dicta?',
        time: '5 min'
    },
    {
        id: 4,
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus voluptates cumque vero sequi ea modi architecto. Iure hic, praesentium reiciendis consequuntur quis, ipsam saepe veritatis vel ipsum, libero doloribus harum rerum possimus soluta quas placeat dignissimos? Pariatur enim repudiandae maxime laudantium? Consequuntur, et dicta?',
        time: '6 min'
    },
    {
        id: 5,
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus voluptates cumque vero sequi ea modi architecto. Iure hic, praesentium reiciendis consequuntur quis, ipsam saepe veritatis vel ipsum, libero doloribus harum rerum possimus soluta quas placeat dignissimos? Pariatur enim repudiandae maxime laudantium? Consequuntur, et dicta?',
        time: '3 min'
    },
]

const Notifications = (props) => {
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus voluptates cumque vero sequi ea modi architecto. Iure hic, praesentium reiciendis consequuntur quis, ipsam saepe veritatis vel ipsum, libero doloribus harum rerum possimus soluta quas placeat dignissimos? Pariatur enim repudiandae maxime laudantium? Consequuntur, et dicta?
    </p>

    // console.log(classes);

    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)

    return (
        <>
            
            {<NotificationModal isPopup={open} popupFunc={setOpen} />}
            <div onClick={() => props.setterFunc(false)} className={classes.overlay}></div>
            <Container cls={classes.box}>
                <div className={classes.header}>
                    Notifications
                </div>
                <div className={classes.body}>
                    {data.map(element => (
                        <NotificationDiv setterFunc={props.setterFunc} key={element.id} popupFunc={setOpen} data={element} />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Notifications
