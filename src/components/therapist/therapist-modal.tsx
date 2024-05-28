"use client"
import useTherapist from "@/lib/hooks/swr-hooks/use-therapist";
import { Button, Modal, Spin } from "antd";
import Image from "next/image";
import { useState } from "react";
import userProfileIcon from '@/public/images/Doctor_profile_icon.png'

type Props = {
  id: string;
}

function TherapistModal({ id }: Props) {
  const { therapistData, isLoading } = useTherapist(id)
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
        View
      </Button>
      <Modal
        footer={[]}
        title={therapistData?.username} open={isOpened}
        onCancel={handleCancel}
      >
        <Image src={userProfileIcon} alt="Therapist Profile Icon" width={150}/>
        <p>{therapistData._id}</p>
        <p>{therapistData?.email}</p>
        <p>{therapistData?.username}</p>
        <p>{therapistData?.phone_number}</p>
        <p>{therapistData?.gender}</p>
        <p>{therapistData?.roles}</p>
      </Modal>
    </>
  )
}

export default TherapistModal