import { UserModel } from "@/models/user.schema";

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  age: number
) => {
  const createUser = UserModel.create({ firstName, lastName, email, age });
  return createUser;
};
