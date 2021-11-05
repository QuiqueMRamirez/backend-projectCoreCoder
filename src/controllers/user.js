import User from "../models/user";

export function createUser(req, res, next) {
  const body = req.body;
  if(body.length != 7) res.status(400).json({valid:false, message:'The number of entries are wrong.'}) 
  const args = [
    body.firstname,
    body.lastname,
    body.email,
    body.celular,
    body.gender,
    body.city,
    body.password,
  ];
  User.create(args);
  res.status(200).json({ valid: true, message: "The user has been created" });
}
