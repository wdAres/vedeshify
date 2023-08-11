import React, { useEffect, useState } from 'react'
import classes from './AdminLogin.module.css'
import eye_img from '../../assets/eye.png'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

    const [viewPassword, setViewPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    // UserName validation
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredUsernameTouched, setEnteredUsernameTocuhed] = useState(false)
    const changeUsernameHandler = (e) => {
        setEnteredUsername(e.target.value)
    }
    const usernameBlurHandler = (e) => {
        setEnteredUsernameTocuhed(true)
    }
    const enteredUsernameIsValid = enteredUsername.trim() !== '';
    const UserNameInputIsInValid = !enteredUsernameIsValid && enteredUsernameTouched;

    // Password Validation

    const [enteredPassoword, setEnteredPassword] = useState('');
    const [passowordTouched, setPasswordTouched] = useState(false);
    const changePasswordHandler = (e) => {
        setEnteredPassword(e.target.value)
    }
    const passwordBlurHandler = (e) => {
        setPasswordTouched(true)
    }
    const enteredPasswordIsValid = enteredPassoword.trim() !== '';
    const PasswordInputIsInValid = !enteredPasswordIsValid && passowordTouched;


    // On Form Submission

    const isformValid = !UserNameInputIsInValid && !PasswordInputIsInValid

    const formSubmissionHandler = async (e) => {
        e.preventDefault();
        setLoading(true)

        setTimeout(() => {
            navigate('/dashboard')
        }, 1500);

        setLoading(false)
        setEnteredUsername('')
        setEnteredPassword('')
        setEnteredUsernameTocuhed(false)
        setPasswordTouched(false)
    }


    return (
        <div className={classes.container}>
            <div className={classes.first_div}>
                {/* <img src={Logo} alt="" /> */}
                <h1>TUTORAZZI</h1>
            </div>
            <form className={classes.form} onSubmit={formSubmissionHandler}>
                <div className={classes.input_div}>
                    <label htmlFor="username">Username</label>
                    <input className={UserNameInputIsInValid === true ? classes.invalid : ''} id='username' type="text" value={enteredUsername} onChange={changeUsernameHandler} onBlur={usernameBlurHandler} />
                    {<p className={`${classes.alert} ${UserNameInputIsInValid === true ? classes.invalid_p : ''}`}>Enter correct details!</p>}
                </div>
                <div className={classes.input_div}>
                    <label htmlFor="password">Password</label>
                    <input id='password' type={viewPassword === true ? "text" : "password"} className={PasswordInputIsInValid === true ? classes.invalid : ''} value={enteredPassoword} onChange={changePasswordHandler} onBlur={passwordBlurHandler} />
                    {<p className={`${classes.alert} ${PasswordInputIsInValid === true ? classes.invalid_p : ''}`}>Enter correct details!</p>}
                    <img className={classes.eye} src={eye_img} onClick={() => setViewPassword(!viewPassword)} alt="" />
                </div>
                <button type='submit' disabled={!isformValid || loading === true} className={classes.login_btn}>{loading === true ? 'Loading...' : "Login"}</button>
            </form>
        </div>
    )
}

export default AdminLogin