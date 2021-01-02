const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/todoRoutes");

dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Home Page </h1>");
});
// app.get("*", (req, res) => {
//   res.send("<h1>Dashboard Page</h1>");
// });

app.use("/todoList", taskRoutes);

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err, connection) => {
    if (err) {
      console.log(err);
    }
    console.log("Successfully connected to database");
  }
);
app.listen(process.env.PORT, console.log(`App started on ${process.env.PORT}`));
