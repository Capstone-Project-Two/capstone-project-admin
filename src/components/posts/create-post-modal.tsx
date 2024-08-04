"use client"
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
    console.log(e.target.files)
    setFiles(e.target.files)
  }

  const handleCreatePost = async (values: CreatePostDto) => {
    console.log(values)
    try {

    } catch (e) {
      console.log(e)
      
    }
  }

  const onFinish = async (values: CreatePostDto) => {
    console.log(values.postPhotos)
    const formData = new FormData()
    const fileList: Array<any> = []
    if(files) {
      for(let i = 0;i<files.length; i ++) {
        console.log(files[i])
        fileList.push(files[i])
      }
    }

    console.log(fileList)
    formData.append('body', values.body)
    formData.append('patient', '63686861790123456789abcd')
    
    // await fetch(`${BASE_API_URL}${API_ROUTE.BASE_POSTS}`, {
    //   method: "post",
    //   body: formData,
    //   headers: {
    //     'Content-type': "application/json"
    //   }
    // }).then(e => {
    //   console.log(e)
    // }).catch(e => {
    //   console.log(e)
    // })
    console.log(formData.get('body'))
    console.log(formData.get('postPhotos'))
    startTransition(async () => {
      // await handleCreatePost(formData).catch((e: TErrorType) => {
      //   console.log(e)
      // })
      // await createPost({ body: values.body, patient: '63686861790123456789abcd', postPhotos: values.postPhotos }).then(() => {
      //   handleCancel()
      // }).catch(e => {
      //   console.log("🚀 ~ awaitcreatePost ~ e:", e)
      // })
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
            await onFinish(values).then(() => {

            }).catch(e => {
              console.log(e)
            })
          }}
        >
          {({ setFieldValue }) => {
            return (
              <Form className="flex flex-col ">
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
