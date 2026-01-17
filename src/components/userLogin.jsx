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
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [error, setError] = useState("Unauthorized access is strictly prohibited");

  //Manejador de eventos multiples
  const handleEventLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const validateLogin = () => {
    const users = {
      email: "probando@gmail.com",
      password: "1234",
    };

    if (userLogin.email === "" || userLogin.password === "") {
      setError("Tienes campos vacios");
      return;
    }
    if (users.email !== userLogin.email) {
      setError("No existe este correo");
      return;
    }
    if (users.password !== userLogin.password) {
      setError("La contraseña es incorrecta");
      return;
    }

    setError("");
    setIsAuthenticated(true);
  };

  const onLogout = () => {
    setIsAuthenticated(false);
    setUserLogin({ email: "", password: "" });
  };

  return (
    <>
      {isAuthenticated ? (
        <Dashboard email={userLogin.email} onLogout={onLogout} />
      ) : (
        <div className="relative min-h-screen bg-[#0c0a05] text-[#f2a20d] font-mono flex items-center justify-center overflow-hidden">
          {/* Decorative Background: Code Waterfall */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 flex justify-between overflow-hidden opacity-10 pointer-events-none select-none px-4 md:px-20"
          >
            <div className="hidden md:flex flex-col text-[10px] md:text-xs font-mono leading-relaxed text-primary h-full justify-center">
              <p>0x4F A2 91 00 BF</p>
              <p>LOADING KERNEL...</p>
              <p>MEM: 640K OK</p>
              <p>00101110101</p>
              <p>SYSTEM_CHECK: PASS</p>
              <p>MOUNT: /DEV/HDA1</p>
              <p>INIT: RUNLEVEL 3</p>
              <p>0x4F A2 91 00 BF</p>
              <p>ACCESS_LOG_UPDATED</p>
              <p>USER: ROOT</p>
              <p>SHELL: BASH</p>
              <p>NET: ESTABLISHED</p>
              <p>PING: 14ms</p>
              <p>0x4F A2 91 00 BF</p>
              <p>LOADING KERNEL...</p>
              <p>MEM: 640K OK</p>
              <p>00101110101</p>
              <p>SYSTEM_CHECK: PASS</p>
              <p>MOUNT: /DEV/HDA1</p>
              <p>INIT: RUNLEVEL 3</p>
              <p>0x4F A2 91 00 BF</p>
              <p>ACCESS_LOG_UPDATED</p>
              <p>USER: ROOT</p>
              <p>SHELL: BASH</p>
              <p>NET: ESTABLISHED</p>
              <p>PING: 14ms</p>
            </div>
            <div className="flex flex-col text-[10px] md:text-xs font-mono leading-relaxed text-primary h-full justify-start pt-20">
              <p>CONNECTING...</p>
              <p>::1 LOCALHOST</p>
              <p>PORT: 8080 OPEN</p>
              <p>SSH_KEY: VALID</p>
              <p>ENCRYPTION: AES-256</p>
              <p>HANDSHAKE: OK</p>
              <p>TOKEN: REFERSHED</p>
              <p>00110101001</p>
              <p>BUFFER_OVERFLOW_PROT</p>
              <p>DAEMON: ACTIVE</p>
              <p>LOG: /VAR/LOG/AUTH</p>
              <p>STATUS: 200 OK</p>
              <p>PROXY: BYPASSED</p>
              <p>CONNECTING...</p>
              <p>::1 LOCALHOST</p>
              <p>PORT: 8080 OPEN</p>
              <p>SSH_KEY: VALID</p>
              <p>ENCRYPTION: AES-256</p>
              <p>HANDSHAKE: OK</p>
              <p>TOKEN: REFERSHED</p>
              <p>00110101001</p>
              <p>BUFFER_OVERFLOW_PROT</p>
              <p>DAEMON: ACTIVE</p>
              <p>LOG: /VAR/LOG/AUTH</p>
              <p>STATUS: 200 OK</p>
              <p>PROXY: BYPASSED</p>
            </div>
            <div className="hidden lg:flex flex-col text-[10px] md:text-xs font-mono leading-relaxed text-primary h-full justify-center opacity-50">
              <p>RENDER_ENGINE: V2</p>
              <p>TEXTURE: MONO</p>
              <p>LIGHT: AMBER</p>
              <p>GAMMA: 2.2</p>
              <p>V_SYNC: OFF</p>
              <p>FPS: 60</p>
              <p>RES: 1920x1080</p>
              <p>ASPECT: 16:9</p>
              <p>UI_SCALE: 1.0</p>
              <p>THEME: DARK</p>
              <p>MODE: TERMINAL</p>
              <p>CURSOR: BLOCK</p>
              <p>BLINK: 500ms</p>
              <p>RENDER_ENGINE: V2</p>
              <p>TEXTURE: MONO</p>
              <p>LIGHT: AMBER</p>
              <p>GAMMA: 2.2</p>
              <p>V_SYNC: OFF</p>
              <p>FPS: 60</p>
              <p>RES: 1920x1080</p>
              <p>ASPECT: 16:9</p>
              <p>UI_SCALE: 1.0</p>
              <p>THEME: DARK</p>
              <p>MODE: TERMINAL</p>
              <p>CURSOR: BLOCK</p>
              <p>BLINK: 500ms</p>
            </div>
          </div>
          {/* SCANLINES */}
          <div
            className="
                    fixed inset-0 pointer-events-none z-50
                    bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.4))]
                    bg-[length:100%_4px]
                    "
          />
          {/* Login Card */}
          <div className="w-full max-w-[480px] bg-black/80 backdrop-blur-sm border border-primary glow-box relative flex flex-col">
            {/* Card Header Decoration */}
            <div className="flex items-center justify-between border-b border-primary/30 bg-primary/5 px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">terminal</span>
                <span className="text-xs font-bold tracking-widest font-mono">
                  SYS_TERMINAL_V2
                </span>
              </div>
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-primary/30"></div>
                <div className="h-2 w-2 rounded-full bg-primary/30"></div>
                <div className="h-2 w-2 rounded-full bg-primary"></div>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col gap-6">
              {/* Titles */}
              <div className="text-center space-y-2">
                <p className="text-primary/70 text-xs font-mono tracking-[0.2em] uppercase">
                  Unified Cyber-Login
                </p>
                <h1 className="text-primary text-3xl md:text-4xl font-bold tracking-tighter glow-text uppercase">
                  Authentication
                  <br />
                  Required
                </h1>
              </div>
              {/* Form Area */}
              <div className="flex flex-col gap-5 pt-4">
                {/* Identity Input */}
                <label className="flex flex-col gap-2 group">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold font-mono tracking-widest pl-1">
                      IDENTITY // USERNAME
                    </span>
                    <span className="text-[10px] text-primary/40 font-mono hidden group-focus-within:inline-block">
                      INPUT_ACTIVE
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-primary font-mono select-none">
                      &gt;
                    </span>
                    <input
                      autoComplete="off"
                      className="w-full bg-black/50 border border-primary/50 text-primary placeholder-primary/30 h-14 pl-10 pr-4 font-mono text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all rounded-sm uppercase"
                      placeholder="ENTER_ID"
                      type="text"
                      name="email"
                      onChange={handleEventLogin}
                      value={userLogin.email}
                    />
                  </div>
                </label>
                {/* Key Input */}
                <label className="flex flex-col gap-2 group">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold font-mono tracking-widest pl-1">
                      KEY // PASSWORD
                    </span>
                    <span className="text-[10px] text-primary/40 font-mono hidden group-focus-within:inline-block">
                      SECURE_MODE
                    </span>
                  </div>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-primary font-mono select-none">
                      &gt;
                    </span>
                    <input
                      className="w-full bg-black/50 border border-primary/50 text-primary placeholder-primary/30 h-14 pl-10 pr-4 font-mono text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all rounded-sm"
                      placeholder="*******"
                      type="password"
                      name="password"
                      onChange={handleEventLogin}
                      value={userLogin.password}
                    />
                  </div>
                </label>
                {/* Action Button */}
                <button className="mt-4 w-full h-14 bg-[#f2a20d] text-black font-bold text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center gap-3 group rounded-sm shadow-[0_0_15px_rgba(242,162,13,0.3)]" onClick={validateLogin}>
                  <span>Initiate Access</span>
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    login
                  </span>
                </button>
              </div>
              {/* Warnings/Footer inside card */}
              <div className="pt-4 border-t border-primary/20 flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-2 text-primary/60">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider">
                    Connection Secure (SSL/TLS)
                  </span>
                </div>
                <p className="text-xs text-red-500 font-mono opacity-80 uppercase tracking-widest">
                   <span className="animate-pulse">{error}</span>
                </p>
              </div>
            </div>
            {/* <!-- Corner Decals --> */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary"></div>
          </div>
          {/* <!-- Global Status Footer --> */}
          <div className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <p className="text-[10px] font-mono text-primary/40 tracking-[0.3em] uppercase">
              V.2.0.5 // Awaiting Input...
            </p>
          </div>
        </div>
        
      )}
    </>
  );
};

export default UserLogin;
