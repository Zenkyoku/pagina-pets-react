import { useState, useEffect } from "react";
import Form from "../componentes/Form";
import Navbar from "../componentes/Navbar";
import RegisterTable from "../componentes/RegisterTable";
import "../css/login-style.css";


function Login() {

    const [saludo, setSaludo] = useState("");
    const [modoOscuro, setModoOscuro] = useState(false);

    const [registros, setRegistros] = useState([]);

    const [mensajeExito, setMensajeExito] = useState("");


    // Equivalent to DOMContentLoaded + mostrarSaludo()
    useEffect(() => {

        const hora = new Date().getHours();

        if (hora < 12) {
            setSaludo("🌅 Buenos días, Maestro Pokewow");
        }
        else if (hora < 20) {
            setSaludo("🌞 Buenas tardes, Maestro Pokewow");
        }
        else {
            setSaludo("🌙 Buenas noches, Maestro Pokewow");
        }

    }, []);


    function cambiarTema() {

        document.body.classList.toggle("modo-oscuro");

        setModoOscuro(!modoOscuro);
    }


    function agregarRegistro(datos) {

        setRegistros(prevRegistros => [
            ...prevRegistros,
            datos
        ]);

        setMensajeExito(
            `¡Bienvenido al gremio, ${datos.nombre}!`
        );
    }


    return (
        <div className="contenedor-principal">

            <Navbar />

            <section className="contenedor-login">

                <button
                    id="btnTema"
                    className="boton-tema"
                    onClick={cambiarTema}
                >
                    {modoOscuro 
                        ? "☀️ Modo Claro" 
                        : "🌙 Modo Oscuro"}
                </button>


                <h2>
                    Únete al Gremio de Coleccionistas
                </h2>


                <p id="saludo">
                    {saludo}
                </p>


                <Form 
                    agregarRegistro={agregarRegistro}
                />


                <p id="mensajeExito">
                    {mensajeExito}
                </p>


                <RegisterTable
                    registros={registros}
                />


            </section>

        </div>
    );
}


export default Login;