interface IProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: JSX.Element;
  footer?: JSX.Element;
}

const Modal: React.FC<IProps> = ({title, showModal,  content, footer}) => {
  return (
    <>
      {showModal ? (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen py-6 bg-black bg-opacity-60">
          <div className="flex flex-col justify-between w-11/12 max-h-full bg-white border rounded shadow md:w-2/4">
            <div className="flex justify-between px-4 py-4 border-b">
              <div className="font-medium text-gray-400">
                {title}
              </div>
              {/* <div onClick={() => setShowModal(!showModal)} className="text-gray-400 hover:text-gray-500 transition-all duration-300 cursor-pointer">
                <AiOutlineClose size={20} />
              </div> */}
            </div>
            <div className="p-5 border-b">
              {content}
            </div>
            {
              footer 
              ? (
                <div className="flex p-3 overflow-auto">
                  {footer}
                </div>
              ) 
              : (<></>)
            }
            
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;