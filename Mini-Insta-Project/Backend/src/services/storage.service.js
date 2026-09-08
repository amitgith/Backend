import config from "../config/config.js";
import Imagekit from "@imagekit/nodejs";
const storageInstance = new Imagekit({
  URLEndpoint: config.IK_URL,
  publicKey: config.IK_PUBLIC_KEY,
  privateKey: config.IK_PRIVATE_KEY,
});
export const sendFiles = async (file, fileName) => {
  return await storageInstance.files.upload({
    file,
    fileName,
    folder: "Mini-Insta",
  });
};
