import React, { useState } from "react";

const ItemCount = ({ datas, func }) => {
  const [counter, setCounter] = useState(1);
  let stock = datas;

  const handleAdd2 = () => {
    if (stock - 10 > counter) {
      setCounter(counter + 10);
    }
  };
  const handleAdd = () => {
    if (stock > counter) {
      setCounter(counter + 1);
    }
  };
  const handleReset = () => {
    setCounter(1);
  };
  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleSubstract2 = () => {
    if (counter > 10) {
      setCounter(counter - 10);
    }
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>El stock disponible es de {stock}</h2>
      <h2 onChange={func(counter)}> {counter} </h2>
      <button onClick={handleAdd2}>+10</button>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleSubstract2}>-10</button>
    </>
  );
};

export default ItemCount;
