import { getAuth } from "firebase/auth";
import { useState } from "react"
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const useAdmin = () =>{
    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState (true);


    if (loading) {
        // return <h1 className="text-center text-red-500 text-3xl">loading........</h1>
    }
    if(user){
        const email = user.email;
        fetch(`http://localhost:8080/userInfo/${email}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.isAdmin===true){
                setAdmin(true)
            }else{
                setAdmin(false)
            }
            setAdminLoading(false);
        });
    
    }
    return [admin, adminLoading];
}
export default useAdmin;