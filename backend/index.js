// to run the file in the terminal :npm run dev

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection

console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

//schema

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//model

const userModel = mongoose.model("user", userSchema);

//Api

app.get("/", (req, resp) => {
  resp.send("Server is running");
});

//signup api

app.post("/user/signup", async (req, resp) => {
  console.log(req.body);
  const { email } = req.body;

  const result = await userModel.findOne({ email: email });

  if (result) {
    console.log("E-mail already exist");
    resp.send({ message: "E-mail is already registered.", alert: false });
  } else {
    console.log("Email does not exist");
    const data = userModel(req.body);
    const save = data.save();
    resp.send({ message: "Registered Successfully!", alert: true });
  }
});

//login api

app.post("/user/login", async (req, resp) => {
  console.log(req.body);
  const { email, password } = req.body;

  const result = await userModel.findOne({ email: email });

  if (result && password === result.password) {
    const dataToSend = {
      _id: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      image: result.image,
    };
    console.log(dataToSend);
    resp.send({ message: "Login successfull", alert: true, data: dataToSend });
  } else if (password !== userModel.password) {
    resp.send({
      message: "Incorrect password",
      alert: false,
    });
  } else {
    resp.send({
      message: "E-mail is not registered",
      alert: false,
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is running at port : " + PORT);
});
