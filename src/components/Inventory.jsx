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
// import  "../assets/inventory.css";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
    const navigate = useNavigate();

  const [list, setList] = useState([]);

  const [products, setPorudutcs] = useState("");

  const addProduct = () => {
    if (!products.trim()) return;
    if (list.includes(products)) return;
    setList([...list, products]);
    setPorudutcs("");
  };

  const handleEvent = (e) => {
    setPorudutcs(e.target.value);
  };

  const delProduct = (e) => {
    setList(list.filter((l) => l !== e.target.value));
  };

  const delAllProducts = () => {
    setList([]);
  };

  return (
    <>
      <div className="bg-[#0a0907] text-[#f2a20d] font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-[#f2a20d] selection:text-black">
       <div class="scanlines"></div>
      <div class="noise"></div>
        <div className="relative z-10 flex flex-col min-h-screen crt-flicker">
          <header className="flex-none flex items-center justify-between border-b border-[#f2a20d]/40 bg-[#181611] px-6 py-4 uppercase tracking-wider sticky top-0 z-40">
            <div className="flex items-center gap-6">
              <div className="size-8 text-[#f2a20d] border border-[#f2a20d] flex items-center justify-center bg-[#f2a20d]/10">
                <span className="material-symbols-outlined text-xl">terminal</span>
              </div>
              <div>
                <h1 className="text-xl font-bold leading-none">
                  // UNIFIED CYBER-GRANGE
                </h1>
                <span className="text-xs text-[#f2a20d]/60">
                  MANIFEST_V2_PHOTO_FUSION
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#f2a20d]/10 border border-[#f2a20d]/20 text-xs font-bold">
                <span className="size-2 bg-[#f2a20d] rounded-full animate-pulse"></span>
                SYSTEM_ONLINE
              </div>
              <div className="flex items-center justify-center size-8 border border-[#f2a20d]/40 hover:bg-[#f2a20d] hover:text-black cursor-pointer transition-colors">
              <button onClick={() => navigate("/")}>
                <span className="material-symbols-outlined text-lg">logout</span>
              </button>
              </div>
            </div>
          </header>
          <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-8">
            <section className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                  <label className="text-xs font-bold text-[#f2a20d]/60 mb-2 block uppercase">
                    Command Input / Search Query
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f2a20d] font-bold animate-pulse">
                      &gt;
                    </div>
                    <input
                      className="w-full bg-[#181611] border border-[#f2a20d]/40 pl-10 pr-4 py-4 text-lg text-[#f2a20d] placeholder-[#f2a20d]/30 focus:border-[#f2a20d] focus:ring-1 focus:ring-[#f2a20d]/50 focus:outline-none transition-all font-mono uppercase"
                      placeholder="ADD_SERIAL_NO_OR_TYPE"
                      type="text"
                      onChange={handleEvent}
                      value={products}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#f2a20d]/40 font-mono tracking-tighter">
                      CMD_READY
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button onClick={addProduct} className="flex-1 md:flex-none flex items-center justify-center gap-2 h-[62px] px-6 bg-[#f2a20d] text-black hover:bg-[#f2a20d]-dark font-bold uppercase transition-colors">
                    <span className="material-symbols-outlined">add</span>
                    <span className="hidden sm:inline">Add_Item</span>
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 h-[62px] px-6 border border-[#f2a20d]/40 hover:bg-[#f2a20d]/10 hover:border-[#f2a20d] text-[#f2a20d] font-bold uppercase transition-colors">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="px-3 py-1 bg-[#f2a20d] text-black text-xs font-bold uppercase border border-[#f2a20d]">
                  ALL_ITEMS
                </button>
                <button className="px-3 py-1 bg-[#181611] border border-[#f2a20d]/40 text-[#f2a20d]/60 hover:text-[#f2a20d] hover:border-[#f2a20d] text-xs font-bold uppercase transition-colors">
                  IN_STOCK
                </button>
                <button className="px-3 py-1 bg-[#181611] border border-[#f2a20d]/40 text-[#f2a20d]/60 hover:text-[#f2a20d] hover:border-[#f2a20d] text-xs font-bold uppercase transition-colors">
                  LOW_STOCK
                </button>
                <button className="px-3 py-1 bg-[#181611] border border-[#f2a20d]/40 text-[#f2a20d]/60 hover:text-[#f2a20d] hover:border-[#f2a20d] text-xs font-bold uppercase transition-colors">
                  CRITICAL
                </button>
                <button className="px-3 py-1 bg-[#181611] border border-[#f2a20d]/40 text-[#f2a20d]/60 hover:text-[#f2a20d] hover:border-[#f2a20d] text-xs font-bold uppercase transition-colors">
                  ARCHIVED
                </button>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {list.map((l)=> (
                <article key={l} className="bg-[#181611] border border-[#f2a20d]/40 flex flex-col sm:flex-row hover:border-[#f2a20d] transition-all group overflow-hidden h-full opacity-80">
                    <div className="relative w-full sm:w-5/12 min-h-[240px] bg-black border-b sm:border-b-0 sm:border-r border-[#f2a20d]/30 overflow-hidden">
                    <div className="absolute inset-0 z-20 schematic-overlay pointer-events-none opacity-30"></div>
                    <div className="absolute inset-0 bg-[#f2a20d]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                    <img
                        alt="Servomotor"
                        className="w-full h-full object-cover filter grayscale sepia brightness-75 contrast-125 group-hover:brightness-100 group-hover:sepia-0 transition-all duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuApMMS6UIUFIy5r2iw1Elg4xCMHRIJT8Dl8l9ORZ3i7IgQjnhceVDbP-PY2qhtSze8vrlELRWl4a797PY2aNQH5pEmGVu9R_vduyVFkwNb3pyw6oBfZ5fMjI30w9iBmWO4j8ItevHibm1stPISyoyo3bwso6Yxho6e1-EKyrt0tcd9GdPNv23YArZc2ArHxcxJKfj2xTNdiqQqZ7YO7bWwbCgHqYh4uibz-ADC_xjqcpZ7mcEmS0stGtK3wlmSOLfn10eq7uyhOfA"
                    />
                    <div className="absolute bottom-2 left-2 z-30">
                        <div className="bg-black/80 backdrop-blur-sm border border-[#f2a20d]/30 px-2 py-0.5 text-[10px] text-[#f2a20d]/80 font-mono">
                        IMG_REF_0884
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 size-8 border-t-2 border-r-2 border-[#f2a20d] z-30"></div>
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between relative bg-[#181611]">
                    <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-4xl">
                        memory
                        </span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 border border-[#f2a20d]/40 border-dashed text-[10px] font-bold text-[#f2a20d]/70 uppercase">
                            BACKORDER
                        </span>
                        <span className="text-[10px] text-[#f2a20d]/40 font-mono">
                            --
                        </span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight mb-1 uppercase">
                        {l}
                        </h3>
                        <p className="text-xs text-[#f2a20d]/60 font-mono uppercase mb-6">
                        SERVOMOTOR_DRV
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                        <div>
                            <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                            RPM
                            </div>
                            <div className="font-mono">12,000</div>
                        </div>
                        <div>
                            <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                            VOLTAGE
                            </div>
                            <div className="font-mono">24V DC</div>
                        </div>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-[#f2a20d]/20 flex items-end justify-between">
                        <div>
                        <div className="text-[10px] text-[#f2a20d]/50 uppercase font-bold">
                            QTY_AVAILABLE
                        </div>
                        <div className="text-3xl font-bold leading-none mt-1 text-[#f2a20d]/50">
                            082
                        </div>
                        </div>
                        <button className="size-8 flex items-center justify-center border border-[#f2a20d]/40 text-[#f2a20d]/50 hover:bg-[#f2a20d] hover:text-black transition-colors cursor-not-allowed">
                        <span className="material-symbols-outlined text-lg">
                            block
                        </span>
                        </button>
                    </div>
                    </div>
                </article>
              ))}
              <article className="bg-[#181611] border border-[#f2a20d]/40 flex flex-col sm:flex-row hover:border-[#f2a20d] transition-all group overflow-hidden h-full">
                <div className="relative w-full sm:w-5/12 min-h-[240px] bg-black border-b sm:border-b-0 sm:border-r border-[#f2a20d]/30 overflow-hidden">
                  <div className="absolute inset-0 z-20 schematic-overlay pointer-events-none opacity-30"></div>
                  <div className="absolute inset-0 bg-[#f2a20d]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img
                    alt="Hydraulic Pump Unit"
                    className="w-full h-full object-cover filter grayscale sepia brightness-75 contrast-125 group-hover:brightness-100 group-hover:sepia-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy-f-CYgrH5YyMChf2BgRo6tjc_OcCChe7igcLotOtosuCC2GKWZKYNSGse_KFpcHqc1S_QzMlLEnUjxM8peLGcpqQbRIJHuT20FnDrfmLO9W1JNXx414NSgPX_wqqmEh35OJBACyDbGnTewbu1ohUss_-I68-45XAlcALih53IbePyAnBhLpLRaSUqGOxJ21k0QRIMwDhW_12Y2XZ1XQ2EjKPogN3VNHs9ZKhkfzLx45z2tOxOYqAeWYVoPXbSgvErcLxItKdDw"
                  />
                  <div className="absolute bottom-2 left-2 z-30">
                    <div className="bg-black/80 backdrop-blur-sm border border-[#f2a20d]/30 px-2 py-0.5 text-[10px] text-[#f2a20d]/80 font-mono">
                      IMG_REF_0112
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 size-8 border-t-2 border-r-2 border-[#f2a20d] z-30"></div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between relative bg-[#181611]">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-4xl">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 bg-[#f2a20d]/10 border border-[#f2a20d]/40 text-[10px] font-bold text-[#f2a20d] uppercase">
                        IN_STOCK
                      </span>
                      <span className="text-[10px] text-[#f2a20d]/40 font-mono">
                        SEC-04-B
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-[#f2a20d]-light transition-colors">
                      XJ-900-ALPHA
                    </h3>
                    <p className="text-xs text-[#f2a20d]/60 font-mono uppercase mb-6">
                      HYDRAULIC_PUMP_UNIT
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                          WEIGHT
                        </div>
                        <div className="font-mono">45.2 KG</div>
                      </div>
                      <div>
                        <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                          DIMENSIONS
                        </div>
                        <div className="font-mono">80x40x35</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#f2a20d]/20 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-[#f2a20d]/50 uppercase font-bold">
                        QTY_AVAILABLE
                      </div>
                      <div className="text-3xl font-bold leading-none mt-1">
                        4,021
                      </div>
                    </div>
                    <button className="size-8 flex items-center justify-center border border-[#f2a20d] hover:bg-[#f2a20d] hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </article>
             
              <article className="bg-[#181611] border border-[#f2a20d]/40 flex flex-col sm:flex-row hover:border-[#f2a20d] transition-all group overflow-hidden h-full">
                <div className="relative w-full sm:w-5/12 min-h-[240px] bg-black border-b sm:border-b-0 sm:border-r border-[#f2a20d]/30 overflow-hidden">
                  <div className="absolute inset-0 z-20 schematic-overlay pointer-events-none opacity-30"></div>
                  <div className="absolute inset-0 bg-[#f2a20d]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img
                    alt="Logic Core Board"
                    className="w-full h-full object-cover filter grayscale sepia brightness-75 contrast-125 group-hover:brightness-100 group-hover:sepia-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSDFpQSihA6tc0I5pG2P-1KeBgfUnn4_Ec5qrNv2WvqH_IZ4wdltHhXC2cmvGCBxy0MCirvebo68kdA09HypDbRl8f4x0yGiC_AqrK2k6TF9KZCSCThPV0hPm2HegG0Y71OwnNhh-9FiDw-ylRbh5TptK3OgoZ3sL6yu5YiB8ValuBivGcUXJkg8k_wmMMrwKHkEWnOg-arsxd0TRIyC9Vjy3dfW6y3-GZxjo-GaBxNf05guTFs_cf7bfskin2DTQrsznFaWqwYA"
                  />
                  <div className="absolute bottom-2 left-2 z-30">
                    <div className="bg-black/80 backdrop-blur-sm border border-[#f2a20d]/30 px-2 py-0.5 text-[10px] text-[#f2a20d]/80 font-mono">
                      IMG_REF_9921
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 size-8 border-t-2 border-r-2 border-[#f2a20d] z-30"></div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between relative bg-[#181611]">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-4xl">
                      developer_board
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 bg-[#f2a20d]/10 border border-[#f2a20d]/40 text-[10px] font-bold text-[#f2a20d] uppercase">
                        IN_TRANSIT
                      </span>
                      <span className="text-[10px] text-[#f2a20d]/40 font-mono">
                        DOCK-01
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      TX-1138-REF
                    </h3>
                    <p className="text-xs text-[#f2a20d]/60 font-mono uppercase mb-6">
                      LOGIC_CORE_PROCESSOR
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                          REVISION
                        </div>
                        <div className="font-mono">REV 3.4</div>
                      </div>
                      <div>
                        <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                          CORES
                        </div>
                        <div className="font-mono">128 LOGICAL</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#f2a20d]/20 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-[#f2a20d]/50 uppercase font-bold">
                        QTY_AVAILABLE
                      </div>
                      <div className="text-3xl font-bold leading-none mt-1">
                        5,000
                      </div>
                    </div>
                    <button className="size-8 flex items-center justify-center border border-[#f2a20d] hover:bg-[#f2a20d] hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </article>
              <article className="bg-red-950/10 border border-red-500/60 flex flex-col sm:flex-row group overflow-hidden h-full animate-border-flash shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                <div className="relative w-full sm:w-5/12 min-h-[240px] bg-red-950/20 border-b sm:border-b-0 sm:border-r border-red-500/30 overflow-hidden">
                  <div className="absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgxdjFIMXptMiAyYzAgMS4xMDUtLjg5NSAyLTIgMi0xLjEwNSAwLTItLjg5NS0yLTJ6IiBmaWxsPSIjZWY0NDQ0IiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] pointer-events-none opacity-50"></div>
                  <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img
                    alt="Fuel Cell Ionic"
                    className="w-full h-full object-cover filter grayscale sepia brightness-50 contrast-150 group-hover:brightness-75 group-hover:sepia-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDURjGbkZedtib2dB8kLAsi25Eaw5YrWfXgHZrOS9w9z492n8eKQZPH1iZ0PDdkNYYsN8pLMZLrCFloWSCtXeg9-RHsZyu2aSHepMFpuufHAgtWwl0ixYwx0rSh92xx2y1_cnpjXlQP1lKIxcq3NsEeDieHU_PCxwtIrB5dQUJRaCnKGsNQn35q0w3vo9JvHSRCejiFTPsBYNpUAdMy4BWpmfb0-xzCrCl4bmqiTTVKmnaU0TLtrZH-vSD6mO1jeSm-Gf1gGzHdw"
                  />
                  <div className="absolute bottom-2 left-2 z-30">
                    <div className="bg-red-950/80 backdrop-blur-sm border border-red-500/50 px-2 py-0.5 text-[10px] text-red-400 font-mono animate-pulse">
                      ERR_IMG_FAIL
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 size-8 border-t-2 border-r-2 border-red-500 z-30"></div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between relative bg-[#181611]/50 backdrop-blur-md">
                  <div className="absolute top-0 right-0 p-3 opacity-40 group-hover:opacity-100 transition-opacity animate-pulse">
                    <span className="material-symbols-outlined text-4xl text-red-500">
                      battery_alert
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-red-900/40 border border-red-500 text-[10px] font-bold text-red-500 uppercase shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                        <span className="size-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_#ef4444]"></span>
                        CRITICAL_LEVEL
                      </span>
                      <span className="text-[10px] text-red-500/70 font-mono">
                        HAZMAT-B04
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                      Z-77-PROTO
                    </h3>
                    <p className="text-xs text-red-400 font-mono uppercase mb-1">
                      FUEL_CELL_IONIC
                    </p>
                    <div className="text-xs text-red-400 font-mono mb-6">
                      <span className="animate-text-blink">
                        [!] CRITICAL_FAILURE_IMMINENT
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4 text-red-300/70">
                      <div>
                        <div className="uppercase text-[10px] font-bold mb-0.5">
                          OUTPUT
                        </div>
                        <div className="font-mono">UNSTABLE</div>
                      </div>
                      <div>
                        <div className="uppercase text-[10px] font-bold mb-0.5">
                          TEMP
                        </div>
                        <div className="font-mono">450°C [!!]</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-red-500/30 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-red-500/70 uppercase font-bold">
                        QTY_AVAILABLE
                      </div>
                      <div className="text-3xl font-bold leading-none mt-1 text-red-500 animate-text-blink">
                        014
                      </div>
                    </div>
                    <button className="size-8 flex items-center justify-center border border-red-500 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-black transition-colors animate-pulse">
                      <span className="material-symbols-outlined text-lg">
                        warning
                      </span>
                    </button>
                  </div>
                </div>
              </article>
              <article className="bg-[#181611] border border-[#f2a20d]/40 flex flex-col sm:flex-row hover:border-[#f2a20d] transition-all group overflow-hidden h-full">
                <div className="relative w-full sm:w-5/12 min-h-[240px] bg-black border-b sm:border-b-0 sm:border-r border-[#f2a20d]/30 overflow-hidden">
                  <div className="absolute inset-0 z-20 schematic-overlay pointer-events-none opacity-30"></div>
                  <div className="absolute inset-0 bg-[#f2a20d]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                  <img
                    alt="Ventilation Grid"
                    className="w-full h-full object-cover filter grayscale sepia brightness-75 contrast-125 group-hover:brightness-100 group-hover:sepia-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCejP_xfMyUH9bqnMQEiWCRBCw6AqfU8K5ubDe5UifosZABYLY49L2CtUkXBjagnGLtno0vSm37SoJmuLYdcqSlbBq_NryjQwX7-VAPzeapEbg5WPgZfkgGuQrYG79cLOJp0JF4RZZ7dtQuPl96yiGrP1LsaFnW5jXxgj7IEKx47XC4mqvC8G5qdcJhC_zBzQAzN8rp1p85hG4JUzHIaJ5U3NBQh8GHYvfOKymoTZNet-ewBwrUP41SdoEHRbPZTwbXCr-vfOsKJQ"
                  />
                  <div className="absolute bottom-2 left-2 z-30">
                    <div className="bg-black/80 backdrop-blur-sm border border-[#f2a20d]/30 px-2 py-0.5 text-[10px] text-[#f2a20d]/80 font-mono">
                      IMG_REF_5501
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 size-8 border-t-2 border-r-2 border-[#f2a20d] z-30"></div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between relative bg-[#181611]">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-4xl">air</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 bg-[#f2a20d]/20 border border-[#f2a20d]/40 text-[10px] font-bold text-[#f2a20d] uppercase">
                        IN_STOCK
                      </span>
                      <span className="text-[10px] text-[#f2a20d]/40 font-mono">
                        SEC-08-A
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      OX-88-VENT
                    </h3>
                    <p className="text-xs text-[#f2a20d]/60 font-mono uppercase mb-6">
                      VENTILATION_GRID
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                          MATERIAL
                        </div>
                        <div className="font-mono">CARBON MESH</div>
                      </div>
                      <div>
                        <div className="text-[#f2a20d]/40 uppercase text-[10px] font-bold mb-0.5">
                          FLOW RATE
                        </div>
                        <div className="font-mono">800 CFM</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#f2a20d]/20 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-[#f2a20d]/50 uppercase font-bold">
                        QTY_AVAILABLE
                      </div>
                      <div className="text-3xl font-bold leading-none mt-1">
                        890
                      </div>
                    </div>
                    <button className="size-8 flex items-center justify-center border border-[#f2a20d] hover:bg-[#f2a20d] hover:text-black transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            </section>
            <div className="flex items-center justify-between border-t border-[#f2a20d]/20 pt-4 text-xs font-mono uppercase text-[#f2a20d]/60">
              <div>DISPLAYING 1-5 OF 482 ITEMS</div>
              <div className="flex gap-2">
                <button className="px-2 py-1 hover:bg-[#f2a20d] hover:text-black disabled:opacity-50 transition-colors">
                  &lt; PREV
                </button>
                <div className="flex gap-1">
                  <span className="px-2 py-1 bg-[#f2a20d] text-black">1</span>
                  <button className="px-2 py-1 hover:bg-[#f2a20d] hover:text-black transition-colors">
                    2
                  </button>
                  <button className="px-2 py-1 hover:bg-[#f2a20d] hover:text-black transition-colors">
                    3
                  </button>
                  <span className="px-2 py-1">...</span>
                  <button className="px-2 py-1 hover:bg-[#f2a20d] hover:text-black transition-colors">
                    99
                  </button>
                </div>
                <button className="px-2 py-1 hover:bg-[#f2a20d] hover:text-black transition-colors">
                  NEXT &gt;
                </button>
              </div>
            </div>
          </main>
        </div>
        {/* <ul>
          {list.map((l) => (
            <li key={l}>
              {l}
              <span>
                <button onClick={delProduct} value={l}>
                  Delete product
                </button>
              </span>
            </li>
          ))}
        </ul> */}
        {/* <button onClick={addProduct}>Add product</button>
        <p>Added products: {list.length}</p>

        <button onClick={delAllProducts}>Remove all products</button> */}
      </div>
    </>
  );
};

export default Inventory;
