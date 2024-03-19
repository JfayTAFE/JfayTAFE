const express = require('express');
const app = express();
const port = 3000;
let users = 
[
    {'Firstname' : 'Jeff', 'Lastname' : 'Jeffington', 'IsEnrolled' : 'true'},
    {'Firstname' : 'Lauren', 'Lastname' : 'Lava', 'IsEnrolled' : 'true'},
    {'Firstname' : 'Kelly', 'Lastname' : 'Mason', 'IsEnrolled' : 'false'}
]


app.listen(port, () =>
{
    console.log(`App running on http://localhost:${port}`);
});

app.get(`/api/enrol/getinfo/:ID`, (request, response) =>
{
    const ID = request.params.ID;
    const user = users[ID - 1]; // Subtract 1 because array indexes start at 0

    if (user) 
    {
        response.send(`ID: ${ID}, Firstname: ${user.Firstname}, Lastname: ${user.Lastname}, IsEnrolled: ${user.IsEnrolled}`);
    }
    else 
    {
        response.status(404).send('Product not found');
    }
});


app.post(`/api/enrol/submit`, (request, response) =>
{
    response.send('This is the POST method for /api/enrol/submit');
});


app.delete(`/api/enrol/unenrol`, (request, response) =>
{
    response.send('This is the DELETE method for /api/enrol/unenrol');
});

