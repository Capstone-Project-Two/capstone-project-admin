"use client"
import useUser from "@/lib/hooks/swr-hooks/use-user";
import { Button, Modal, Spin } from "antd";
import { useState } from "react";

type Props = {
  id: string;
}

function UserModal({ id }: Props) {
  const { userData, isLoading } = useUser(id)
  const [isOpened, setIsOpened] = useState(false)

  const showModal = () => {
    setIsOpened(true)
  }

  const handleCancel = () => {
    setIsOpened(false)
  }

  if (isLoading) {
    return <Spin />
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        footer={[]}
        title={userData?.username} open={isOpened} onCancel={handleCancel}
      >
        <p>
          {userData?.email}
        </p>
      </Modal>
    </>
  )
}

export default UserModal