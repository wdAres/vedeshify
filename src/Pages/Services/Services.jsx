import React from 'react'
import classes from './Services.module.css'
import PagePath from '../../Components/PagePath/PagePath'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Heading from '../../Components/Heading/Heading'
import BlackButton from '../../Components/BlackButton/BlackButton'
import { useNavigate } from 'react-router-dom'
import NewCourseCard from '../../Components/NewCourseCard/NewCourseCard'

const Services = () => {

    const navigate = useNavigate()

    const addService = () => {
        navigate('add')
    }


    return (
        <React.Fragment>
            <PagePath />
            <div className={classes.flex}>
                <Heading cls={classes.heading} heading={'My Services'} p={'You can see your Services here and manage them'} />
                <SearchBar cls={classes.sb} />
            </div>
            <div className={classes.end}>
                <BlackButton func2={addService} cls={classes.bb}>Add Services</BlackButton>
            </div>

            <div className={classes.flex2}>
                <NewCourseCard />
                <NewCourseCard />
                <NewCourseCard />
                <NewCourseCard />
            </div>
        </React.Fragment>
    )
}

export default Services
