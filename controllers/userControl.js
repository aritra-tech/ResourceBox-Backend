require('dotenv').config()
const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class userController {
    static userRegistration = async(req,res) => {
        const{name,email,password} = req.body
        const user = await User.findOne({email: email})
        if(user){
            return res.status(400).json({message: "Email already exist"})
        }
        if(name && email && password) {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)
                const doc = new User({
                    name: name,
                    email: email,
                    password: hashedPassword,
                })
    
                await doc.save()
                const saved_user = await User.findOne({email: email})
                const token = jwt.sign({userID: saved_user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "7d"})
    
                res.send({status: "success", message: "User registered successfully!", "token": token});
    
            } catch (error) {
    
              console.log(error);
              res.send({
                status: "failed",
                message: `Something went wrong! ${error}`,
              });
            }
    
            } else {
                res.send({status: "failed", message: "All fields are required!"});
            }
        }    
 }
module.exports = userController


