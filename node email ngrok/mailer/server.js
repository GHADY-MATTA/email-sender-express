require("dotenv").config();
const express = require("express");
const handleEmail = require("./handlers/handleEmail");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/send", handleEmail);

app.listen(PORT, () => {
  console.log(`✅ Listening at http://localhost:${PORT}`);
});
