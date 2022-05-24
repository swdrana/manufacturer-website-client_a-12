import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUserInfo = (email) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/userInfo/${email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [userInfo]);
  return  [userInfo, setUserInfo];
};

export default useUserInfo;
