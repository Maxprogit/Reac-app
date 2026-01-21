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
import { useNavigate } from "react-router-dom";

const ToDo = () => {
  const navigate = useNavigate();
  const [lists, setList] = useState({ title: "" });

  const [task, setTask] = useState([]);

  const [count, setCounter] = useState(1);

  const addTask = () => {
    //Objeto independiente para cada tarea
    const newTask = {
      id: count,
      title: lists.title,
      state: "PENDING",
    };
    //Validacion de campos no vacios
    if (lists.title === "") return;
    //Agreamos ID autoincremental
    setCounter(count + 1);

    //Ciclo para buscar tareas y validar si no hay tareas repetidas
    let repeatedTask = false;
    for (let i = 0; i < task.length; i++) {
      if (task[i].title === lists.title) {
        repeatedTask = true;
        break;
      }
    }

    if (repeatedTask) {
      alert("No puedes tener dos tareas repetidas");
      return;
    }
    //configuracion de los estados
    setTask([...task, newTask]);
    setList({ title: "" });
  };
  const handleEvent = (e) => {
    setList({ ...lists, [e.target.name]: e.target.value });
  };
  const taskCompleted = (id) => {
    //creamos una copia de las tareas
    const updated = [...task];
    //buscar, modificar y setear el nuevo estado por id
    for (let i = 0; i < updated.length; i++) {
      if (updated[i].id === id) {
        updated[i].state = "COMPLETED";
        break;
      }
    }
    setTask(updated);
  };
  //Eliminacion de tareas por id
  const delTask = (id) => {
    setTask(task.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="bg-[#f8f7f5] dark:bg-[#181611] font-display text-white overflow-x-hidden min-h-screen flex flex-col pb-20 md:pb-0">
        {/* Scanline Overlay */}
        <div class="scanlines"></div>
        <div class="noise"></div>
        {/* <!-- Main Layout --> */}
        <div className="layout-container flex h-full grow flex-col relative z-10">
          {/* <!-- Header --> */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f2a20d]/20 bg-[#181611]/95 backdrop-blur-sm px-4 lg:px-10 py-4 sticky top-0 z-20 shadow-lg md:shadow-none">
            <div className="flex items-center gap-3 md:gap-4 text-[#f2a20d]">
              <div className="size-8 flex items-center justify-center rounded border border-[#f2a20d]/30 bg-[#f2a20d]/10">
                <span className="material-symbols-outlined text-[24px]">
                  terminal
                </span>
              </div>
              <div>
                <h2 className="text-white text-lg md:text-lg font-bold leading-tight tracking-[-0.015em]">
                  SYSTEM_QUEUE // V.3.0
                </h2>
                <p className="text-[#f2a20d]/60 text-[10px] md:text-xs font-mono tracking-widest uppercase">
                  Cyber-Grange Terminal A-14
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded border border-[#393328] bg-[#27231b]/50">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-[#f2a20d]/80 tracking-wider">
                  NET: SECURE
                </span>
              </div>
              <button onClick={() => navigate("/")} className="flex min-w-[40px] md:min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded h-9 md:px-4 bg-[#f2a20d] text-[#181611] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white transition-colors">
                <span className="hidden md:inline">SYS_MENU</span>
                <span className="md:!hidden material-symbols-outlined text-[20px]">
                  menu
                </span>
              </button>
            </div>
          </header>
          {/* Main Content Area */}
          <main className="flex-1 flex flex-col px-4 md:px-10 py-6 max-w-[1440px] mx-auto w-full">
            {/*  Stats Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {/* Stat 1  */}
              <div className="flex flex-col gap-1 rounded border border-[#393328] bg-[#27231b]/30 p-3 md:p-4 hover:border-[#f2a20d]/50 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[#f2a20d]/60 text-[10px] md:text-xs font-mono font-bold tracking-wider">
                    UPTIME
                  </p>
                  <span className="material-symbols-outlined text-[#f2a20d]/40 group-hover:text-[#f2a20d] text-[16px] md:text-[18px]">
                    timer
                  </span>
                </div>
                <p className="text-white tracking-tight text-xl md:text-lg font-bold font-mono">
                  84:12:09
                </p>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col gap-1 rounded border border-[#393328] bg-[#27231b]/30 p-3 md:p-4 hover:border-[#f2a20d]/50 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[#f2a20d]/60 text-[10px] md:text-xs font-mono font-bold tracking-wider">
                    CONNECTION
                  </p>
                  <span className="material-symbols-outlined text-[#f2a20d]/40 text-[16px] md:text-[18px] group-hover:text-[#f2a20d]">
                    wifi
                  </span>
                </div>
                <p className="text-green-500 tracking-tight text-xl md:text-xl font-bold font-mono">
                  ENCRYPTED
                </p>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col gap-1 rounded border border-[#393328] bg-[#27231b]/30 p-3 md:p-4 hover:border-[#f2a20d]/50 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[#f2a20d]/60 text-[10px] md:text-xs font-mono font-bold tracking-wider">
                    MEMORY
                  </p>
                  <span className="material-symbols-outlined text-[#f2a20d]/40 group-hover:text-[#f2a20d] text-[16px] md:text-[18px]">
                    memory
                  </span>
                </div>
                <p className="text-white tracking-tight text-xl md:text-xl font-bold font-mono">
                  64 TB / 92%
                </p>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col gap-1 rounded border border-[#393328] bg-[#27231b]/30 p-3 md:p-4 hover:border-[#f2a20d]/50 transition-colors group">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[#f2a20d]/60 text-[10px] md:text-xs font-mono font-bold tracking-wider">
                    LATENCY
                  </p>
                  <span className="material-symbols-outlined text-[#f2a20d]/40 group-hover:text-[#f2a20d] text-[16px] md:text-[18px]">
                    bolt
                  </span>
                </div>
                <p className="text-white tracking-tight text-xl md:text-xl font-bold font-mono">
                  12 MS
                </p>
              </div>
            </div>
            {/* Task Queue Grid */}
            <div className="flex flex-col grow">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-[#f2a20d] text-sm  font-bold uppercase tracking-wider">
                  Active Directives
                </h3>
                <div className="text-xs text-[#f2a20d]/50 font-mono">
                  5 TASKS PENDING
                </div>
              </div>
              <div className="hidden md:block overflow-hidden rounded border border-[#393328] bg-[#181611] shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#27231b] border-b border-[#f2a20d]/20">
                      <th className="p-4 text-[#f2a20d]/70 text-xs font-bold tracking-widest uppercase w-32 border-r border-[#393328]/50">
                        ID_REF
                      </th>
                      <th className="p-4 text-[#f2a20d]/70 text-xs font-bold tracking-widest uppercase border-r border-[#393328]/50">
                        Operation Directive
                      </th>
                      <th className="p-4 text-[#f2a20d]/70 text-xs font-bold tracking-widest uppercase w-40 border-r border-[#393328]/50">
                        Priority
                      </th>
                      <th className="p-4 text-[#f2a20d]/70 text-xs font-bold tracking-widest uppercase w-48 text-right">
                        Status
                      </th>
                      <th className="p-4 text-[#f2a20d]/70 text-xs font-bold tracking-widest uppercase w-40 border-r border-[#393328]/50">
                        Change Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#393328] font-mono">
                    {/* <!-- High Priority Task --> */}
                    <tr className="group hover:bg-[#f2a20d]/5 transition-colors relative">
                      <td className="p-4 text-sm font-medium text-white border-l-4 border-l-[#f2a20d]/0 hover:border-l-[#f2a20d] transition-all">
                        <span className="opacity-70">TSK-0049</span>
                      </td>
                      <td className="p-4 text-sm text-white font-bold tracking-tight">
                        DECRYPT ARCHIVE 77 // LEVEL 5 SECURITY
                        <span className="block text-xs text-red-400 mt-1 font-normal uppercase tracking-wide opacity-80">
                          &gt;&gt; Encryption Key Required
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded border border-red-500/50 bg-red-500/10 text-red-500 text-xs font-bold animate-priority">
                          CRITICAL
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-[#f2a20d] font-bold text-sm text-glow">
                          [WORKING]<span className="animate-pulse">_</span>
                        </span>
                      </td>
                    </tr>

                    {/* <!-- Normal Task --> */}
                    {task.map((t) => (
                      <tr
                        key={t.id}
                        value={t}
                        className="group hover:bg-[#f2a20d]/5 transition-colors"
                      >
                        <td className="p-4 text-sm font-medium text-white/70 border-l-4 border-l-transparent group-hover:border-l-[#f2a20d]/50 transition-all">
                          <span className="opacity-50">TSK-{t.id}</span>
                        </td>
                        <td className="p-4 text-sm text-white/90 uppercase">
                          {t.title}
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-2 py-0.5 text-[#f2a20d] text-xs font-medium">
                            MED
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <span className="text-[#f2a20d]/80 text-sm font-medium">
                            [{t.state}]
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center gap-2 group cursor-pointer hover:bg-[#27231b] rounded px- py-1 transition-colors">
                            <span className="flex items-center justify-center h-6 min-w-[24px] rounded bg-[#27231b] border border-[#393328] text-[10px] text-white font-mono group-hover:border-[#f2a20d] group-hover:text-[#f2a20d] transition-colors">
                              X
                            </span>
                            <button onClick={() => delTask(t.id)}>
                              <span className="text-xs font-bold text-[#f2a20d]/80 uppercase tracking-wide group-hover:text-white">
                                Delete
                              </span>
                            </button>
                          </div>
                          <div className="flex items-center gap-2 group cursor-pointer hover:bg-[#27231b] rounded px-0 py-1 transition-colors">
                            <span className="flex items-center justify-center h-6 min-w-[24px] rounded bg-[#27231b] border border-[#393328] text-[10px] text-white font-mono group-hover:border-[#f2a20d] group-hover:text-[#f2a20d] transition-colors">
                              🦾
                            </span>
                            <button onClick={() => taskCompleted(t.id)}>
                              <span className="text-xs font-bold text-[#f2a20d]/80 uppercase tracking-wide group-hover:text-white">
                                Completed
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {/* <!-- Completed Task --> */}
                    <tr className="group hover:bg-[#f2a20d]/5 transition-colors bg-[#27231b]/10">
                      <td className="p-4 text-sm font-medium text-white/40 border-l-4 border-l-transparent group-hover:border-l-[#f2a20d]/30 transition-all">
                        <span className="opacity-30">TSK-0051</span>
                      </td>
                      <td className="p-4 text-sm text-white/40 line-through decoration-[#f2a20d]/30">
                        UPLOAD NEURO-DATA TO OFFLINE STORAGE
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2 py-0.5 text-white/30 text-xs font-medium">
                          LOW
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-white/40 text-sm font-medium">
                          [COMPLETE]
                        </span>
                      </td>
                    </tr>
                    {/* <!-- Normal Task --> */}
                    <tr className="group hover:bg-[#f2a20d]/5 transition-colors">
                      <td className="p-4 text-sm font-medium text-white/70 border-l-4 border-l-transparent group-hover:border-l-[#f2a20d]/50 transition-all">
                        <span className="opacity-50">TSK-0052</span>
                      </td>
                      <td className="p-4 text-sm text-white/90">
                        COMPILE SECTOR 4 DIAGNOSTICS
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2 py-0.5 text-[#f2a20d] text-xs font-medium">
                          MED
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-[#f2a20d]/80 text-sm font-medium">
                          [READY]
                        </span>
                      </td>
                    </tr>
                    {/* <!-- Normal Task --> */}
                    <tr className="group hover:bg-[#f2a20d]/5 transition-colors">
                      <td className="p-4 text-sm font-medium text-white/70 border-l-4 border-l-transparent group-hover:border-l-[#f2a20d]/50 transition-all">
                        <span className="opacity-50">TSK-0053</span>
                      </td>
                      <td className="p-4 text-sm text-white/90">
                        PURGE CACHE LOGS
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2 py-0.5 text-white/60 text-xs font-medium">
                          LOW
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-[#f2a20d]/80 text-sm font-medium">
                          [READY]
                        </span>
                      </td>
                    </tr>
                    {/* <!-- Normal Task -->  */}
                    <tr className="group hover:bg-[#f2a20d]/5 transition-colors">
                      <td className="p-4 text-sm font-medium text-white/70 border-l-4 border-l-transparent group-hover:border-l-[#f2a20d]/50 transition-all">
                        <span className="opacity-50">TSK-0054</span>
                      </td>
                      <td className="p-4 text-sm text-white/90">
                        CALIBRATE OPTICAL SENSORS
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2 py-0.5 text-white/60 text-xs font-medium">
                          LOW
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-[#f2a20d]/80 text-sm font-medium">
                          [QUEUED]
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Tabla responsiva */}
              <div className="md:hidden flex flex-col gap-4">
                <div className="relative p-5 rounded border-2 border-[#f2a20d] bg-[#27231b]/40 shadow-[0_0_15px_rgba(242,162,13,0.1)] overflow-hidden">
                  <div className="absolute top-0 left-0 bg-[#f2a20d]/20 px-3 py-1 rounded-br text-[10px] font-mono text-[#f2a20d] font-bold">
                    TSK-0049
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="text-lg font-bold text-white leading-snug">
                      DECRYPT ARCHIVE 77 // LEVEL 5 SECURITY
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="material-symbols-outlined text-red-400 text-sm">
                        warning
                      </span>
                      <span className="text-xs text-red-400 font-mono uppercase tracking-wide">
                        &gt;&gt; Encryption Key Required
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#f2a20d]/20 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Status
                      </span>
                      <span className="text-[#f2a20d] font-bold text-sm text-glow flex items-center gap-1">
                        [WORKING]{" "}
                        <span className="animate-pulse size-1.5 rounded-full bg-[#f2a20d] block"></span>
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Priority
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded border border-red-500/50 bg-red-500/10 text-red-500 text-xs font-bold animate-priority">
                        CRITICAL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative p-5 rounded border-2 border-[#f2a20d]/50 bg-[#27231b]/20 hover:border-[#f2a20d] transition-colors">
                  <div className="absolute top-0 left-0 bg-[#27231b] px-3 py-1 rounded-br border-b border-r border-[#393328] text-[10px] font-mono text-white/50">
                    TSK-0050
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="text-base font-bold text-white/90 leading-snug">
                      PATCH FIREWALL SUB-ROUTINES
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#393328] mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Status
                      </span>
                      <span className="text-[#f2a20d]/80 text-sm font-mono">
                        [READY]
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Priority
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#f2a20d]/20 bg-[#f2a20d]/5 text-[#f2a20d] text-xs font-medium">
                        MED
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative p-5 rounded border-2 border-[#393328] bg-[#181611]/50 opacity-70">
                  <div className="absolute top-0 left-0 bg-[#27231b] px-3 py-1 rounded-br border-b border-r border-[#393328] text-[10px] font-mono text-white/30">
                    TSK-0051
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="text-base font-bold text-white/40 leading-snug line-through decoration-[#f2a20d]/30">
                      UPLOAD NEURO-DATA TO OFFLINE STORAGE
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#393328] mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-white/20 font-bold tracking-wider mb-1">
                        Status
                      </span>
                      <span className="text-white/40 text-sm font-mono">
                        [COMPLETE]
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase text-white/20 font-bold tracking-wider mb-1">
                        Priority
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/30 text-xs font-medium">
                        LOW
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative p-5 rounded border-2 border-[#f2a20d]/50 bg-[#27231b]/20 hover:border-[#f2a20d] transition-colors">
                  <div className="absolute top-0 left-0 bg-[#27231b] px-3 py-1 rounded-br border-b border-r border-[#393328] text-[10px] font-mono text-white/50">
                    TSK-0052
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="text-base font-bold text-white/90 leading-snug">
                      COMPILE SECTOR 4 DIAGNOSTICS
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#393328] mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Status
                      </span>
                      <span className="text-[#f2a20d]/80 text-sm font-mono">
                        [READY]
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Priority
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded border border-[#f2a20d]/20 bg-[#f2a20d]/5 text-[#f2a20d] text-xs font-medium">
                        MED
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative p-5 rounded border-2 border-[#f2a20d]/50 bg-[#27231b]/20 hover:border-[#f2a20d] transition-colors">
                  <div className="absolute top-0 left-0 bg-[#27231b] px-3 py-1 rounded-br border-b border-r border-[#393328] text-[10px] font-mono text-white/50">
                    TSK-0053
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="text-base font-bold text-white/90 leading-snug">
                      PURGE CACHE LOGS
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#393328] mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Status
                      </span>
                      <span className="text-[#f2a20d]/80 text-sm font-mono">
                        [READY]
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Priority
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/60 text-xs font-medium">
                        LOW
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative p-5 rounded border-2 border-[#f2a20d]/50 bg-[#27231b]/20 hover:border-[#f2a20d] transition-colors">
                  <div className="absolute top-0 left-0 bg-[#27231b] px-3 py-1 rounded-br border-b border-r border-[#393328] text-[10px] font-mono text-white/50">
                    TSK-0054
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="text-base font-bold text-white/90 leading-snug">
                      CALIBRATE OPTICAL SENSORS
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#393328] mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Status
                      </span>
                      <span className="text-[#f2a20d]/80 text-sm font-mono">
                        [QUEUED]
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] uppercase text-[#f2a20d]/40 font-bold tracking-wider mb-1">
                        Priority
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/60 text-xs font-medium">
                        LOW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="w-full bg-black/50 border border-[#393328] text-[#f2a20d] placeholder-[#f2a20d]/30 h-14 pl-10 pr-4 font-mono text-lg focus:outline-none focus:border-[#f2a20d] focus:ring-1 focus:ring-[#f2a20d]/50 transition-all rounded-sm uppercase"
              placeholder="WRITE YOUR NEW TASK"
              name="title"
              type="text"
              onChange={handleEvent}
              value={lists.title}
            />
          </main>
          {/* <!-- Command Footer --> */}
          <footer className="hidden md:block border-t border-[#f2a20d]/20 bg-[#181611]/95 backdrop-blur px-6 py-4 mt-auto">
            <div className="max-w-[1440px] mx-auto w-full">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* <!-- Command Keys --> */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 group cursor-pointer hover:bg-[#27231b] rounded px-2 py-1 transition-colors">
                    <span className="flex items-center justify-center h-6 min-w-[24px] rounded bg-[#27231b] border border-[#393328] text-[10px] text-white font-mono group-hover:border-[#f2a20d] group-hover:text-[#f2a20d] transition-colors">
                      N
                    </span>
                    <button onClick={addTask}>
                      <span className="text-xs font-bold text-[#f2a20d]/80 uppercase tracking-wide group-hover:text-white">
                        New Task
                      </span>
                    </button>
                  </div>
                  <div className="w-px h-6 bg-[#393328]"></div>
                  <div className="flex items-center gap-2 group cursor-pointer hover:bg-[#27231b] rounded px-2 py-1 transition-colors">
                    <span className="flex items-center justify-center h-6 px-1.5 rounded bg-[#27231b] border border-[#393328] text-[10px] text-white font-mono group-hover:border-[#f2a20d] group-hover:text-[#f2a20d] transition-colors">
                      SPACE
                    </span>
                    <span className="text-xs font-bold text-[#f2a20d]/80 uppercase tracking-wide group-hover:text-white">
                      Toggle Status
                    </span>
                  </div>
                  <div className="w-px h-6 bg-[#393328]"></div>
                  <div className="flex items-center gap-2 group cursor-pointer hover:bg-[#27231b] rounded px-2 py-1 transition-colors">
                    <span className="flex items-center justify-center h-6 min-w-[24px] rounded bg-[#27231b] border border-[#393328] text-[10px] text-white font-mono group-hover:border-[#f2a20d] group-hover:text-[#f2a20d] transition-colors">
                      ESC
                    </span>
                    <span className="text-xs font-bold text-[#f2a20d]/80 uppercase tracking-wide group-hover:text-white">
                      Logout
                    </span>
                  </div>
                </div>
                {/* <!-- System Status Text --> */}
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#f2a20d]/40 uppercase">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                  <span>Terminal access granted: Admin_01</span>
                </div>
              </div>
            </div>
          </footer>
          <button className="md:hidden fixed bottom-20 right-4 z-50 size-14 rounded-full bg-[#f2a20d] text-[#181611] shadow-[0_0_20px_rgba(242,162,13,0.5)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all fab-glow">
            <span className="material-symbols-outlined text-3xl font-bold">
              add
            </span>
          </button>
          <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#181611]/95 backdrop-blur-md border-t border-[#f2a20d]/20 h-16 flex justify-around items-center z-40 px-2 pb-safe">
            <button className="flex flex-col items-center justify-center w-full h-full text-[#f2a20d] gap-1 active:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-[24px]">
                list_alt
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest">
                QUEUE
              </span>
            </button>
            <button className="flex flex-col items-center justify-center w-full h-full text-[#f2a20d]/40 gap-1 active:bg-white/5 transition-colors hover:text-[#f2a20d]/70">
              <span className="material-symbols-outlined text-[24px]">
                analytics
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest">
                DATA
              </span>
            </button>
            <button className="flex flex-col items-center justify-center w-full h-full text-[#f2a20d]/40 gap-1 active:bg-white/5 transition-colors hover:text-[#f2a20d]/70">
              <span className="material-symbols-outlined text-[24px]">
                settings_system_daydream
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest">
                SYS
              </span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ToDo;
