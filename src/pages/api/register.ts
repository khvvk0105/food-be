import { connect } from "@/helper/db";
import { createUser } from "@/services/user";
import { NextApiResponse, NextApiRequest } from "next";
connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, age } = req.body;
  if (req.method === "POST") {
  }
  try {
    const user = await createUser(firstName, lastName, email, 21);
    res.status(200).json({ message: "succesfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};
export default handler;
