import { connect } from "@/helper/db";
import { createUser } from "@/services/user";
import { NextApiResponse, NextApiRequest } from "next";

connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body?.firstName || !req.body?.email || !req.body?.address) {
    res.status(400).json("firstName, email, address is missing");
  }
  const { firstName, email, address, password, rePassword } = req.body;
  if (req.method === "POST") {
  }
  try {
    const user = await createUser(
      firstName,
      email,
      address,
      password,
      rePassword
    );
    res.status(200).json({ message: "succesfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};
export default handler;
