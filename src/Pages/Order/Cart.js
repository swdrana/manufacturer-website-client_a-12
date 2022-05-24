import useOrders from "../../hooks/useOrders";
import {MdCancel} from 'react-icons/md'
const Cart = () => {
  const [orders, setOrders] = useOrders();
  const handelDelete = id =>{
    fetch(`http://localhost:8080/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = orders.filter(
              (odr) => odr._id !== id
            );
            setOrders(remaining);
          }
        });
  }
  return (
    <div>
      <div class="overflow-x-auto h-screen">
        {
            orders.length === 0 ?
            <h1 className="text-center text-2xl text-secondary">Your cart is empty</h1>
            :
            <table class="table w-full lg:w-1/2 mx-auto">
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
                  {
                      orders.map((order, index)=>{
                          const {_id, productId, myOrderQuantity, totalPrice, userEmail, 
                            productName,
                            price,
                            minimumOrderQuantity,
                            availableQuantity,
                            description,
                            imgLink} = order;
                          return  <tr key={order._id}>
                            <th>{index+1}</th>
                            <th>{productName}</th>
                            <td><img className=" w-20 lg:w-40 max-w-xl" src={imgLink} alt="" /></td>
                            <td>{myOrderQuantity}</td>
                            <td>$ {totalPrice}</td>
                            <td><MdCancel onClick={()=>handelDelete(_id)} className="btn bg-transparent hero-overlay border-0 hover:bg-transparent btn-sm" size={20} color='red'/></td>
                          </tr>
                      })
                  }
              </tbody>
            </table>
        }
      </div>
    </div>
  );
};

export default Cart;
