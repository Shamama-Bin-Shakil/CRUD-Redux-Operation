const mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
const Notes = mongoose.model("notes", schema);
module.exports = Notes;
