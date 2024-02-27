const express = require(`express`);

const app = express();

const port = 3000;

/*
GET
POST
PUT
PATHC
DELETE
*/

app.get(`/`, function(request, response)
{
    response.send(`Hello world`);
});


app.get("/Customers", function(request, response)
{
    let customers = 
    [
        {'name' : "Jeff"},
        {'name' : "Bob"},
        {'name' : "Mark"},
        {'name' : "Hank"},
    ];
});

app.listen(port, function() 
{
    console.log(`Program started. Listening on ${port}`);
})