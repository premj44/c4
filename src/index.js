const express = require("express");
const connection = require("../config/db");
const cors = require("cors");
require("dotenv").config();
const todoRouter = require("../routes/Todos.routes");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/todo", todoRouter);

app.get("/",(req,res)=>{
  res.send("Welcome!")
})

app.listen(PORT, async () => {
  try {
    await connection();
    console.log(`connected at : http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
