import { motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function DeletePopUp({ isOpen, onClose, onConfirm }: PopupProps) {
    const popupRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, handleClickOutside]); // ✅ Dependencies are stable

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1000000]">
            <motion.div
                ref={popupRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white flex flex-col item p-6 rounded-2xl shadow-xl w-80 text-center"
            >
                <svg className="mx-auto mb-2" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.1308 9.96094L5.89515 31.2597C6.02159 32.7957 7.32992 34 8.87174 34H25.1283C26.6701 34 27.9785 32.7957 28.1049 31.2597L29.8692 9.96094H4.1308ZM12.0186 30.0156C11.4972 30.0156 11.0585 29.61 11.0254 29.0818L10.0293 13.0114C9.99527 12.4619 10.4126 11.9891 10.9612 11.9551C11.5303 11.9151 11.9826 12.3374 12.0176 12.8869L13.0137 28.9572C13.049 29.5263 12.5987 30.0156 12.0186 30.0156ZM17.9961 29.0195C17.9961 29.5701 17.5506 30.0156 17 30.0156C16.4494 30.0156 16.0039 29.5701 16.0039 29.0195V12.9492C16.0039 12.3986 16.4494 11.9531 17 11.9531C17.5506 11.9531 17.9961 12.3986 17.9961 12.9492V29.0195ZM23.9707 13.0115L22.9746 29.0818C22.9418 29.6047 22.506 30.0405 21.9182 30.0137C21.3695 29.9796 20.9522 29.5069 20.9863 28.9573L21.9824 12.887C22.0165 12.3374 22.498 11.9376 23.0388 11.9551C23.5874 11.9892 24.0047 12.4619 23.9707 13.0115ZM29.9492 3.98438H23.9727V2.98828C23.9727 1.34048 22.6322 0 20.9844 0H13.0156C11.3678 0 10.0273 1.34048 10.0273 2.98828V3.98438H4.05078C2.9505 3.98438 2.05859 4.87628 2.05859 5.97656C2.05859 7.07671 2.9505 7.96875 4.05078 7.96875H29.9492C31.0495 7.96875 31.9414 7.07671 31.9414 5.97656C31.9414 4.87628 31.0495 3.98438 29.9492 3.98438ZM21.9805 3.98438H12.0195V2.98828C12.0195 2.4387 12.466 1.99219 13.0156 1.99219H20.9844C21.534 1.99219 21.9805 2.4387 21.9805 2.98828V3.98438Z" fill="#ED0B4F" />
                </svg>
                <h2 className="text-[16px] font-bold text-[#1F1F1F]">Confirm Details</h2>
                <p className="text-[12px] font-medium text-[#525252] my-2">
                    Are You sure you want to delete this item?
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 w-full text-[#ED0B4F] border-[#ED0B4F] border-[1px] rounded-[14px] bg-[#ED0B4F]/[14%]"
                    >
                        yes
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
