const mongoose = require('mongoose')
// import bcrypt from "bcrypt"
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const user = new mongoose.Schema({
     username : {type:String, required: true},
     email : {type:String, required: true},
     password : {type:String, required: true},
    },
    {
        collection: 'users'
    }
)

user.pre('save', async function(next){
    if(this.isModified("password")){
        next()
    }
    try{
        const hash_pass = await bcrypt.hash(this.password, 10)
        this.password = hash_pass
    }
    catch(err){
        console.log(err)
    }
})

user.methods.generateToken = async function () {
    try {
      let token = jwt.sign({ _id: this._id }, 'Akshat');
      // this.tokens = this.tokens.concat({ token: token });
      return token;
    } catch (err) {
      console.log(err);
    }
  };


const model = mongoose.model('user', user)

module.exports = model