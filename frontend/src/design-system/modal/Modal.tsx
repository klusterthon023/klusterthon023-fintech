/** @jsxImportSource @emotion/react */
import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ClassNames from "classnames";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  closeModalOnlyFromTheContent?: boolean;
}

export default function Modal(props: ModalProps) {
  const {
    isModalOpen,
    onClose,
    children,
    closeModalOnlyFromTheContent = true,
    title,
    description,
    showCloseButton = true,
  } = props;

  const closeModal = (event: any) => {
    if (closeModalOnlyFromTheContent) return;

    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`relative bg-white !max-w-[700px] !max-h-[70vh] overflow-y-scroll max-sm:!w-[90%] rounded-lg z-80 max-sm:p-4 p-9 `}
          >
            <div
              className={ClassNames("flex justify-between items-center", {
                ["justify-end"]: !title,
                ["justify-start"]: !showCloseButton,
                ["hidden"]: !title && !showCloseButton,
              })}
            >
              {title && (
                <Typography variant="body1" fontWeight={600}>
                  {title}
                </Typography>
              )}
              <div
                onClick={onClose}
                className="p-2 rounded-[6px] h-9 w-9 flex justify-center items-center bg-color-gray cursor-pointer"
              >
                <FontAwesomeIcon icon={faClose} fontSize={20} />
              </div>
            </div>
            {description && (
              <div className="my-5">
                <Typography variant="body4" color="gray.300">
                  {description}
                </Typography>
              </div>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type { ModalProps };
