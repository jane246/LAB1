
/*const express = require('express')
const app = express()*/


const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@gmail.com"
    }, {
        "id": 2,
        "name": "William Smith",
        "email": "will.smith@gmail.com"
    }, {
        "id": 3,
        "name": "Jennifer Lee",
        "email": "jennifer.lewe@gmail.com"
    },
]

app.get('/api/users', (req, res) => {
    const result = { 
        "status": 200, 
        "data": users 
    }
    return res.json(result)
})

app.get("/api/user/:id", (req,res) => {
    let user = users.find(user => user.id === parseInt(req.params.id));
    if(!user)
        return res
            .status(400)
            .json({status: 400, message: "Not found user with the given ID"});
    res.user = user;
    const result = {
        status: 200,
        data: res.user
    };
    return res.json(result);
});

app.get('/',(req,res) => res.send('Hello World!'))
app.listen(3000,() => console.log('Example app listening on port 3000!'))