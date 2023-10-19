import React, { useState } from 'react'
import classes from './Login.module.css'
import Heading from '../../Components/Heading/Heading'
import LabelledInput from '../../Components/LabelledInput/LabelledInput'
import BlackButton from '../../Components/BlackButton/BlackButton'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_new.png'
import { useForm } from 'react-hook-form'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../main'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/authSlice'
import { signup } from '../../thunkActions/authThunk'


const Signup = () => {
    // Form States
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()

    const onSubmit = async (formData) => {

        try {
            setIsLoading(true)
            dispatch(signup(formData))

        } catch (error) {
            console.log(error);
        }
        finally {
            reset()
            setIsLoading(false)
        }
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>

                        <LabelledInput register={register} name={'name'} ph={'Name'} id={'name'} type={'text'} />
                        <LabelledInput register={register} name={'phone'} ph={'Phone Number'} id={'number'} type={'text'} />
                        <LabelledInput register={register} name={'email'} ph={'Email'} id={'email'} type={'email'} />
                        <LabelledInput register={register} name={'password'} ph={'Password'} id={'password'} type={'password'} />


                        <BlackButton disabled={isLoading} type={'submit'}>Signup</BlackButton>
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
