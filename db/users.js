const { v4: uuid } = require("uuid");

const userdata = {
  users: [
    {
      id: uuid(),
      username: "Nitingupta",
      password: "pg12345",
      emailId: "ng@gmail.com",
    },
    {
      id: uuid(),
      username: "saurabhjaiswal",
      password: "sj12345",
      emailId: "sj@gmail.com",
    },
  ],
};

module.exports = userdata;
