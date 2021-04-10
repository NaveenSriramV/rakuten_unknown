const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes/route");

require("dotenv").config({ path: ".env" });

mongoose.connect(process.env.CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error("DB connect error", err.message);
});
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.static("uploads"));
app.use(cors());
app.use("/", routes);
app.listen(port, () => {
  console.log("server is running in port", port);
});
