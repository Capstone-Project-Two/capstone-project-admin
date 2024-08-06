export const isOkStatusCode = (statusCode: number) => {
  return statusCode >= 200 && statusCode <= 299;
};
