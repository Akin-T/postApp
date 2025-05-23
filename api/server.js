const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const billRoute = require("./routes/bills");
const authRoute = require("./routes/auth");

dotenv.config();

console.log(process.env.MONGO_URI);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("baglanmadi", error);
  }
};


app.use(express.json());
app.use(cors());

app.use(express.json());
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("api/auth", authRoute);

app.listen(port, async () => {
  await connect();
  console.log(`Example app listening on port ${port}`);
});
