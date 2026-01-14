import { useState } from "react";
import Inventory from "./Inventory";
import ToDo from "./To-DoList";

const Dashboard = ({ email, onLogout }) => {
    const [component, setComponent] = useState("Inventory");


    //Manejar la seccion para decidir el commponente a mostrar
    const sectionSelected = () => {
        if(component === "Inventory") {
            setComponent("ToDo");
            
        } else {
            setComponent("Inventory");
            
        }
    }
    

    return (
        <>
            <div>
                <h2>Dashboard</h2>
                <p>Bienvenido {email}</p>
                <button className="relative m-0 h-auto cursor-pointer border-0 bg-transparent p-0 
                    text-transparent uppercase tracking-[3px] 
                    font-[Arial] text-[2em]
                    [-webkit-text-stroke:1px_rgba(255,255,255,0.6)]
                    group"
                    onClick={sectionSelected}>{component}
                    
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
                    {component}
                    </span>
                    
                </button>
                <button onClick={onLogout}>Cerrar sesion</button>
            </div>
            <div>
                {component === "Inventory" && <Inventory />}
                {component === "ToDo" && <ToDo />}
            </div>        
            
        </>
    )
}

export default Dashboard;