const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mernTask", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const DataSchema = new mongoose.Schema({
  name: String,
  message: String,
});

const DataModel = mongoose.model("Data", DataSchema);

// Sample API Route
app.get("/api/data", async (req, res) => {
  const data = await DataModel.find();
  res.json(data);
});

// Insert Dummy Data (run once)
app.get("/api/seed", async (req, res) => {
  await DataModel.create({ name: "Jay", message: "Hello MERN" });
  res.send("Seeded");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
