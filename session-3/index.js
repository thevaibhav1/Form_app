const express = require("express");
const userRouter = require("./routes/user.routes");
const users = require("./UserData.json");
const app = express();
const PORT = 8082;

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Started on Port ${PORT}`);
  const uuid = users.data.map((user) => user.login.uuid);
  console.log(uuid);
});
