import { useEffect, useState } from "react";

const useMyOrders = (email) => {
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/my-orders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders]);
  return [myOrders, setMyOrders];
};

export default useMyOrders;