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
        label: 'First Name',
        id: 'first_name',
        value: 'Puneet Shrivastav'
    },
    {
        label: 'Last Name',
        id: 'last_name',
        value: 'Shrivastav'
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
        label: 'Gender',
        id: 'Gender',
        value: 'Male'
    },
    {
        label: 'Age',
        id: 'Age',
        value: '21'
    },
    {
        label: 'University Name',
        id: 'University Name',
        value: 'IGNOU'
    },
    {
        label: 'High School Name',
        id: 'High School Name',
        value: 'SKV'
    },
    {
        label: 'Degree Persued',
        id: 'Degree Persued',
        value: 'BCA'
    },
    {
        label: 'Upload Resume',
        id: 'Upload Resume',
        value: 'Resume.pdf'
    },
    {
        label: 'Number Of previous Students Admitted',
        id: 'Number Of previous Students Admitted',
        value: 23
    },
    {
        label: 'City Live In',
        id: 'City Live In',
        value: 'New Delhi'
    },
]

const ta_data = [
    {
        label: 'Bio',
        id: 'bio',
        value: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.'
    },
    {
        label: 'Past Experience (Writing)',
        id: 'Past Experience (Writing)',
        value: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.'
    },
    {
        label: 'Past Experience (English)',
        id: 'Past Experience (English)',
        value: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.'
    },
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
                        <LabelledInput id={element.id} value={element.value} label={element.label} ro={true} />
                    ))}
                    {/* All TextAreas */}
                    {ta_data.map((element, index) => (
                        <LabelledTextarea id={element.id} value={element.value} label={element.label} ro={true} />
                    ))}

                    <div className={classes.wd}>
                        <h3 className={classes.heading}>Testimonials</h3>
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
                            <LabelledInput id={element.id} value={element.value} label={element.label} ro={true} />
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
