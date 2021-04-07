import Modal from '../components/modal';
import Button from '../components/button';

interface Props {
  onClick: () => any;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FailModal: React.FC<Props> = ({onClick, showModal, setShowModal}) => {
  return (
    <Modal
      title="Battle Ship"
      content={
        <div>
          <p>Que pena, você não conseguiu finalizar, mas você pode tentar novamente</p>
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

export default FailModal;
