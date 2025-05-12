const Bill = require("../models/Bill");
const express = require("express");
const router = express.Router();

//GET ALL BİLL
router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    console.log(error);
  }
});


//CREATE
router.post("/add-bill", async (req, res) => {
  try {
    console.log(req.body);
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Item added successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
