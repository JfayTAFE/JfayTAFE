const express = require(`express`);
const application = express();
const port = 3000;


application.get(`/Product/ConditionalTest`, function (request, response) 
{
    /*
    const productDetails = 
    {
        product: name,
        prcie: price
    };

    let name = request.query[`product`];
    let price = request.query[`price`];
    */

    const number = request.query.number

    if (number > 10)
    {
        response.send(`Number is greater than 10`);
    }
    else if (number < 10)
    {
        response.send(`Number is less than than 10`);
    }
    else if (number == 10)
    {
        response.send(`Number is equal to 10`);
    }
    else
    {
        response.send(`not a number bozo`);
    }
});

application.listen(port, function() 
{
    console.log(`Program started. Listening on ${port}`);
});
