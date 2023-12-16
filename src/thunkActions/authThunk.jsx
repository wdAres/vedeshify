import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../main";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/authSlice";


export const signup = (formData) => {
    return async dispatch => {
            const auth = getAuth()
            const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

            const result = response.user

            const userProfile = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                uid: result.uid,
                isOnline: true,
                createdAt: new Date()
            }

            await setDoc(doc(db, 'users', result.uid), userProfile);


            dispatch(authActions.login({
                data: userProfile
            }))

            sessionStorage.setItem('user', JSON.stringify(userProfile));

            
    }
} 

export const isLoggedInUser = () => {
    return async dispatch => {

        const user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;

        if(user){
           dispatch(authActions.login({
            data:user
           }))
        }else{
            console.log('Please login!');
        }

    }
}

