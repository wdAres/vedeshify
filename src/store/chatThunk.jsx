
import { db } from "../main"
import { collection, query, where, getDocs, orderBy, onSnapshot } from "firebase/firestore";
import { userActions } from "./userSlice";



export const getActiveUsers = (uid) => {
    return async (dispatch) => {

        const q = query(collection(db, "users"), where("isOnline", "==", true));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data());
                if (doc.data().uid !== uid) {
                    users.push(doc.data())
                }
            });
            dispatch(userActions.getUsers({ users: users }))
        });

        return unsubscribe
    }
}

