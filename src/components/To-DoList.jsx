/**
 * React Practice Lab - Reto [3]: To-Do List
 * Autor: MaxProGit
 * Fecha: [10/12/2025]
 * Versión del componente: [0.3.0]
 * Descripción: Lista de tareas con estados dinámicos, control de completado,
 * validación de duplicados y contadores derivados.
 * Objetivo técnico: Practicar estructuras de datos, mutación inmutable,
 * estados derivados, y separación de acciones (completar vs eliminar).
 */


import { useState } from "react";

const ToDo = () => {
    const [lists, setList] = useState({title: ""});

    const [task, setTask] = useState([]);

    const [count, setCounter] = useState(1)



    const addTask = () => {
        //Objeto independiente para cada tarea
        const newTask = {
            id: count,
            title: lists.title,
            state: "pending",
        }
        //Validacion de campos no vacios
        if(lists.title === "") return;
        //Agreamos ID autoincremental
        setCounter(count + 1)
    
        //Ciclo para buscar tareas y validar si no hay tareas repetidas
        let repeatedTask = false
        for(let i = 0; i < task.length; i++) {
            if(task[i].title === lists.title) {
                repeatedTask = true;
                break;
            };
        };

        if(repeatedTask) {
            alert("No puedes tener dos tareas repetidas");
            return;
        };
        //configuracion de los estados
        setTask([...task, newTask]);
        setList({title: ""});
    }
    const handleEvent = (e) => {
        setList({...lists, [e.target.name]: e.target.value});
    }
    const taskCompleted = (id) => {
        //creamos una copia de las tareas
        const updated = [...task];
        //buscar, modificar y setear el nuevo estado por id
        for(let i = 0; i < updated.length; i++) {
            if(updated[i].id === id) {
                updated[i].state = "completed";
                break;
            }
        }
        setTask(updated) 
    };
    //Eliminacion de tareas por id
    const delTask = (id) => {
        setTask(task.filter((t) => t.id !== id));
    };

    return (
        <>
            <div className="">
                <h1 className="font-serif ...">To-Do List</h1>

                <input name="title" type="text" placeholder="Title" onChange={handleEvent} value={lists.title}/>
                

                <ul>
                    {task.map((t) => (
                        <li key={t.id} value={t}> 
                            <span>num</span>: {t.id} - {t.title} - {t.state}
                            <span>
                                <button onClick={() => delTask(t.id)}>Delete task</button>
                                <button onClick={() => taskCompleted(t.id)}>Complete</button>
                            </span>
                        </li>
                    ))}
                </ul>
                <button onClick={addTask}>Add task</button>
            </div>
        </>
    )

}

export default ToDo;

