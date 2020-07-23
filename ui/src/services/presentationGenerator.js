import { default as axios } from "axios";
import downloadFile from "../helpers/downloadFile";
import { BadRequestError, ValidationError } from "../helpers/errors";

const handleError = (errorCode, errorMessage) => {
  switch (errorCode) {
    case 400:
      throw new BadRequestError(errorMessage);
    case 422:
      throw new ValidationError(errorMessage);
    default:
      throw new Error("Unexpected error");
  }
};

export default async (filename, content, backgroundColor, textColor) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/generate`,
      {
        filename,
        content,
        backgroundColor,
        textColor,
      },
      {
        responseType: "blob",
      }
    );

    const type = response.headers["content-type"];

    downloadFile(type, response.data, filename);
  } catch (error) {
    // as response is coming in Blob, we have to convert it.
    const errorCode = error.response.status;
    const errorMsg = JSON.parse(await error.response.data.text());

    handleError(errorCode, errorMsg.message);
  }
};
