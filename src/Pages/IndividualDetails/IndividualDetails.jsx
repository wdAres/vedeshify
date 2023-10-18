import React from 'react'
import classes from './IndividualDetails.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_new.png'
import Heading from '../../Components/Heading/Heading'
import LabelledTextarea from '../../Components/LabelledTextarea/LabelledTextarea'
import LabelledInput from '../../Components/LabelledInput/LabelledInput'
import FileLabel from '../../Components/FileLabel/FileLabel'
import Container from '../../UI/Container/Container'
import BlackButton from '../../Components/BlackButton/BlackButton'
const Inp_data = [
    {
        label: 'Individual & Agency',
        id: 'indi-agecy',
        value: 'Videshify'
    },
    {
        label: 'Name of Individual',
        id: 'first_name',
        value: 'Puneet Shrivastav'
    },
    {
        label: 'Email',
        id: 'email',
        value: 'psri9990@gmail.com'
    },
    {
        label: 'Phone Number',
        id: 'Phone Number',
        value: '9211901934'
    },
    {
        label: 'Education Level Degree',
        id: 'eld',
        value: 'B.Tech'
    },
    {
        label: 'Number Of Previous Students Admittied',
        id: 'ss',
        value: '60'
    },
    {
        label: 'Number of years as a counselor',
        id: 'ss',
        value: '60'
    },
    {
        label: 'Gender',
        id: 'Gender',
        value: 'Male'
    },
    {
        label: 'City',
        id: 'city',
        value: 'New Delhi'
    },
    {
        label: 'Country Of Origin',
        id: 'coo',
        value: 'India'
    },
]

const ta_data = [
    {
        label: 'Bio',
        id: 'bio',
        value: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.'
    }
]


const ba_details = [
    {
        label: 'Bank Name',
        id: 'Bank Name',
        value: 'Kotak'
    },
    {
        label: 'IFSC',
        id: 'IFSC',
        value: '011420'
    },
    {
        label: 'Account Number',
        id: 'Account Number',
        value: '123456789'
    },
]

const IndividualDetails = () => {
    const navigate = useNavigate()
    const nextPage = ()=> {navigate('/dashboard')}
    return (
        <section className={classes.section}>
            <div className={classes.header}>
                <Link to={'/auth-login'} >
                    <img src={logo} alt="" />
                </Link>
                <Heading cls={classes.heading2} heading={'Complete Your Profile Before Access your Dashboard'} p={'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} />
            </div>
            <Container cls={classes.container}>
                <div className={classes.flex}>
                    {/* All Inputs */}
                    {Inp_data.map((element, index) => (
                        <LabelledInput id={element.id} value={element.value} label={element.label}  />
                    ))}
                    {/* All TextAreas */}
                    {ta_data.map((element, index) => (
                        <LabelledTextarea id={element.id} value={element.value} label={element.label}  />
                    ))}

                    <div className={classes.wd}>
                        <h3 className={classes.heading}>Intro Video</h3>
                        <div className={classes.flex3}>
                            <FileLabel id='1' />
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <div>
                    <h3 className={classes.heading}>Bank Account Details</h3>
                    <div className={classes.flex}>
                        {/* All Inputs */}
                        {ba_details.map((element, index) => (
                            <LabelledInput id={element.id} value={element.value} label={element.label}  />
                        ))}
                    </div>
                </div>
            </Container>

            <div className={classes.end}>
                <button className={classes.cancel_btn}>Cancel</button>
                <BlackButton func2={nextPage} cls={classes.bb}>Send</BlackButton>
            </div>
        </section>
    )
}

export default IndividualDetails
