const db = require("../../db/models/index");
const User = db.User;
const Award = db.Award;
const Milestone = db.Milestone;

export default async function milestones(req, res) {
  const { method, body } = req;
  const id = body.user;
  switch (method) {
    case "POST":
      // req.body=user.id
      const milestones = await Milestone.findAll({
        attributes: ["id", "name", "campaignId", "tokenAmount"],
      });
      let completed = await Award.findAll({
        attributes: ["milestoneId"],
        where: { winnerId: id },
      });
      completed = completed.map((elemento) => elemento.dataValues.milestoneId);
      const userCompleted = milestones.map((element) => {
        return {
          ...element.dataValues,
          completed: completed.includes(element.id),
        };
      });

      res.status(200).send(userCompleted);
      break;

    default:
      break;
  }
}
