import { useState } from "react";

const Test = () => {
    const [filter, setFilter] = useState("");


const handleEvent = (e) => {
    setFilter(e.target.value);
};

return (
    <>
        <div>
            <h1>Haciendo mis primeras pruebas</h1>
            <input type="text" value={filter} onChange={handleEvent} placeholder="Escribe aqui vato"/>
            <p>Texto ingresado: {filter}</p>
            <p>Cantidad de palabras: {filter.length}</p>
        </div>
    </>
)};



export default Test;