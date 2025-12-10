/**
 * React Practice Lab - Reto [2]: User Register
 * Autor: MaxProGit
 * Fecha: [26/11/2025]
 * Versión del componente: [1.0.0]
 * 
 * Descripción:
 * Formulario de registro de usuarios que permite añadir, mostrar y eliminar usuarios.
 * Valida que no existan campos vacíos, que la edad sea mayor que cero 
 * y que el nombre o el email no estén repetidos.
 * 
 * Objetivo técnico:
 * Practicar manejo de formularios controlados, validación de datos,
 * uso de estado con useState, renderizado de listas mediante map
 * y manipulación de datos con filter.
 */


import { useState } from "react";

const UserRegister = () => {
    const [form, setForm] = useState({name: "", email: "", age: ""});

    const [user, setUser] = useState([]);
    

    const addUser = () => {
        if(form.name === "" || form.email === "" || form.age <= 0) return; // Validacion de inputs

        let repeatedMail = false;
        for(let i = 0; i < user.length; i++) {
            if(user[i].email === form.email || user[i].name === form.name) {
                repeatedMail = true;
                break;
            }
        }
        if(repeatedMail) {
                alert("Nombre o email en uso");
                return;
            }
        setUser([...user, form]);
        setForm({name: "", email: "", age: ""}); // Limpiar el form
    };

    
    //Manejador de eventos para todos los inputs
    const handleEvent = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };


    const deleteUser = (e) => {
        const index = Number(e.target.value);
        setUser(user.filter((_, i) => i !== index));
    };

    return (
        <>
            <div>
                <h1>User Register</h1>
                
                    <input name="name" type="text" placeholder="name" onChange={handleEvent} value={form.name}/>
                    <input name="email" type="email" placeholder="email" onChange={handleEvent} value={form.email}/> 
                    <input name="age" type="number" placeholder="age" onChange={handleEvent} value={form.age}/>
                    
                    <ul>
                        {user.map((u, i) => (
                            <li key={i} value={u}>
                                {u.name} - {u.email} - {u.age}
                                <span>
                                    <button onClick={deleteUser} value={i}>Delete user</button>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <button onClick={addUser}>Add user</button>
                
            </div>
        </>
    );

    
};

export default UserRegister;