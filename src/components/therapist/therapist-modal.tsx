"use client";
import useTherapist from "@/lib/hooks/swr-hooks/use-therapist";
import { Button, Modal, Spin } from "antd";
import Image from "next/image";
import { useState } from "react";
import userProfileIcon from "@/public/images/Doctor_profile_icon.png";

type Props = {
  id: string;
};

function TherapistModal({ id }: Props) {
  const { therapistData, isLoading } = useTherapist(id);
  const [isOpened, setIsOpened] = useState(false);
  

  const showModal = () => {
    setIsOpened(true);
  };

  const handleCancel = () => {
    setIsOpened(false);
  };

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        View
      </Button>
      <Modal
        footer={[]}
        title={therapistData?.username}
        open={isOpened}
        onCancel={handleCancel}
      >
        <Image src={userProfileIcon} alt="Therapist Profile Icon" width={150} />
        <div className="grid grid-cols-2">
          <div>
            <label>First name</label>
            <p>{therapistData?.first_name}</p>
          </div>
          <div>
            <label>Last name</label>
            <p>{therapistData?.last_name}</p>
          </div>
          <div>
            <label>Gender</label>
            <p>{therapistData?.gender}</p>
          </div>
          <div>
            <label>Username</label>
            <p>{therapistData?.username}</p>
          </div>
          <div>
            <label>Email</label>
            <p>{therapistData?.email}</p>
          </div>
          <div>
            <label>Phone Number</label>
            <p>{therapistData?.phone_number}</p>
          </div>
          <div>
            <label>Bio</label>
            <p>{therapistData?.bio}</p>
          </div>
          <div>
            <label>Role</label>
            <p>{therapistData?.roles}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default TherapistModal;
