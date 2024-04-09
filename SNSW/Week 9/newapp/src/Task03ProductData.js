import React from 'react';

class Product
{
    constructor (name, description, unitPrice)
    {
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
    }
}

const TaskThree = ({product}) =>
{
  const {name, description, unitPrice} = product;
  return (
    <div>
      <h2>Product Info</h2>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {unitPrice}</p>
    </div>
  );
};

export {Product, TaskThree};