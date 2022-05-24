import React, { useState } from "react";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const [deleteItem, setDeleteItem] = useState("");
  if(!products.length){
    <Loading/>
  }
  return (
    <div>
      <div className="">
        <input type="checkbox" id="conform-delete" className="modal-toggle" />
        <label for="conform-delete" className="modal cursor-pointer">
          <label className="modal-box relative" for="">
            <h3 className="text-lg font-bold">Are you sure want to delete?</h3>

            <div className="modal-action">
              <label
                for="conform-delete"
                className="btn btn-error float-right "
                onClick={() => {
                  fetch(`http://localhost:8080/deleteProduct/${deleteItem}`, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.deletedCount > 0) {
                        const remaining = products.filter(
                          (product) => product._id !== deleteItem
                        );
                        setProducts(remaining);
                      }
                    });
                }}
              >
                Yes
              </label>
              <label for="conform-delete" className="btn btn-success">
                No
              </label>
            </div>
          </label>
        </label>

        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Min Order Quantity</th>
              <th>Available Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const {
                _id,
                productName,
                price,
                minimumOrderQuantity,
                availableQuantity,
                description,
                imgLink,
              } = product;
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{productName}</td>
                  <td>
                    <img src={imgLink} alt="" />
                  </td>
                  <td>$ {price}</td>
                  <td>{minimumOrderQuantity}</td>
                  <td>{availableQuantity}</td>
                  <td>
                    <label
                      for="conform-delete"
                      className="btn modal-button"
                      onClick={() => setDeleteItem(_id)}
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {/* <tr>
              <th></th> 
              <th>Name</th> 
              <th>Job</th> 
              <th>company</th> 
              <th>location</th> 
              <th>Last Login</th> 
              <th>Favorite Color</th>
            </tr> */}
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
