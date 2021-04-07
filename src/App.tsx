import { useEffect, useState } from "react";
import FailModal from "./Modals/failModal";
import StartModal from "./Modals/startModal";
import SucessModal from "./Modals/sucessModal";

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [ships, setShips] = useState<number[]>([]);
  const [showStartModal, setShowStartModal] = useState<boolean>(true);
  const [showSuccssModal, setShowSuccessModal] = useState<boolean>(false);
  const [showFailModal, setShowFailModal] = useState<boolean>(false);

  const max: number = 99;

  function generateShips() {
    var arr: number[] = [];

    while (arr.length < 10) {
      var r = Math.floor(Math.random() * max) + 0;
      if (!arr.includes(r)) arr.push(r);
    }

    setShips(arr);
  }

  useEffect(() => {
    const found = ships.every(v => selectedItems.includes(v))

    if(ships.length > 0 && found) {
      return setShowSuccessModal(true);
    }

    if(selectedItems.length === 30) {
      return setShowFailModal(true);
    }
  }, [selectedItems, ships])

  function clickOnItem(item: number) {
    if (!itemExist(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  }

  function itemExist(item: number): boolean {
    return selectedItems.includes(item);
  }

  function startGame() {
    generateShips();
    setSelectedItems([]);
    setShowStartModal(false);
    setShowFailModal(false);
    setShowSuccessModal(false);
  }

  return (
    <div className="h-screen w-screen text-center justify-center items-center p-5 overflow-auto">
      <div className="grid grid-flow-row grid-cols-9 h-full">
        {Array.from(Array(max).keys()).map((item) => {
          return (
            <div
            key={item}
              className={`w-full h-full border cursor-pointer ${
                itemExist(item)
                  ? ships.includes(item)
                    ? "bg-green-400"
                    : "bg-red-400"
                  : item % 2 === 0 ? "bg-transparent" : "bg-gray-200"
              }`}
              onClick={() => clickOnItem(item)}
            />
          );
        })}
      </div>
      <StartModal
        onClick={startGame}
        setShowModal={setShowStartModal}
        showModal={showStartModal}
      />
      <SucessModal
        onClick={startGame}
        setShowModal={setShowSuccessModal}
        showModal={showSuccssModal}
      />
      <FailModal
        onClick={startGame}
        setShowModal={setShowFailModal}
        showModal={showFailModal}
      />
      <p>
        Tentativas restantes: {30 - selectedItems.length}
      </p>
    </div>
  );
}

export default App;
