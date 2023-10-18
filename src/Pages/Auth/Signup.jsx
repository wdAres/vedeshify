import React, { useState } from 'react'
import classes from './Login.module.css'
import Heading from '../../Components/Heading/Heading'
import LabelledInput from '../../Components/LabelledInput/LabelledInput'
import BlackButton from '../../Components/BlackButton/BlackButton'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_new.png'

// Importing actions from athSlice
import { authActions } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

const Signup = () => {
    const dispatch = useDispatch()
    // Form States
    const [email,setEmail] = useState('')
    const [passowrd,setPassowrd] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(authActions.signup({
            email,
            passowrd,
            returnSecureToken:true
        }))
    }

    return (
        <>
        <div className={classes.nav}>
            <img src={logo} alt="" />
            <Link className={classes.toggle_btn} to={'/'}>Login</Link>
        </div>
        <div className={classes.popup_main}>
            <div className={classes.left}>
                <Heading heading={'A seamless journey to your dream university!'} p={'Discover universities instantly that are best suited for you and your preferences.'} cls={classes.reversed} />
            </div>
            <div className={classes.right}>
                <Heading heading={'Get started with Videshify'} p={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} cls={classes.reversed} />
                <form onSubmit={submitForm}  className={classes.form}>

                    {/* <LabelledInput ph={'Name'} id={'name'} type={'text'}  /> */}
                    {/* <LabelledInput ph={'Phone Number'} id={'number'} type={'text'}  /> */}
                    <LabelledInput changeFunc={setEmail} ph={'Email'} id={'email'} type={'email'}  />
                    <LabelledInput changeFunc={setPassowrd} ph={'Password'} id={'password'} type={'password'}  />


                    <BlackButton type={'submit'}>Signup</BlackButton>
                    <p>Already Have An Account ? <Link to={'/'}>Sign-in</Link></p>
                </form>
                <p className={classes.p}>

                    You agree to our <a href="#!">Terms</a>. See how we use your data in our <a href="#!">Privacy Policy</a>. We Never Post to Facebook.
                </p>
            </div>
        </div>
        </>
    )
}

export default Signup
