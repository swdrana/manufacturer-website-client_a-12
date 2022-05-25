import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  
  return [users, setUsers];
};

export default useUsers;