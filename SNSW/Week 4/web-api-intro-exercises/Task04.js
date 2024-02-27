const express = require(`express`);
const application = express();
const port = 3000;


application.get(`/Product/Details`, function (request, response) 
{
    const productDetails = 
    {
        product: name,
        prcie: price
    };

    let name = request.query[`product`];
    let price = request.query[`price`];

    response.json(productDetails);
});

application.listen(port, function() 
{
    console.log(`Program started. Listening on ${port}`);
});
