/**
 * React Practice Lab - Reto [1]: Inventory
 * Autor: MaxProGit
 * Fecha: [13/11/2025]
 * Versión del componente: [1.0.0]
 * Descripción: Muestra una lista de productos, el total de productos, 
 * se pueden eliminar de uno por uno o todos juntos.
 * Objetivo técnico: Practicar manejo de estado (useState), renderizado dinámico (map), manipulación de datos (filter), y control de eventos.
 */



import { useState } from "react";

const Inventory = () => {
    const [list, setList] = useState([]);

    const [products, setPorudutcs] = useState("");

    const addProduct = () => {
        if(!products.trim()) return;
        if(list.includes(products)) return;
        setList([...list, products]);
        setPorudutcs("")
    };

    const handleEvent = (e) => {
        setPorudutcs(e.target.value);
    };


    const delProduct = (e) => {
        setList(list.filter((l) => l !== e.target.value));
    };

    const delAllProducts = () => {
        setList([]);
    }


    return (
        <>
            <div>
                <h1>Lista de productos</h1>
                <input type="text" onChange={handleEvent} value={products}/>
                <ul>
                    {list.map((l)=> (
                        <li key={l}>{l}
                            <span>
                                <button onClick={delProduct} value={l}>Eliminar</button>
                            </span>
                        </li>
                    ))}
                </ul>
                <button onClick={addProduct}>agregar producto</button>
                <p>Productos agregados: {list.length}</p>

                <button onClick={delAllProducts}>Vaciar lista</button>
            </div>
        </>
    )
};

export default Inventory;