import React from 'react';

const AddProduct = () => {
    const handelSubmit = e =>{
        e.preventDefault();
        const productName = e.target.productName.value;
        const price = Number.parseFloat(e.target.price.value);
        const minimumOrderQuantity = Number.parseInt(e.target.minimumOrderQuantity.value);
        const availableQuantity = Number.parseInt(e.target.availableQuantity.value);
        const description = e.target.description.value;
        const imgLink = e.target.imgLink.value;
        const item = {
            productName,
            price,
            minimumOrderQuantity, 
            availableQuantity,
            description,
            imgLink,
          };
          console.log(item);

    // send data to the server
    fetch("http://localhost:8080/add", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        //   toast.success("Item Added!", { theme: "colored" });
        });
    }
    return (
        <div>
            <form onSubmit={handelSubmit} className="flex flex-col">
                <input type="text" name="productName" id="" placeholder='Product Name'/>
                <input type="number" name="price" id="" placeholder='Price'/>
                <input type="text" name="description" id="" placeholder='Description'/>
                <input type="number" name="minimumOrderQuantity" id="" placeholder='Minimum Order'/>
                <input type="number" name="availableQuantity" id="" placeholder='Available Quantity'/>
                <input type="text" name="imgLink" id="" placeholder='Image Link'/>
                <input type="submit" className='btn' name="" id="" />
            </form>
        </div>
    );
};

export default AddProduct;