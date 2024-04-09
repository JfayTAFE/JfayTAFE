import React from "react";

const TaskFour = ({products}) => 
{
    return (
        <div>
        <h2>Products Array</h2>
        {products.map ((product, index) => (
            <div key = {index}>
                <h3>Product {index + 1}</h3>
                <p>Name: {product.name}</p>
                <p>Price: {product.unitPrice}</p>
            </div>
        ))}
        </div>
    );
};

export default TaskFour;