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

// Generate a new product ID
function generateProductID() 
{
    /*
    let existingID = products.map(function(item)
    {
    return parseInt(item.ID);
    });
    */
    // Create array 'existingID' with .map, array contains 'ID' values
    let existingID = products.map(item => parseInt(item.ID));

    // ... spread operator. Passes each element of 'existingID' as single arguments to Math.max
    // finds the maximum value among the ID's 
    let maxID = Math.max(...existingID);

    // Increment by 1 to get next ID
    return (maxID + 1).toString();
}

app.post(`/api/products/`, function(request, response)
{
    // Generate a new ID
    let newProductID = generateProductID();

    // Create a new Product object using newProductID
    let newProduct = new Product
    (
        newProductID,
        request.body.name,
        request.body.price,
        request.body.description
    );

    products.push(newProduct);

    response.json(newProduct);
});


app.listen(3000, function(request, response)
{
    console.log('App running on port 3000');
});
