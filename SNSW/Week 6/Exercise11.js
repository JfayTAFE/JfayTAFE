const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
let users = 
[
    {'Firstname' : 'Jeff', 'Lastname' : 'Jeffington', 'IsEnrolled' : 'true'},
    {'Firstname' : 'Lauren', 'Lastname' : 'Lava', 'IsEnrolled' : 'true'},
    {'Firstname' : 'Kelly', 'Lastname' : 'Mason', 'IsEnrolled' : 'false'}
]

class User 
{
    constructor(firstname, lastname, isEnrolled) 
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.isEnrolled = isEnrolled;
    }
}


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


// URL based parameters
app.post(`/api/enrol/submit/:firstname/:lastname`, (request, response) =>
{
    const firstname = request.params.firstname;
    const lastname = request.params.lastname;
    // Create object
    let newUser = new User(firstname, lastname, true);

    response.json(`${firstname} ${lastname} has been enrolled`);
});

// Body based parameters
app.post(`/api/enrol/submit`, (request, response) =>
{
    let newUser = new User
    (
        request.body.firstname,
        request.body.lastname,
        isEnrolled = true
    );

    response.json(`${newUser.firstname} ${newUser.lastname} has been enrolled`);
});


app.delete(`/api/enrol/unenrol`, (request, response) =>
{
    response.send('This is the DELETE method for /api/enrol/unenrol');
});