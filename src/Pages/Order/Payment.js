import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";

const Payment = () => {
  const [user] = useAuthState(auth);
  const [cart, setCart] = useCart(user?.email);
  let isPaid = false;
  const handelPayment = () => {
    isPaid = true;
    if (isPaid) {
      ordered();
    }
  };
  const ordered = () => {
      const paidStatus = {isPaid:true}
    cart.map((order) => {
      fetch(`http://localhost:8080/updateOrderStatus/${order._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paidStatus),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          // toast.info("Updated Done!", { theme: "colored" });
          // e.target.reset();
        });
    });
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handelPayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
