import { v4 as uuidv4 } from 'uuid';
import User from '../model/user.js';


// let users = [];
// get all users 
export const getUsers = async(req, res) => {
try{
  const userlist= await User.find();
  //console.log(user);
  res.status(200).json(userlist);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
}

// post user       add  
export const createUser = async(req, res) => {
    const user = req.body;
    const newUser =new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser)
        console.log(res)

    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}

// get  user 
export const getUser = async(req, res) => {
    const { id } =req.params;
    try{
        const user= await User.findById(id);
        //console.log(user);
        res.status(200).json(user);
          }
          catch(error)
          {
              res.status(404).json({message:error.message});
          }
}
// delete user  
export const deleteUser = async(req, res) => {

    const { id } = req.params;
   const  deleteuser =User.filterById(id);

    try{
        const user= await User.delete(deleteuser);
        res.status(200).json(user);
    }
    catch(error)
    {  
        res.status(404).json({message:error.message});
    }
}
 //updateUser
export const updateUser = async(req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user= await User.find(firstName,lastName,age);
    try{
        await User.update(user);

    }
    catch(error)
    {
        res.status(404).json({message:error.message});
}
}