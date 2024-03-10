const express = require(`express`);

const app = express();

let users = 
[
    {'email' : 'jeff@jeff,com', 'username' : 'jeff'},
    {'email' : 'alice@jeff,com', 'username' : 'alice'},
    {'email' : 'bob@jeff,com', 'username' : 'bob'}
];

app.get(`/user/:userid`, function(request, response)
{
    let idx = parseInt(request.params.userid);
    let usr = users[idx];

    response.json(usr);
});

app.put(`/user/:userid`, function(request, response)
{
    let idx = parseInt(request.params.userid);

    users[idx] = request.body;

    response.send({'success' : 1 });
});

app.delete(`/user/:userid`, function(request, response)
{
    let idx = parseInt(request.params.userid);

    users.splice(idx, 1);

    response.send({ 'success' : 1});
})


/*
app.get(`/`, function(request, response)
{
    response.send(`Hellow world from GET`);
});

app.post(`/`, function(request, response)
{
    response.send(`Hellow world from POST`);
});

app.get(`/:name`, function(request, response)
{
    let name = request.params.name;
    response.send(`Hello ${name}`);
});



app.listen(3000, function(request, response)
{
    response.send(`App running on prot 3000`);
});
*/