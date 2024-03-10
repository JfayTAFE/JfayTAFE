const express = require(`express`);

const app = express();

// Create array
let products = 
[
    {'ID' : '01', 'Name' : 'Laptop', 'Price' : '1000', 'Description' : 'Powerful laptop'},
    {'ID' : '02', 'Name' : 'Smartphone', 'Price' : '500', 'Description' : 'High-end smartphone'},
    {'ID' : '03', 'Name' : 'Headphones', 'Price' : '80', 'Description' : 'Noise-canceling headphones'}
]

// Create class
class Product 
{
    constructor(ID, name, price, description) 
    {
        this.ID = ID;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
  

app.get(`/api/products/:productID`, function(request, response)
{
    let productID = request.params.productID;

/*
    function compareID(item) 
    {
        return item.ID === productID;
    }
*/
    // Find the product with the specified ID
    let product = products.find(item => item.ID === productID);

    if (product) 
    {
        response.json(product);
    } 
    else 
    {
        response.sendStatus(404);
    }
});


app.listen(3000, function(request, response)
{
    console.log('App running on port 3000');
});
