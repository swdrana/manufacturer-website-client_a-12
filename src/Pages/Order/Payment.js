import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";

const Payment = () => {
  const [user] = useAuthState(auth);
  const [cart, setCart] = useCart(user?.email);
  let subTotal = 0;
  cart.map((o) => {
    if (!o.isPaid) {
      subTotal = o.totalPrice + subTotal;
    }
  });
  let isPaid = false;
  const handelPayment = async (e) => {
    e.preventDefault();
    if (subTotal <= Number.parseFloat(e.target.inputMoney.value)) {
      isPaid = true;
    } else {
      alert("More money need!");
    }
    if (isPaid) {
      await ordered();
    }
  };
  const ordered = () => {
    const paidStatus = { isPaid: true };
    cart.map((order) => {
      // update paid status
      fetch(`http://localhost:8080/updateCartStatus/${order._id}`, {
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

      // send updated data to order collection
      fetch("http://localhost:8080/add-to-order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //   toast.success("Item Added!", { theme: "colored" });
        });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center my-20">
      <p>You Need to Pay: $ {subTotal}</p>
      <form
        onSubmit={handelPayment}
        className="flex flex-col justify-center items-center gap-5 my-5"
      >
        <input
          type="number"
          name="inputMoney"
          id=""
          placeholder="Type Payable Amount"
        />
        <input type="submit" value="Pay Now" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Payment;
