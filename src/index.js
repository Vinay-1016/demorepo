const express = require("express");
const mongoose = require("mongoose");
require("./db/mongoose");
const useRouter = require("./routers/mobile");
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/recharge-api", {
  useNewUrlParser: true,
});
const app = express();
app.use(express.json());

app.use(useRouter);
app.listen(port, () => {
  console.log("Server on", port);
});
