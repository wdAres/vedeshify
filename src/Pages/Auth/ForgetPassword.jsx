import React from 'react'
import classes from './Login.module.css'
import Heading from '../../Components/Heading/Heading'
import LabelledInput from '../../Components/LabelledInput/LabelledInput'
import BlackButton from '../../Components/BlackButton/BlackButton'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_new.png'
const ForgetPassword = () => {

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
                <Heading heading={'Forget Password ? Let Us Help You'} p={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} cls={classes.reversed} />
                <form  className={classes.form}>

                    <LabelledInput ph={'Email'} id={'email'} type={'email'}  />


                    <BlackButton  type={'submit'}>Get Reset Link</BlackButton>

                </form>
                <p className={classes.p}>
                    You agree to our <a href="#!">Terms</a>. See how we use your data in our <a href="#!">Privacy Policy</a>. We Never Post to Facebook.
                </p>
            </div>
        </div>
        </>
    )
}

export default ForgetPassword
