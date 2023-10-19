// import { useSelector } from "react-redux";
import { authActions } from "./authSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const signupReq = (formData) => {
    return async (dispatch) => {
        try {
            const auth = getAuth();
            const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            dispatch(authActions.auth({ data: response.user }))
            alert('user created!')
        } catch (error) {
            console.log(error);
        }
    }
};