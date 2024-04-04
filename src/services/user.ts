import { UserModel } from "@/models/user.schema";
import jwt from "jsonwebtoken";

export const loginService = async (email: string, password: string) => {
  if (email == "admin@gmail.com" && password == "admin") {
    const userInfo = {
      email: email,
      name: "John Doe",
    };
    const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
      expiresIn: "1h",
    });
    return newToken;
  } else {
    throw new Error("Invalid credentials");
  }
};

export const createUser = async (
  firstName: string,
  email: string,
  address: string,
  password: string,
  rePassword: string
) => {
  const createUser = UserModel.create({
    firstName,
    email,
    address,
    password,
    rePassword,
  });
  return createUser;
};
