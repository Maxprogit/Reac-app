import { useState } from "react";


const Fruits = () => {
  const [fruit, setFruit] = useState([]);

  const [newFruit, setNewFruit] = useState("");

  const addFruit = () => {
    setFruit([...fruit, newFruit]);
    setNewFruit("")
  }

  const handleEvent = (e) => {
    setNewFruit(e.target.value);
  }

  const delFruit = (e) => {
    setFruit(fruit.filter((f) => f !== e.target.value));
  };

  return (
    <>
        <div>
            <h1>Agrega una fruta</h1>
            <input 
              type="text" 
              value={newFruit} 
              onChange={handleEvent}
            />
            <button onClick={addFruit}>Agrega una fruta</button>
            <ul>
                {fruit.map((f)=> (
                  <li key={f}>{f}
                    <span>
                      <button key={f} onClick={delFruit} value={f}>Eliminar</button>
                    </span>
                  </li>
                ))}
            </ul>
            <p>Cantidad de frutas: {fruit.length}</p>
        </div>
    </>
  )
};

export default Fruits;
