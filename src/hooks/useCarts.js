import { useEffect, useState } from "react";

const useCarts = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/carts`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [carts]);
  // useEffect(() => {
  //   fetch(`http://localhost:8080/orders`)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, [orders]);
  return [carts, setCarts];
};

export default useCarts;
