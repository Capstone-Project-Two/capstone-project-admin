export const imageReqHelper = (filename: string) => {
  return process.env.NEXT_PUBLIC_API_ROUTE + "/postPhotos/" + filename;
};
