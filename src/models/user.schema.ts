import mongoose, { Model, Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  address: String,
  email: {
    type: String,
    required: true,
  },
  password: String,
  rePassword: String,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = mongoose.models.User || model("User", UserSchema);
