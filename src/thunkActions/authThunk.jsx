import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../main";


export const signup = formData => {
    return async dispatch => {
        try {
            const auth = getAuth()
            const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

            const userProfile = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                uid: response.uid,
                isOnline: true,
                createdAt: new Date()
            }

            await setDoc(doc(db, 'users', response.uid), userProfile);


            dispatch(authActions.login({
                data: userProfile
            }))

            sessionStorage.setItem('user', JSON.stringify(userProfile));

            
        } catch (error) {
            console.log(error);
        }
    }
} 
