"use client"
import { createPost } from "@/actions/post-action";
import { CreatePostDto } from "@/service/api-types";
import { Button, Modal } from "antd";
import { Field, Form, Formik } from "formik";
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFiles(e.target.files)
  }

  const onFinish = async (values: CreatePostDto) => {
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
      })
    })
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="flex flex-col rounded-md items-center justify-center">
        Create Post
      </Button>
      <Modal title="Create a Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await onFinish(values)
          }}
        >
          {({ }) => {
            return (
              <Form className="flex flex-col " encType="multipart/form-data" method="POST">
                <div>
                  <label htmlFor="body">Body</label>
                  <Field className="border" name="body" />
                </div>

                <div>
                  <label htmlFor="postPhotos">Post photos</label>
                  <input multiple name="postPhotos" type="file" onChange={e => handleFileChange(e)} />
                </div>

                <button disabled={isPending} type="submit">
                  Submit
                </button>
              </Form>
            )
          }}
        </Formik>
      </Modal>
    </>
  )
}

export default CreatePostModal
