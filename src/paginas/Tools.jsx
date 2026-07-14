import Navbar from "../componentes/Navbar";
import Indicadores from "../componentes/Indicadores";
import Clima from "../componentes/Clima";
import BitacoraForm from "../componentes/BitacoraForm";
import BitacoraTable from "../componentes/BitacoraTable";
import "../css/herramientas.css";
import { useEffect, useState } from "react";



function Dashboard() {
    const [bitacoraEditando, setBitacoraEditando] = useState(null);

    const [registros, setRegistros] = useState(() => {
        const datosGuardados = localStorage.getItem("bitacoras");
        return datosGuardados ? JSON.parse(datosGuardados) : [];
    });

    // Cargar registros en tabla desde localStorage al iniciar la aplicación
    useEffect(() => {
        localStorage.setItem(
            "bitacoras",
            JSON.stringify(registros)
        );
    }, [registros]);

    return (
        <div className="contenedor-principal">
            <Navbar />

            <section className="dashboard">
                <Indicadores />
                <Clima />
            </section>
            <div className="separador"></div>
            <section className="comentarios">
                <BitacoraForm
                    registros={registros}
                    setRegistros={setRegistros}
                    bitacoraEditando={bitacoraEditando}
                    setBitacoraEditando={setBitacoraEditando}
                />

            </section>
            <br />
            <section>
            
                <BitacoraTable
                    registros={registros}
                    setRegistros={setRegistros}
                    setBitacoraEditando={setBitacoraEditando}
                />
            </section>
        </div>
    );
}

export default Dashboard;