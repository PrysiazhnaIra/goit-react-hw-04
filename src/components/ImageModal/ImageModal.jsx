import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    padding: 0,
    border: "none",
    overflow: "hidden",
  },
};

export default function ImageModal({
  isOpen,
  onClose,
  bigImage,
  imageDescription,
}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <img src={bigImage} alt={imageDescription || "Image"} />
      </Modal>
    </div>
  );
}
