const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// users = { "id": "1","firstname": "Dina", "lastname": "Mohamed", "email": "dina.elghareeb@gmail.com" }
const users = []

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get("/formpost", (req, res) => {
    console.log('user by id... ' + req.param('id'));
    console.log(users[req.param('id') - 1]);
    
    res.send(users[req.param('id') - 1]);
})

app.post("/formpost", (req, res) => {
    const { firstname, lastname, email } = req.body;
    users.push({ id: users.length + 1, firstname: firstname, lastname: lastname, email: email })
    console.log(users);
    res.send(users);
})

app.listen(port, (error) => {
    if (error)
        console.log(`something went wrong ${error}`);
    else (error)
    console.log(`server listening on port ...  ${port}`);
});