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

app.use(express.json());


app.put(`/api/products/`, function(request, response)
{
    // Specify variables in body
    // let { ID, name, price, description } = request.body;
    let ID = request.body.ID;
    let name = request.body.name;
    let price = request.body.price;
    let description = request.body.description;

/*
    function compareID(item) 
    {
        return item.ID === ID;
    }
*/
    // Search array for index of ID to see if item exists
    let productIndex = products.findIndex(item => item.ID === ID);

    if (productIndex === -1) 
    {
        response.status(404).send('Product not found');
    } 

    else 
    {
        // Create new Product object
        let updatedProduct = new Product(ID, name, price, description);
        // Update index in array with new object
        products[productIndex] = updatedProduct;
        response.send(updatedProduct);
    }
});


app.listen(3000, function(request, response)
{
    console.log('App running on port 3000');
});
