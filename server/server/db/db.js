const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(process.env.URI, { useNewUrlParser : true, useUnifiedTopology : true})
    .then((res) => console.log("> Connected"))
    .catch((err) => console.log("DB CONNECTION FAILED "));
};

module.exports = connectDB