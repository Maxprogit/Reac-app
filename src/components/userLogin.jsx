/**
 * React Practice Lab - Reto [4]: User Login
 * Autor: MaxProGit
 * Fecha: [12/12/2025]
 * Versión del componente: [0.4.0]
 * Descripción: Formulario de inicio de sesión que valida usuarios registrados,
 * verifica credenciales, muestra errores específicos y controla el estado de
 * autenticación de manera local dentro del componente.
 * Objetivo técnico: Practicar validación de formularios, manejo de múltiples
 * campos controlados, búsqueda de registros, comparación segura de datos,
 * estados derivados (usuario autenticado) y limpieza del formulario tras un
 * inicio de sesión exitoso.
 */

import { useState } from "react";

const UserLogin = () => {
 
    const [userLogin, setUserLogin] = useState({email: "", password: ""});

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [error, setError] = useState("")



    //Manejador de eventos multiples
    const handleEventLogin = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value});
    }

    const validateLogin = () => {

        const users = {
            email: "probando@gmail.com",
            password: "1234"
        }

        if(userLogin.email === "" || userLogin.password === "")
             {
                setError("Tienes campos vacios");
                return;
             }
        if(users.email !== userLogin.email) {
            setError("No existe este correo");
            return;
        }
        if(users.password !== userLogin.password) {
            setError("La contraseña es incorrecta");
            return;
        }

        setError("");
        setIsAuthenticated(true);
    }
    


    return (

        <>

          {isAuthenticated ? (
            <h2>Bienvenido {userLogin.email}</h2>
          ) : (
            <div>
                <h1>User Login</h1>
                <input name="email" type="email" placeholder="email" onChange={handleEventLogin} value={userLogin.email}/>
                <input name="password" type="password" placeholder="password" onChange={handleEventLogin} value={userLogin.password}/>
                <button onClick={validateLogin}>Login</button>
                {/* manejador de errores */}
                {error && <p class="underline decoration-pink-500">{error}</p>}
            </div>
          )}
        </>
    )
}

export default UserLogin;