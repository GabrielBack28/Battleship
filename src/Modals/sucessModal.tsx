import Modal from '../components/modal';
import Button from '../components/button';

interface Props {
  onClick: () => any;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SucessModal: React.FC<Props> = ({onClick, showModal, setShowModal}) => {
  return (
    <Modal
      title="Battle Ship"
      content={
        <div>
          <p>Parabéns você conseguiu achar todos os barcos</p>
        </div>
      }
      footer={
        <div className="h-full w-full">
          <Button
            label="Iniciar Novamente"
            className="w-full justify-center font-bold text-lg"
            onClick={onClick}
          />
        </div>
      }
      showModal={showModal}
      setShowModal={setShowModal}
    />
  );
};

export default SucessModal;
