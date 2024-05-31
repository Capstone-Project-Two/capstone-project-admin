"use client"
import { createPost } from "@/actions/post-action";
import { CreatePostDto } from "@/service/api-types";
import { Button, Form, Modal, Input, FormProps } from "antd";
import { useState, useTransition } from "react";

type Props = {}

type FieldType = CreatePostDto

function CreatePostModal({ }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    startTransition(async () => {
      await createPost({ body: values.body, patient: '63686861790123456789abcd' }).then(res => {
        console.log(res)
      }).catch(e => {
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
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Content"
            name="body"
            rules={[{ required: true, message: 'Please input content' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button disabled={isPending} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default CreatePostModal