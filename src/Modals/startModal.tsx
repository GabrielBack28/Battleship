import Modal from '../components/modal';
import Button from '../components/button';

interface PropsColorDescription extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: string;
}

const ColorDescription: React.FC<PropsColorDescription> = ({description, ...props}) => {
  return (
    <div className="flex flex-row items-center">
      <div {...props} className={`border w-5 mr-2 h-5 rounded-full ${props.className}`} />
      <p>{description}</p>
    </div>
  )
}

interface Props {
  onClick: () => any;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const StartModal: React.FC<Props> = ({onClick, showModal, setShowModal}) => {
  return (
    <Modal
      title="Battle Ship"
      content={
        <div>
          <p>Olá, bem vindo ao Batalha Naval</p>
          <p>
            Existem algumas coisas que quero lhe explicar antes de você iniciar
            o game
          </p>
          <div className="m-5 border p-3">
            <p className="mb-2">Esses são status dos quadrados</p>
            <ColorDescription
              description="Ainda não selecionado"
              className="bg-transparent"
            />
            <ColorDescription
              description="Ainda não selecionado"
              className="bg-gray-200"
            />
            <ColorDescription
              description="Você achou um barco"
              className="bg-green-400"
            />
            <ColorDescription
              description="Você ainda não achou um barco"
              className="bg-red-400"
            />
          </div>
          <p>Obs: Você deve localizar 10 barcos e você tem 30 tentativas</p>
          <p className="font-bold">Boa sorte!!!</p>
        </div>
      }
      footer={
        <div className="h-full w-full">
          <Button
            label="Iniciar"
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

export default StartModal;
