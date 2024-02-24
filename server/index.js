const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const user = require("./modals/modal")
const jwt = require("jsonwebtoken")


app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000,()=>{
    console.log("Listening to 3000 port")
})

app.post('/signup', async (req, res) => {
    // user.create(req.body)
    // .then(result => res.json(
    //     {msg : result }
    //     ))
    // .then(result => res.json({ message: 'User created successfully', user : result }))
    // .catch(err => {
    //     console.error(err);
    //     res.status(500).json({ error: 'Internal Server Error' });
    let user1 = await user.create(req.body)
    res.json({msg : user1} )
   
  });