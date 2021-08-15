/* eslint-disable react-hooks/rules-of-hooks */
import Modal from "../index";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemoveAction: (id: string) => void;
  message: string,
  id: string
}

const ModalExclusion: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleRemoveAction,
  message,
  id
}) => {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Eliverto</h1>
    </Modal>
  );
};

export default ModalExclusion;
