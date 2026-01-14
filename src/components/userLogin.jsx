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
import Dashboard from "./Dashboard";

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

    const onLogout = () => {
        setIsAuthenticated(false);
        setUserLogin({email: "", password: ""});
    }
    


    return (

        <>

          {isAuthenticated ? (
            <Dashboard email = {userLogin.email} onLogout={onLogout}/>
          ) : (
            <div className="border-4 border-indigo-500/50">
                <h1 className="font-serif ...">User Login</h1>
                <input className="border-2 border-gray-700 focus:border-pink-600 ..." name="email" type="email" placeholder="email" onChange={handleEventLogin} value={userLogin.email}/>
                <input className="border-2 border-gray-700 focus:border-pink-600" name="password" type="password" placeholder="password" onChange={handleEventLogin} value={userLogin.password}/>
                <button className="relative m-0 h-auto cursor-pointer border-0 bg-transparent p-0 
                text-transparent uppercase tracking-[3px] 
                font-[Arial] text-[2em]
                [-webkit-text-stroke:1px_rgba(255,255,255,0.6)]
                group"
                onClick={validateLogin}>Login

            <span
                data-text="Button"
                className="absolute inset-0 box-border w-0 overflow-hidden
                    text-[#37FF8B]
                    border-r-[6px] border-[#37FF8B]
                    transition-all duration-500
                    [-webkit-text-stroke:1px_#37FF8B]
                    group-hover:w-full
                    group-hover:drop-shadow-[0_0_23px_#37FF8B]"
            >
            Login
            </span>

          </button>
                {/* manejador de errores */}
                {error && <p className="relative w-full max-w-64 flex flex-wrap items-center justify-center py-3 pl-4 pr-14 rounded-lg text-base font-medium [transition:all_0.5s_ease] border-solid border border-[#f85149] text-[#b22b2b] [&amp;_svg]:text-[#b22b2b] group bg-[linear-gradient(#f851491a,#f851491a)]">{error}</p>}
            </div>
          )}
        </>
    )
}

export default UserLogin;