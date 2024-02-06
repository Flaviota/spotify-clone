import { create } from "zustand";

interface useUploadModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onclose: () => void;
} ;

const useUploadModal = create<useUploadModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onclose: () => set({ isOpen: false }),
}));

export default useUploadModal;