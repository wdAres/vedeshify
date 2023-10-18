import { useSelector } from "react-redux";

export const fetchData = () => {
    return async () => {
        const formData = useSelector(state=>state.data.credentials)

        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAK9K1_yXmd4aG_twPFINK0N2xr54Qh2J0', {
                method: "POST",
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
};