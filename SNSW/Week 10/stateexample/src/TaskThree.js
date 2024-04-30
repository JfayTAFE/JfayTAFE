import React, { useState } from "react";
import Product from "./TaskThreeData";

function TaskThree() 
{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [product, setProduct] = useState(null);

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newProduct = new Product(name, description, unitPrice);
        setProduct(newProduct);
    }    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Description: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Unit Price: </label>
                <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            {product && (
                <dl>
                <dt>Name:</dt>
                <dd>{product.name}</dd>
                <dt>Description:</dt>
                <dd>{product.description}</dd>
                <dt>Unit Price:</dt>
                <dd>{product.unitPrice}</dd>
                </dl>
            )}
        </div>
    );
}

export default TaskThree;