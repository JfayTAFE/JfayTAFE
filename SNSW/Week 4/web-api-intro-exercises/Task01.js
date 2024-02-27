const express = require(`express`);

const application = express();

const port = 3000;

// Define a route handler for the root path
application.get(`/`, function (request, response) 
{
    response.send(`Product: Gaming Computer, Quantity: 2!`);
});

application.get (`/Product/FixedDescription`, function (request, response)
{
    response.send(`Product: Gaming Computer, Quantity: 2`);
});

application.listen(port, function() 
{
    console.log(`Program started. Listening on ${port}`);
});