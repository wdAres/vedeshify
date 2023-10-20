import React, { useState } from 'react'
import classes from './Login.module.css'
import Heading from '../../Components/Heading/Heading'
import LabelledInput from '../../Components/LabelledInput/LabelledInput'
import BlackButton from '../../Components/BlackButton/BlackButton'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_new.png'
import { useForm } from 'react-hook-form'
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../main'
import { authActions } from '../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { isLoggedInUser } from '../../thunkActions/authThunk'
const Login = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth)

    const onSubmit = async (formData) => {
        try {
            setIsLoading(true)
            const auth = getAuth()
            const response = await signInWithEmailAndPassword(auth, formData.email, formData.password)

            const result = response.user

            await updateDoc(doc(db, 'users', result.uid), {
                isOnline: true
            })

            const docRef = doc(db, "users", result.uid);
            const docSnap = await getDoc(docRef);

            sessionStorage.setItem('user', JSON.stringify(docSnap.data()))

            dispatch(authActions.login({
                data: docSnap.data()
            }))

            navigate('/dashboard')

        } catch (error) {
            console.log(error);
        }
        finally {
            reset()
            setIsLoading(false)
        }
    }

    dispatch(isLoggedInUser())

    if (auth.isLoggedIn) {
        return navigate('/dashboard')
    }


    return (
        <>
            <div className={classes.nav}>
                <img src={logo} alt="" />
                <Link className={classes.toggle_btn} to={'/auth-signup'}>Signup</Link>
            </div>
            <div className={classes.popup_main}>
                <div className={classes.left}>
                    <Heading heading={'A seamless journey to your dream university!'} p={'Discover universities instantly that are best suited for you and your preferences.'} cls={classes.reversed} />
                </div>
                <div className={classes.right}>
                    <Heading heading={'Get started with Videshify'} p={'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'} cls={classes.reversed} />
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>

                        <LabelledInput register={register} name={'email'} ph={'Email'} id={'email'} type={'email'} />
                        <LabelledInput register={register} name={'password'} ph={'Password'} id={'password'} type={'password'} />


                        <BlackButton disabled={isLoading} type={'submit'}>Login</BlackButton>
                        <p>Don't Remeber Password ? <Link to={'/auth-forget'}>Forget Password</Link></p>
                    </form>
                    <p className={classes.p}>
                        You agree to our <a href="#!">Terms</a>. See how we use your data in our <a href="#!">Privacy Policy</a>. We Never Post to Facebook.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
