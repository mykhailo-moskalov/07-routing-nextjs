"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "./NotePreview.client";
import { useRouter } from "next/navigation";

const ModalPreview = () => {
  const router = useRouter();
  const close = () => router.back();

  return (
    <Modal onClose={close}>
      <NotePreview onClick={close} />
    </Modal>
  );
};

export default ModalPreview;
