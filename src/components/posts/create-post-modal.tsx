"use client"
import { createPost } from "@/actions/post-action";
import { CreatePostDto } from "@/service/api-types";
import { Button, Input, Modal } from "antd";
import { Form, Formik, FormikState } from "formik";
import { Sticker } from "lucide-react";
import { useState, useTransition } from "react";

type Props = {}

function CreatePostModal({ }: Props) {
  const initialValues: CreatePostDto = {
    body: '',
    patient: '',
    postPhotos: [],
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition()
  const [files, setFiles] = useState<FileList | null>()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFiles(e.target.files)
  }

  const onFinish = async (values: CreatePostDto, resetForm: (nextState?: Partial<FormikState<CreatePostDto>>) => void) => {
    const formData = new FormData()
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append('postPhotos', files[i])
      }
    }

    formData.append('patient', '63686861790123456789abcd')
    formData.append('body', values.body)

    startTransition(async () => {
      await createPost(formData).catch(e => {
        console.log("🚀 ~ awaitcreatePost ~ e:", e)
      }).then(() => {
        resetForm()
        setFiles(null)
      })
    })
  };

  return (
    <>
      <Button type="primary" onClick={() => {
        setIsModalOpen(true);
      }} className="flex flex-col rounded-md items-center justify-center">
        Create Post
      </Button>
      <Modal centered title={(
        <div className="mb-4 flex gap-x-4">
          <Sticker size={50} />
          <div>
            <h1 className="text-xl font-semibold">
              Create a new Post
            </h1>
            <p className="text-sm">Enter therapist info</p>
          </div>
        </div>
      )} open={isModalOpen} footer={[]}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            await onFinish(values, resetForm)
          }}
        >
          {({ handleChange }) => {
            return (
              <Form className="w-full flex flex-col gap-4" encType="multipart/form-data" method="POST">

                <div>
                  <label
                    htmlFor="body"
                    className="block mb-2 text-sm font-medium "
                  >
                    First name
                    <span className="text-red-500 text-sm ml-1">*</span>
                  </label>
                  <Input name="body" onChange={handleChange} placeholder="Write something here..." />
                </div>

                <div>
                  <label
                    htmlFor="postPhotos"
                    className="block mb-2 text-sm font-medium "
                  >
                    Post photos
                    <span className="text-red-500 text-sm ml-1">*</span>
                  </label>
                  <input multiple name="postPhotos" type="file" onChange={e => handleFileChange(e)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                    type="default" className="danger-button" htmlType="submit">
                    Cancel
                  </Button>
                  <Button disabled={isPending} type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </Modal>
    </>
  )
}

export default CreatePostModal
