const db = require("../db/models/index");
const User = db.User;
const Award = db.Award;
const Milestone = db.Milestone;
const speakeasy = require("speakeasy");

export default async function newuser(req, res) {
  const { method, body } = req;
  const id = req.body.id;
  // const { nick_name, email, password } = body;

  switch (method) {
    case "GET":
      {
        const users = await User.findAll();

        res.send(users);
      }
      break;

    case "PUT":
      {
        const user = await User.findByPk(id);

        user.address = body.address;

        user.save();

        res.send("Se ha actualizado el address");
      }
      break;

    default:
      res.send("Otro método");
      break;
  }
}
