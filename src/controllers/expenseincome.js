import { IncExp } from "../models/expenseincome";

export function createExpInc(req, res, next) {
  const body = req.body;
  if (body.length != 4)
    res
      .status(400)
      .json({ valid: false, message: "The number of entries are wrong" });
  if (body.amount < 0)
    res
      .status(400)
      .json({ valid: false, message: "The amount cant be a negative number." });
  const args = [body.name, body.type, body.account, body.amount];
  IncExp(args);
  res
    .status(200)
    .json({ valid: true, message: "The income/expense has been created" });
}
