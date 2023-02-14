const express = require("express");
const router = express.Router();
const Notes = require("../model/model");

// Notes Create
router.post("/post", async (req, res) => {
  const { title, description } = req.body;
  const data = Notes({
    title,
    description,
  });
  const result = await data.save();
  if (!result) {
    return res.json({ msg: "error" });
  }
  res.json({ msg: "success", data: result });
});

// Notes Get
router.get("/get", async (req, res) => {
  const data = await Notes.find();
  res.json({ data });
});

// Notes Delete
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await Notes.findByIdAndDelete(id);
  if (!data) {
    return res.json({ msg: "error" });
  }
  res.json({ msg: "success" });
});

module.exports = router;
