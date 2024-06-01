const userModel = require("../models/userModels");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }
    const newUser = new userModel({
      name,
      email,
      password
    });
    await newUser.save();
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({email});

    if(user && (password === user.password))
    {
      res.status(200).send("login successfull")
      res.status(200).json({ success: true, message: "Login successful" });
    }
    else{
      return res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(200).send("Error in Login");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { registerController, loginController };
