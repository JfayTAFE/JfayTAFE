const express = require(`express`);
const application = express();
const port = 3000;


application.get(`/Product/OldDescription`, function (request, response) 
{
    response.redirect(`/Product/NewDescription`);
});

application.get (`/Product/NewDescription`, function (request, response)
{
    response.send(`You have been redirected to the new description page for a product!`);
});

application.listen(port, function() 
{
    console.log(`Program started. Listening on ${port}`);
});
