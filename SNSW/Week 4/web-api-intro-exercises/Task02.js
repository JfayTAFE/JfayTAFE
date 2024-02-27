const express = require(`express`);
const application = express();
const port = 3000;


application.get (`/Product/DynamicDescription`, function (request, response)
{
    const productName = request.query.productName
    const productNumber = request.query.productNumber

    response.send(`Product: ${productName}, Quantity: ${productNumber}`);
});

application.listen(port, function() 
{
    console.log(`Program started. Listening on ${port}`);
});
