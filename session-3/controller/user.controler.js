const users = require("../UserData.json");

const getUser = (req, res) => {
  res.send(users);
};

const getUserById = (req, res) => {
  const { uuid } = req.params;
  const id = users.data.find((user) => user.login.uuid === uuid);
  if (id) return res.send(id);
  res.status(404).send({ message: "User Not Found" });
};

module.exports = { getUser, getUserById };
