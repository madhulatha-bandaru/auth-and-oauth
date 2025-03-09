import User from "../models/userSchema.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
  const {username, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, process.env.KEY);
  const newUser = new User({username,email,password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({message : "Account created successfully!"})
  } catch(error) {
    next(error);
  }
}