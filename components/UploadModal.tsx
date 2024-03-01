"use client"

import useUploadModal from "@/hooks/useOploadModal";
import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
            //Reset the from
        }
    }

    return (
        <Modal
        title="Upload modal title"
        description="Upload modal description"
        isOpen={uploadModal.isOpen}
        onChange={() => {}}
        >
            Upload Content
        </Modal>
    );
}

export default UploadModal;