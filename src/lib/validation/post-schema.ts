import * as Yup from "yup";

export const postSchema = Yup.object().shape(
  {
    body: Yup.string().when(["postPhotos"], {
      is: (postPhotos: []) => postPhotos.length === 0,
      then: (schema) =>
        schema
          .test(_ => true)
          .required("Body is required"),
    }),
    postPhotos: Yup.mixed().when(["body"], {
      is: (body: string) => !body,
      then: (schema) => schema.required(),
    }),
  },
  [
    ["body", "postPhotos"],
    ["postPhotos", "body"],
  ]
);
