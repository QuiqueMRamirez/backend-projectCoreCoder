import { Bank } from "../models/bank";

export function createBank(req, res, next) {
  const body = req.body;
  if (body.length != 5)
    res
      .status(400)
      .json({ valid: false, message: "The number of entries are wrong." });
  const args = [body.account, body.type, body.coin, body.bankname, body.name];
  Bank.create(args);
  res.status(200).json({ valid: true, message: "The bank has been created" });
}
