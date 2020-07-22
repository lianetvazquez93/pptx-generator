import { default as axios } from "axios";
import downloadFile from "../helpers/downloadFile";

export default async (filename, content) => {
  const response = await axios.post(
    "http://localhost:5000/generate",
    {
      filename,
      content,
    },
    {
      responseType: "blob",
    }
  );

  const type = response.headers["content-type"];

  downloadFile(type, response.data, filename);
};
