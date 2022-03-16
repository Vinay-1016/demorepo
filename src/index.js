const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const useRouter = require("./routers/mobile");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(useRouter);

app.listen(port, () => {
  console.log("Server on", port);
});
