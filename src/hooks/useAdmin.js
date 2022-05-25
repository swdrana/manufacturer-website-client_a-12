import { useEffect, useState } from "react"
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const useAdmin = () =>{
    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin] = useState(true);
    if (loading) {
        // return <h1 className="text-center text-red-500 text-3xl">loading........</h1>
    }
    const email = user.email;
    useEffect(()=>{
        fetch(`http://localhost:8080/userInfo/${email}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.isAdmin===false && admin===true){
                setAdmin(false);
            }
        });
    },[]);
    console.log(admin);
    return [admin];
}
export default useAdmin;