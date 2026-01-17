import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "./Inventory";
import ToDo from "./To-DoList";
import "../assets/dashboard.css";

const Dashboard = ({ email, onLogout }) => {
  const navigate = useNavigate();
  const [component, setComponent] = useState("Inventory");

  //Manejar la seccion para decidir el commponente a mostrar
  const sectionSelected = () => {
    if (component === "Inventory") {
      setComponent("ToDo");
    } else {
      setComponent("Inventory");
    }
  };

  const bars = Array.from({ length: 24 }, () => {
    const height = Math.floor(Math.random() * 80) + 10;
    const ghostHeight = Math.floor(Math.random() * 30);

    return {
      height,
      ghostHeight,
      isHigh: height > 70,
    };
  });

  return (
    <>
      <div className="bg-[#f8f7f5] dark:bg-[#120f0a] font-display text-[#f2a20d] selection:bg-[#f2a20d] selection:text-[#120f0a] h-screen overflow-hidden flex flex-col relative scanlines">
        {/* Main Layout */}
        <div className="flex flex-1 h-full overflow-hidden crt-flicker">
          {/* Sidebar */}
          <aside className="w-20 lg:w-64 border-r-2 border-[#f2a20d]/30 flex flex-col bg-[#1a160e] shrink-0 z-40 transition-all duration-300">
            {/* <!-- User Profile (Compact) --> */}
            <div className="p-4 border-b-2 border-[#f2a20d]/30 flex items-center justify-center lg:justify-start gap-4">
              <div className="size-10 shrink-0 bg-[#f2a20d]/20 rounded-sm border border-[#f2a20d] relative overflow-hidden group">
                <div
                  className="absolute inset-0 bg-[url('https://thispersondoesnotexist.com/')] bg-cover bg-center opacity-80 mix-blend-luminosity grayscale contrast-125"
                  data-alt="Abstract cybernetic texture representation"
                ></div>
              </div>
              <div className="hidden lg:flex flex-col overflow-hidden">
                <h1 className="text-[#f2a20d] font-bold text-sm leading-none tracking-wider truncate">
                  {email}
                </h1>
                <p className="text-[#f2a20d]/60 text-xs mt-1 font-mono tracking-widest truncate">
                  LVL_5_ACCESS
                </p>
              </div>
            </div>
            {/* <!-- Nav Links --> */}
            <nav className="flex-1 flex flex-col gap-2 p-3 overflow-y-auto">
              <a
                className="flex items-center gap-3 px-3 py-3 rounded bg-[#f2a20d] text-[#120f0a] glow-box group transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                  dashboard
                </span>
                <span className="hidden lg:block font-bold tracking-wide">
                  DASHBOARD
                </span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded hover:bg-[#f2a20d]/10 text-[#f2a20d]/70 hover:text-[#f2a20d] transition-all group border border-transparent hover:border-[#f2a20d]/30"
                href="#"
              >
                <span className="material-symbols-outlined text-2xl">
                  terminal
                </span>
                <span className="hidden lg:block font-medium tracking-wide">
                  LOGS
                </span>
              </a>
              <button onClick={() =>navigate("/Tasks")}
                className="flex items-center gap-3 px-3 py-3 rounded hover:bg-[#f2a20d]/10 text-[#f2a20d]/70 hover:text-[#f2a20d] transition-all group border border-transparent hover:border-[#f2a20d]/30"
                
              >
                <span className="material-symbols-outlined text-2xl">
                  check_box
                </span>
                <span className="hidden lg:block font-medium tracking-wide">
                  TASKS
                </span>
              </button>
              <button onClick={() => navigate("/Inventory")}
                className="flex items-center gap-3 px-3 py-3 rounded hover:bg-[#f2a20d]/10 text-[#f2a20d]/70 hover:text-[#f2a20d] transition-all group border border-transparent hover:border-[#f2a20d]/30"
              >
                <span className="material-symbols-outlined text-2xl">inventory</span>
                <span className="hidden lg:block font-medium tracking-wide">
                  DIRECTORIES
                </span>
              </button>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded hover:bg-[#f2a20d]/10 text-[#f2a20d]/70 hover:text-[#f2a20d] transition-all group border border-transparent hover:border-[#f2a20d]/30"
                href="#"
              >
                <span className="material-symbols-outlined text-2xl">
                  settings
                </span>
                <span className="hidden lg:block font-medium tracking-wide">
                  SETTINGS
                </span>
              </a>
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-3 px-3 py-3 rounded hover:bg-[#f2a20d]/10 text-[#f2a20d]/70 hover:text-[#f2a20d] transition-all group border border-transparent hover:border-[#f2a20d]/30"
                
              >
                <span className="material-symbols-outlined text-2xl">
                  exit_to_app
                </span>
                <span className="hidden lg:block font-medium tracking-wide">
                  LOGIN
                </span>
              </button>
            </nav>
            {/* <!-- Bottom Indicator --> */}
            <div className="p-4 border-t-2 border-[#f2a20d]/30 mt-auto hidden lg:block">
              <div className="flex justify-between items-center text-xs text-[#f2a20d]/50 font-mono">
                <span>SYS_UPTIME</span>
                <span className="text-[#f2a20d]">99.9%</span>
              </div>
              <div className="w-full bg-[#f2a20d]/20 h-1 mt-2 rounded-full overflow-hidden">
                <div className="bg-[#f2a20d] h-full w-[99%]"></div>
              </div>
            </div>
          </aside>
          {/* Main Content Area */}
          <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#120f0a]">
            {/* Header */}
            <header className="h-16 border-b-2 border-[#f2a20d]/30 flex items-center justify-between px-6 bg-[#1a160e]/50 backdrop-blur-sm shrink-0 z-30">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#f2a20d] text-3xl animate-pulse">
                  memory
                </span>
                <h2 className="text-[#f2a20d] text-xl font-bold tracking-widest glow-text">
                  SYSTEM_OVERVIEW // V.5.0
                </h2>
              </div>
              <div className="flex items-center gap-6">
                {/* Status Indicator */}
                <div className="hidden md:flex gap-1 text-xs font-bold tracking-widest text-[#f2a20d]/60 border border-[#f2a20d]/30 px-3 py-1 rounded bg-[#120f0a]/50">
                  <span className="text-[#f2a20d] glow-text">ONLINE</span>
                  <span className="mx-2"> | </span>
                  <span> SECURE</span>
                  <span className="mx-2"> | </span>
                  <span>ENCRYPTED</span>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="size-9 flex items-center justify-center border border-[#f2a20d]/50 rounded bg-[#f2a20d]/10 hover:bg-[#f2a20d] hover:text-[#120f0a] text-[#f2a20d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      wifi
                    </span>
                  </button>
                  <button className="size-9 flex items-center justify-center border border-[#f2a20d]/50 rounded bg-[#f2a20d]/10 hover:bg-[#f2a20d] hover:text-[#120f0a] text-[#f2a20d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      notifications
                    </span>
                  </button>
                  <button onClick={onLogout} className="size-9 flex items-center justify-center border border-[#f2a20d]/50 rounded bg-[#f2a20d]/10 hover:bg-[#f2a20d] hover:text-[#120f0a] text-[#f2a20d] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      power_settings_new
                    </span>
                  </button>
                </div>
              </div>
            </header>
            {/* DASHOARD CONTENT SCROLLABLE */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 pb-10">
                {/* MODULE 1: SYSTEM VITALITY (Large Chart) */}
                <div className="lg:col-span-8 flex flex-col border-2 border-[#f2a20d]/30 bg-[#1a160e] rounded-sm relative overflow-hidden group hover:border-[#f2a20d]/60 transition-colors">
                  {/* Module Header */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#f2a20d]/20 bg-[#f2a20d]/5">
                    <h3 className="text-[#f2a20d] font-bold tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        monitoring
                      </span>
                      SYSTEM VITALITY
                    </h3>
                    <div className="text-xs font-mono text-[#f2a20d]/60">
                      CPU_LOAD: 42%
                    </div>
                  </div>
                  {/* Pichel Chart Content */}
                  <div className="p-6 flex flex-col h-full min-h-[300px] gap-6">
                    <div className="flex justify-between items-end gap-2 text-[#f2a20d] font-mono text-xs">
                      <div className="flex flex-col gap-1 items-start">
                        <span className="text-3xl font-bold font-display glow-text">
                          98.4
                          <span className="text-lg text-[#f2a20d]/50">%</span>
                        </span>
                        <span className="bg-[#f2a20d]/20 px-1 text-[10px] tracking-widest text-[#f2a20d]">
                          PEAK_PERFORMANCE
                        </span>
                      </div>
                      <div className="flex gap-4 mb-1">
                        <span className="flex items-center gap-1">
                          <div className="size-2 bg-[#f2a20d]"></div> CPU_01
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="size-2 border border-[#f2a20d]"></div>{" "}
                          MEM_ALLOC
                        </span>
                      </div>
                    </div>
                    {/* Custom Pixel/Block Chart Implementation  */}
                    <div className="flex-1 w-full flex items-end justify-between gap-1 h-[200px] relative border-b border-l border-[#f2a20d]/30 p-2">
                      {/* Background Grid Lines */}
                      <div className="absolute inset-0 grid grid-rows-4 pointer-events-none">
                        <div className="border-t border-[#f2a20d]/10 w-full"></div>
                        <div className="border-t border-[#f2a20d]/10 w-full"></div>
                        <div className="border-t border-[#f2a20d]/10 w-full"></div>
                        <div className="border-t border-[#f2a20d]/10 w-full"></div>
                      </div>
                      {/* Columns of Blocks */}
                      {/* We generate ~20 colums to simulate data history */}
                      {bars.map((bar, i) => (
                        <div
                          key={i}
                          className="w-full flex flex-col-reverse gap-[2px] h-full justify-start items-center group/bar cursor-crosshair"
                        >
                          <div
                            className={`
                              w-full transition-all duration-300
                              ${
                                bar.isHigh
                                  ? "bg-[#f2a20d] glow-box"
                                  : "bg-[#f2a20d]/40"
                              }
                              group-hover/bar:bg-white
                              group-hover/bar:shadow-[0_0_10px_white]
                            `}
                            style={{ height: `${bar.height}%` }}
                          />

                          <div
                            className="w-full border border-[#f2a20d]/30 bg-transparent mb-[2px]"
                            style={{ height: `${bar.ghostHeight}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* X Axis Labels */}
                  <div className="flex justify-between text-[10px] font-mono text-[#f2a20d]/40 px-2">
                    <span>T-60M</span>
                    <span>T-45M</span>
                    <span>T-30M</span>
                    <span>T-15M</span>
                    <span>NOW</span>
                  </div>
                </div>
                {/* MODULE: 2 ACTIVE DIRECTORIES (Checklist) */}
                <div className="lg:col-span-4 flex flex-col border-2 border-[#f2a20d]/30 bg-[#1a160e] rounded-sm overflow-hidden hover:border-[#f2a20d]/60 transition-colors">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#f2a20d]/20 bg-[#f2a20d]/5">
                    <h3 className="text-[#f2a20d] font-bold tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        assignment_turned_in
                      </span>
                      ACTIVE DIRECTORIES
                    </h3>
                    <div className="size-2 bg-[#f2a20d] animate-pulse rounded-full"></div>
                  </div>
                  <div className="p-0 flex-1 overflow-y-auto">
                    {/* Tasks Items */}
                    <div className="divide-y divide-[#f2a20d]/10">
                      <label className="flex items-start gap-4 p-4 hover:bg-[#f2a20d]/5 cursor-pointer transition-colors group">
                        <input
                          className="custom-checkbox mt-1 size-5 shrink-0 appearance-none border-2 border-[#f2a20d] rounded-sm bg-transparent checked:bg-[#f2a20d] checked:border-[#f2a20d] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all"
                          type="checkbox"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-[#f2a20d] group-hover:text-white transition-colors">
                            Compile Core Kernel V.5.1
                          </span>
                          <span className="text-xs text-[#f2a20d]/50 font-mono">
                            PRIORITY: HIGH // SECTOR_7
                          </span>
                        </div>
                      </label>
                      <label className="flex items-start gap-4 p-4 hover:bg-[#f2a20d]/5 cursor-pointer transition-colors group">
                        <input
                          checked={true}
                          className="custom-checkbox mt-1 size-5 shrink-0 appearance-none border-2 border-[#f2a20d] rounded-sm bg-transparent checked:bg-[#f2a20d] checked:border-[#f2a20d] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all"
                          type="checkbox"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-[#f2a20d] group-hover:text-white transition-colors line-through decoration-[#f2a20d] opacity-60">
                            Decrypt Amber Archive
                          </span>
                          <span className="text-xs text-[#f2a20d]/50 font-mono">
                            COMPLETED: 08:42
                          </span>
                        </div>
                      </label>
                      <label className="flex items-start gap-4 p-4 hover:bg-[#f2a20d]/5 cursor-pointer transition-colors group">
                        <input
                          className="custom-checkbox mt-1 size-5 shrink-0 appearance-none border-2 border-[#f2a20d] rounded-sm bg-transparent checked:bg-[#f2a20d] checked:border-[#f2a20d] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all"
                          type="checkbox"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-[#f2a20d] group-hover:text-white transition-colors">
                            Scan Sector 7 for Anomalies
                          </span>
                          <span className="text-xs text-[#f2a20d]/50 font-mono">
                            PENDING AUTHORIZATION
                          </span>
                        </div>
                      </label>
                      <label className="flex items-start gap-4 p-4 hover:bg-[#f2a20d]/5 cursor-pointer transition-colors group">
                        <input
                          className="custom-checkbox mt-1 size-5 shrink-0 appearance-none border-2 border-[#f2a20d] rounded-sm bg-transparent checked:bg-[#f2a20d] checked:border-[#f2a20d] focus:ring-0 focus:ring-offset-0 focus:outline-none transition-all"
                          type="checkbox"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-[#f2a20d] group-hover:text-white transition-colors">
                            Refactor Mainframe Grid
                          </span>
                          <span className="text-xs text-[#f2a20d]/50 font-mono">
                            SCHEDULED: 14:00
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  {/* Add Task Button */}
                  <button className="m-4 mt-2 py-2 border border-dashed border-[#f2a20d]/40 text-[#f2a20d]/60 text-xs font-mono hover:bg-[#f2a20d]/10 hover:text-[#f2a20d] hover:border-[#f2a20d] transition-all uppercase tracking-widest">
                    + Initialize New Directive
                  </button>
                </div>
                {/* MODULE: 3 EVENT LOG (Terminal Style) */}
                <div className="lg:col-span-8 flex flex-col border-2 border-[#f2a20d]/30 bg-[#1a160e] rounded-sm min-h-[300px] hover:border-[#f2a20d]/60 transition-colors">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#f2a20d]/20 bg-[#f2a20d]/5">
                    <h3 className="text-[#f2a20d] font-bold tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        terminal
                      </span>{" "}
                      EVENT_LOG_STREAM
                    </h3>
                    <div className="flex gap-2">
                      <span className="size-2 rounded-full border border-[#f2a20d]/40 bg-transparent"></span>
                      <span className="size-2 rounded-full border border-[#f2a20d]/40 bg-transparent"></span>
                      <span className="size-2 rounded-full bg-[#f2a20d]/40"></span>
                    </div>
                  </div>
                  <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs md:text-sm">
                      <thead className="bg-[#f2a20d]/10 text-[#f2a20d] border-b border-[#f2a20d]/20">
                        <tr>
                          <th className="px-4 py-3 font-bold tracking-wider w-32">
                            TIMESTAMP
                          </th>
                          <th className="px-4 py-3 font-bold tracking-wider w-24">
                            LEVEL
                          </th>
                          <th className="px-4 py-3 font-bold tracking-wider w-40">
                            SOURCE
                          </th>
                          <th className="px-4 py-3 font-bold tracking-wider">
                            MESSAGE
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#f2a20d]/5 text-[#f2a20d]/80">
                        <tr className="hover:bg-[#f2a20d]/5 transition-colors">
                          <td className="px-4 py-2 opacity-70">08:42:01</td>
                          <td className="px-4 py-2">
                            <span className="bg-[#f2a20d]/20 text-[#f2a20d] px-1.5 py-0.5 rounded text-[10px] font-bold border border-[#f2a20d]/30">
                              INFO
                            </span>
                          </td>
                          <td className="px-4 py-2">SYS_BOOT</td>
                          <td className="px-4 py-2">
                            Sequence Initiated successfully.
                          </td>
                        </tr>
                        <tr className="hover:bg-[#f2a20d]/5 transition-colors">
                          <td className="px-4 py-2 opacity-70">08:42:05</td>
                          <td className="px-4 py-2">
                            <span className="bg-[#f2a20d] text-[#120f0a] px-1.5 py-0.5 rounded text-[10px] font-bold">
                              WARN
                            </span>
                          </td>
                          <td className="px-4 py-2">MEM_ALLOC</td>
                          <td className="px-4 py-2">
                            Fragmentation detected in sector 4.
                          </td>
                        </tr>
                        <tr className="hover:bg-[#f2a20d]/5 transition-colors">
                          <td className="px-4 py-2 opacity-70">08:43:12</td>
                          <td className="px-4 py-2">
                            <span className="bg-[#f2a20d]/20 text-[#f2a20d] px-1.5 py-0.5 rounded text-[10px] font-bold border border-[#f2a20d]/30">
                              INFO
                            </span>
                          </td>
                          <td className="px-4 py-2">NET_GATE</td>
                          <td className="px-4 py-2">
                            Secure tunnel established [Node_9].
                          </td>
                        </tr>
                        <tr className="hover:bg-[#f2a20d]/5 transition-colors">
                          <td className="px-4 py-2 opacity-70">08:45:00</td>
                          <td className="px-4 py-2">
                            <span className="border border-[#f2a20d] text-[#f2a20d] px-1.5 py-0.5 rounded text-[10px] font-bold animate-pulse">
                              ERR
                            </span>
                          </td>
                          <td className="px-4 py-2">SEC_LAYER</td>
                          <td className="px-4 py-2 text-[#f2a20d] glow-text">
                            Unauthorized ping blocked from ext. IP.
                          </td>
                        </tr>
                        <tr className="hover:bg-[#f2a20d]/5 transition-colors">
                          <td className="px-4 py-2 opacity-70">08:46:22</td>
                          <td className="px-4 py-2">
                            <span className="bg-[#f2a20d]/20 text-[#f2a20d] px-1.5 py-0.5 rounded text-[10px] font-bold border border-[#f2a20d]/30">
                              INFO
                            </span>
                          </td>
                          <td className="px-4 py-2">TASK_MGR</td>
                          <td className="px-4 py-2">
                            Batch process completed (ID: #9940).
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* MODULSE: 4 NETWORK TOPOLOGY (Visual Grid)*/}
                <div className="lg:col-span-4 flex flex-col border-2 border-[#f2a20d]/30 bg-[#1a160e] rounded-sm min-h-[300px] hover:border-[#f2a20d]/60 transition-colors relative overflow-hidden">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#f2a20d]/20 bg-[#f2a20d]/5 z-10">
                    <h3 className="text-[#f2a20d] font-bold tracking-wider flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        hub
                      </span>{" "}
                      NETWORK_TOPOLOGY
                    </h3>
                    <span className="text-[10px] border border-[#f2a20d]/40 px-1 rounded text-[#f2a20d]/60">
                      LIVE
                    </span>
                  </div>
                  <div className="relative flex-1 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f2a20d]/10 to-transparent p-4 grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
                    {/* Connection Lines (Simulated with absolute divs) */}
                    <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-[#f2a20d]/30 z-0"></div>
                    <div className="absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-[#f2a20d]/30 z-0"></div>
                    <div
                      className="absolute top-1/4 left-1/4 w-[50%] h-[50%] border border-[#f2a20d]/20 rounded-full z-0 animate-spin"
                      style={{ animationDuration: "10s" }}
                    ></div>
                    {/* <!-- Nodes --> */}
                    <div className="relative z-10 size-10 bg-[#1a160e] border-2 border-[#f2a20d] flex items-center justify-center rounded-sm hover:bg-[#f2a20d] hover:text-[#120f0a] transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-sm">dns</span>
                      <div className="absolute -bottom-4 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap text-[#f2a20d] bg-[#120f0a] px-1 border border-[#f2a20d]/50">
                        NODE_01
                      </div>
                    </div>
                    <div className="relative z-10 size-8 bg-[#1a160e] border border-[#f2a20d]/50 flex items-center justify-center rounded-sm hover:border-[#f2a20d] transition-colors">
                      <div className="size-2 bg-[#f2a20d]/50 rounded-full animate-ping"></div>
                    </div>
                    <div className="relative z-10 size-10 bg-[#1a160e] border-2 border-[#f2a20d] flex items-center justify-center rounded-sm hover:bg-[#f2a20d] hover:text-[#120f0a] transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-sm">
                        router
                      </span>
                      <div className="absolute -bottom-4 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap text-[#f2a20d] bg-[#120f0a] px-1 border border-[#f2a20d]/50">
                        NODE_03
                      </div>
                    </div>
                    <div className="relative z-10 size-8 bg-[#1a160e] border border-[#f2a20d]/50 flex items-center justify-center rounded-sm hover:border-[#f2a20d] transition-colors">
                      <div className="size-1 bg-[#f2a20d] rounded-full"></div>
                    </div>
                    <div className="relative z-10 size-14 bg-[#f2a20d] text-[#120f0a] border-2 border-[#f2a20d] flex items-center justify-center rounded shadow-[0_0_15px_rgba(242,162,13,0.4)]">
                      <span className="material-symbols-outlined text-2xl">
                        memory
                      </span>
                    </div>
                    <div className="relative z-10 size-8 bg-[#1a160e] border border-[#f2a20d]/50 flex items-center justify-center rounded-sm hover:border-[#f2a20d] transition-colors">
                      <div className="size-1 bg-[#f2a20d] rounded-full"></div>
                    </div>
                    <div className="relative z-10 size-10 bg-[#1a160e] border-2 border-[#f2a20d] flex items-center justify-center rounded-sm hover:bg-[#f2a20d] hover:text-[#120f0a] transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-sm">
                        storage
                      </span>
                      <div className="absolute -bottom-4 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap text-[#f2a20d] bg-[#120f0a] px-1 border border-[#f2a20d]/50">
                        NODE_07
                      </div>
                    </div>
                    <div className="relative z-10 size-8 bg-[#1a160e] border border-[#f2a20d]/50 flex items-center justify-center rounded-sm hover:border-[#f2a20d] transition-colors">
                      <div
                        className="size-2 bg-[#f2a20d]/50 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <div className="relative z-10 size-10 bg-[#1a160e] border-2 border-[#f2a20d] flex items-center justify-center rounded-sm hover:bg-[#f2a20d] hover:text-[#120f0a] transition-colors cursor-pointer group">
                      <span className="material-symbols-outlined text-sm">
                        cloud
                      </span>
                      <div className="absolute -bottom-4 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap text-[#f2a20d] bg-[#120f0a] px-1 border border-[#f2a20d]/50">
                        NODE_09
                      </div>
                    </div>
                  </div>
                  {/* MODULE: 5 Data Mosaic (Footer Grid) */}
                  <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#f2a20d]/5 border border-[#f2a20d]/20 p-4 rounded-sm flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#f2a20d]/60 font-mono tracking-widest">
                          BANDWIDTH
                        </span>
                        <span className="text-sm font-bold font-display">
                          4.2 TB/s
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#f2a20d]/40">
                        speed
                      </span>
                    </div>
                    <div className="bg-[#f2a20d]/5 border border-[#f2a20d]/20 p-3 rounded-sm flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#f2a20d]/60 font-mono tracking-widest">
                          THREAT_LEVEL
                        </span>
                        <span className="text-sm font-bold font-display text-[#f2a20d] glow-text">
                          LOW
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#f2a20d]/40">
                        security
                      </span>
                    </div>
                    <div className="bg-[#f2a20d]/5 border border-[#f2a20d]/20 p-3 rounded-sm flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#f2a20d]/60 font-mono tracking-widest">
                          ACTIVE_USERS
                        </span>
                        <span className="text-sm font-bold font-display">842</span>
                      </div>
                      <span className="material-symbols-outlined text-[#f2a20d]/40">
                        group 
                      </span>
                    </div>
                    <div className="bg-[#f2a20d]/5 border border-[#f2a20d]/20 p-4 rounded-sm flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#f2a20d]/60 font-mono tracking-widest">
                          POWER_GRID
                        </span>
                        <span className="text-sm font-bold font-display">
                          STABLE
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#f2a20d]/40">
                        bolt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* FOOTER TICKER */}
              <footer className="h-8 bg-[#f2a20d]/10 border-t border-[#f2a20d]/30 flex items-center overflow-hidden whitespace-nowrap shrink-0">
                <div className="animate-[marquee_20s_linear_infinite] flex gap-8 items-center text-xs font-mono text-[#f2a20d]/80">
                  <span>/// SYSTEM STATUS: OPTIMAL</span>
                  <span>/// SECTOR 7: SCANNED</span>
                  <span>/// AMBER ARCHIVE: ENCRYPTED</span>
                  <span>/// CPU TEMP: 45°C</span>
                  <span>/// PROXY CHAIN: ACTIVE</span>
                  <span>/// LAST BACKUP: 04:00:00</span>
                  <span>/// SYSTEM STATUS: OPTIMAL</span>
                  <span>/// SECTOR 7: SCANNED</span>
                  <span>/// AMBER ARCHIVE: ENCRYPTED</span>
                  <span>/// CPU TEMP: 45°C</span>
                  <span>/// PROXY CHAIN: ACTIVE</span>
                  <span>/// LAST BACKUP: 04:00:00</span>
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
      <div>
        {/* {component === "Inventory" && <Inventory />} */}
        
      </div>
    </>
  );
};

export default Dashboard;
