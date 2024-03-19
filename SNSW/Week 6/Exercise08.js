const express = require('express');
const app = express();
const port = 3000;
/*
app.listen(port, function(request, response)
{
    console.log('App running on port 3000');
});
*/
app.listen(port, () =>
{
    console.log(`App running on http://localhost:${port}`);
});


/*
app.get(`/api/products/`, function(request, response)
{

});
app.post(`/api/products/`, function(request, response)
{
    
});
app.delete(`/api/products/`, function(request, response)
{

});
*/
app.get(`/api/enrol/getinfo`, (request, response) =>
{
    response.send('This is the GET method for /api/enrol/getinfo');
});

app.post(`/api/enrol/submit`, (request, response) =>
{
    response.send('This is the POST method for /api/enrol/submit');
});

app.delete(`/api/enrol/unenrol`, (request, response) =>
{
    response.send('This is the DELETE method for /api/enrol/unenrol');
});