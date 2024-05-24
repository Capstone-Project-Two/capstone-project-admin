"use client"
import { Button, Modal } from "antd"
import { useState } from "react"

type Props = {}

function UserModal({ }: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const showModal = () => {
    setIsOpened(true)
  }

  const handleCancel = () => {
    setIsOpened(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isOpened} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default UserModal