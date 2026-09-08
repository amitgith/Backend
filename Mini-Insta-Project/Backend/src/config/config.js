import dotenv from "dotenv";
dotenv.config();
const config = {
  MONGO_URI: process.env.MONGO_URI,
  IK_URL: process.env.IK_URL,
  IK_PUBLIC_KEY: process.env.IK_PUBLIC_KEY,
  IK_PRIVATE_KEY: process.env.IK_PRIVATE_KEY,
};
export default config;
