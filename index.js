
// code below
const express = require('express');

const app = express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


var cors = require('cors');
const { request, response } = require('express');

let data = [
    {
       id: 1,
        name: "Sanchit",
        age: 22,
        email: "san@gmail.com"
    },
    {
        id: 2,
         name: "vanchit",
         age: 22,
         email: "san@gmail.com"
     },
     {
        id: 3,
         name: "manchit",
         age: 22,
         email: "san@gmail.com"
     },
     {
        id: 4,
         name: "kanchit",
         age: 22,
         email: "san@gmail.com"
     },
     {
        id: 5,
         name: "lanchit",
         age: 22,
         email: "san@gmail.com"
     },
     {
        id: 6,
         name: "aanchit",
         age: 22,
         email: "san@gmail.com"
     },
     {
        id: 7,
         name: "wanchit",
         age: 22,
         email: "san@gmail.com"
     },
     {
        id: 8,
         name: "xanchit",
         age: 22,
         email: "san@gmail.com"
     }
]
app.use(cors())

// Routes here

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/es',es.postesdata);

app.get('/test', (request, response) => {
   
    response.json(data)
    // response.send("hello gamers")
});

app.get('/ping', (request, response) => {
    response.send("pong")
});

app.post('/test',(request, response) => {
    //console.log("REQUEST BODY :"+request.body + "RESPONSE BODY :"+response.body)
    data.push(request.body)
   // item.name = name
    //item.email = email
    response.send("ok")
});

app.post('/update',(request, response) => {
    const { id, name, email } = request.body
    item   = data.find(element => element.id.toString() === id.toString());
    item.name = name
    item.email = email
    response.send("ok")
});


// Start listening here
app.listen(3005, () => {
    console.log("Listening on port 3000")
});