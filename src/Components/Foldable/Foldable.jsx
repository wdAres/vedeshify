import React, { useRef, useState } from 'react'
import cd from '../../assets/cd.png'
import Container from '../../UI/Container/Container';
import classes from './Foldable.module.css'
import { useEffect } from 'react';


const Foldable = (props) => {


    const contentRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setTimeout(() => {
            props.open === true ? setIsOpen(true) : ''
        }, 200)
      }, [])
    

    return (
        <div className={`${classes.container} ${props.cls}`} style={{
            height: isOpen ? 'max-content' : '45px',
            overflow: 'hidden',
            transition: 'height 0.1s ease-out',
        }}>
            <div onClick={toggleCollapsible} className={classes.header}>
                {props.children[0]}
                <img style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: ' 0.1s ease-out',
                }} src={cd} alt="" />
            </div>

            <div className={classes.body} ref={contentRef}
                style={{
                    maxHeight: isOpen ? contentRef.current.scrollHeight + 'px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.1s ease-out',
                }}>
                {props.children[1]}
            </div>
        </div>
    )
}

export default Foldable