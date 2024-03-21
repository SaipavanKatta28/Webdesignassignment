const path = require("path");
const bcrypt = require('bcrypt'); 
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const userSchema = require("../models/user-schema");
const model=mongoose.model("userModel",userSchema)
const saltRounds = 10;

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const UserNameFailed = (name) => {
    
    return name=="" || name==null || (!String(name).match(/^[a-zA-Z0-9]+$/));
};

const passwordStrength = (password) => {
    var strength=0;
    if (password.match(/[a-z]+/)){
        strength+=1;
    }
    if (password.match(/[A-Z]+/)){
        strength+=1;
    }
    if (password.match(/[0-9]+/)){
        strength+=1;
    }
    if (password.match(/[$@#&!]+/)){
        strength+=1;
    }
    return strength;
};

module.exports = function (app) {
    app.get("/", async (req, res) => {
        res.send("Hello World")
    });

    //Creating the user
    app.post("/user/create",bodyParser.json(),async(req,res)=>{
        console.log(req.body)
        const newUser=req.body;
        //1.validation for name and email
        //2. enforce strong password
        //3. if user exists don't create user
        //4. use bycrypt to save passwords

        //validation
        if(UserNameFailed(newUser.username)){
            res.send("user full name is required")
            return;
        }
        if(!validateEmail(newUser.email)){
            res.send("invalid email")
            return;
        }

        //enforce strong password
        if(passwordStrength(newUser.password)<3){
            res.send("Strong password needed")
            return;
        }

        //check for user existence and do not create user
        const check= await model.findOne({email:newUser.email})
        if(check){
            res.send("user email has already been registered")
            return;
        }

        //use bycrypt to hash password
        const hash= await bcrypt.hash(newUser.password,10)
        const finalUser={username:newUser.username,email:newUser.email,password:hash}
        const create=await model.create(finalUser)
        res.send("user created")
        return;
    })

    app.put("/user/edit",bodyParser.json(),async(req,res)=>{
        console.log(req.body)
        const email=req.query.email;
        //1.check if user exists of not
        //2.validate new username password
        //2.update user name and password
        const check= await model.findOne({email:email})
        if(!check){
            res.send("user emailid not found")
            return;
        }

        const username = req.body.username;
        if(UserNameFailed(username)){
            res.send("user full name is required")
            return;
        }
        const password = req.body.password;
        if(passwordStrength(password)<3){
            res.send("Strong password needed")
            return;
        }

        //use bycrypt to hash password
        const hash= await bcrypt.hash(password,10)
        const finalUser={username:username,email:email,password:hash}
        const updated=await model.updateOne({email:email},{$set:finalUser})
        res.send("user updated")
        return;

    })

    //1.Create a delete request
    //2.Check if it exists
    //3. Delete the data from database

    app.delete("/user/delete",bodyParser.json(),async(req,res)=>{
        console.log(req.body)
        const newUser=req.body;

        const check= await model.findOne({email:newUser.email})
        if(!check){
            res.send("user email not found to delete")
            return;
        }

        const deletion=await model.deleteOne({email:newUser.email})
        res.send("user deleted")
        return;
    })


    //1.create a get request
    //2.Return all the users in json format
    app.get("/user/getAll",async(req,res)=>{
        const findallusers=await model.find({})
        var result = JSON.stringify(findallusers) 
        res.send(result)
        return;
    })

    app.post("/user/validateUser",bodyParser.json(),async(req,res)=>{
        console.log(req.body)

        res.setHeader('Access-Control-Allow-Origin', '*');
        //check for user existence and validate User
        const userDetails= await model.findOne({email:req.body.email})
        if(userDetails == null) {
            res.status(400).send({status:400, message: "Email doesn't exist"});
            return;
        }
        else {
            const validatePassword = await bcrypt.compare(req.body.password, userDetails.password);
            if (!validatePassword) 
                res.status(400).send({status:400, message: "Invalid Password"});
            else
                res.status(200).send({status:200, message: "User Loggedin Succesfully"});
        }
    })
};

