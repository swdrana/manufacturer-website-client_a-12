import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";
import Loading from "../../components/Loading";
const Cart = () => {
  const [user, loading, error] = useAuthState(auth);

  const [cart, setCart] = useCart(user?.email);
  const [deleteItem, setDeleteItem] = useState("");
  const handelDelete = () => {
    fetch(`http://localhost:8080/deleteOrder/${deleteItem}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = cart.filter((odr) => odr._id !== deleteItem);
          setCart(remaining);
        }
      });
  };

  const handelCartForm = (e) => {
    e.preventDefault();
    const phone = e.target.tel.value;
    const address = e.target.address.value;
    const updatedUserInfo = {phone, address};
    if(user){
      const email = user.email;
      console.log(updatedUserInfo);   
      // send updated product to database
      if(email!==null){
  
      fetch(`http://localhost:8080/newUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUserInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          // toast.info("Updated Done!", { theme: "colored" });
          // e.target.reset();
        });
      }
    }

  };
  
  if(!cart.length){
      return  <h1 className="text-center text-2xl text-secondary">
        Your cart is empty
      </h1>
  }
  return (
    <div className="lg:px-20">
      <input type="checkbox" id="conform-delete" className="modal-toggle" />
      <label for="conform-delete" className="modal cursor-pointer">
        <label className="modal-box relative" for="">
          <h3 className="text-lg font-bold">Are you sure want to delete?</h3>

          <div className="modal-action">
            <label
              for="conform-delete"
              className="btn btn-error float-right "
              onClick={handelDelete}
            >
              Yes
            </label>
            <label for="conform-delete" className="btn btn-success">
              No
            </label>
          </div>
        </label>
      </label>

      {cart.length === 0 ? (
        <h1 className="text-center text-2xl text-secondary">
          Your cart is empty
        </h1>
      ) : (
        <div className="flex  flex-col lg:flex-row w-full ">
          <table class="table w-full lg:w-2/3">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Name</th>
                <th>Photo</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((order, index) => {
                const {
                  _id,
                  productId,
                  myOrderQuantity,
                  totalPrice,
                  userEmail,
                  productName,
                  price,
                  minimumOrderQuantity,
                  availableQuantity,
                  description,
                  imgLink,
                } = order;
                return (
                  <tr key={order._id}>
                    <th>{index + 1}</th>
                    <th>{productName}</th>
                    <td>
                      <img
                        className=" w-20 lg:w-40 max-w-xl"
                        src={imgLink}
                        alt=""
                      />
                    </td>
                    <td>{myOrderQuantity}</td>
                    <td>$ {totalPrice}</td>
                    <td>
                      <label
                        for="conform-delete"
                        className="btn bg-transparent hero-overlay border-0 hover:bg-transparent btn-sm"
                        onClick={() => setDeleteItem(_id)}
                      >
                        <MdCancel
                          className=" hover:text-primary"
                          size={20}
                          color="red"
                        />
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-col w-full lg:1/3 p-20 justify-center">
            <form class="form-control" onSubmit={handelCartForm}>
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <label class="input-group">
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  disabled
                  class="input w-full "
                />
              </label>

              <label class="label">
                <span class="label-text">Your E-Mail</span>
              </label>
              <label class="input-group">
                <input
                  type="text"
                  defaultValue={user?.email}
                  readOnly
                  disabled
                  class="input w-full rounded-xl"
                />
              </label>

              <label class="label">
                <span class="label-text">Your Phone</span>
              </label>
              <label class="input-group">
                <input
                  type="tel"
                  name="tel"
                  class="input  input-bordered w-full rounded-xl"
                />
              </label>

              <label class="label">
                <span class="label-text">Shipping Address</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                name="address"
                placeholder="Your Address"
              ></textarea>
              <input
                className="btn btn-primary my-10"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
