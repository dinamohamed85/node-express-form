const express = require("express")
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/form", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post("/formpost", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, (error) => {
    if (error)
        console.log(`something went wrong ${error}`);
    else (error)
    console.log(`server listening on port ...  ${port}`);
});