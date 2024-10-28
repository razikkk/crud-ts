import { Request, Response } from "express";
import User from "../model/userSchema";

const loadDashboard = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.render("dashboard", { users });
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;
    const existingUser = await User.findOne({email});
    if (existingUser) {
      res.status(400).json({ message: "user already exists" });
      return;
    }
    const newUser = new User({
      name,
      email,
      age,
    });
    await newUser.save();
    res.status(200).json({ message: "user created" });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async(req:Request ,res:Response)=>{
    try {
        await User.findByIdAndDelete(req.params.userId)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}

const editUser = async(req:Request , res:Response)=>{
    try {
        await User.findByIdAndUpdate(req.params.userId, req.body)
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
    }
}
export default {
  loadDashboard,
  addUser,
  deleteUser,
  editUser
};
