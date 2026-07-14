import { useState, useEffect } from "react";


function Form({ agregarRegistro }) {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [terminos, setTerminos] = useState(false);

    const [errores, setErrores] = useState({
        nombre: "",
        email: "",
        edad: "",
        terminos: ""
    });

    const [formValido, setFormValido] = useState(false);



    function validarNombre() {

        if (nombre.trim() === "") {
            return "Debe ingresar un nombre.";
        }

        return "";
    }


    function validarEmail() {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            return "Ingrese un correo válido.";
        }

        return "";
    }


    function validarEdad() {

        if (Number(edad) < 18) {
            return "Debes tener al menos 18 años.";
        }

        return "";
    }


    function validarTerminos() {

        if (!terminos) {
            return "Debes aceptar los términos.";
        }

        return "";
    }



    useEffect(() => {

        const nuevosErrores = {
            nombre: validarNombre(),
            email: validarEmail(),
            edad: validarEdad(),
            terminos: validarTerminos()
        };


        setErrores(nuevosErrores);


        setFormValido(
            Object.values(nuevosErrores)
                .every(error => error === "")
        );


    }, [nombre, email, edad, terminos]);



    function enviarFormulario(event) {

        event.preventDefault();


        const datos = {
            nombre,
            email,
            edad
        };


        agregarRegistro(datos);


        setNombre("");
        setEmail("");
        setEdad("");
        setTerminos(false);

    }



    return (
        <form 
            id="formulario" 
            className="formulario"
            onSubmit={enviarFormulario}
        >

            <div>
                <label>Nombre</label>
                <br />

                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <br />

                <small className="error">
                    {errores.nombre}
                </small>
            </div>


            <div>
                <label>Email</label>
                <br />

                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <small className="error">
                    {errores.email}
                </small>
            </div>


            <div>
                <label>Edad</label>
                <br />

                <input
                    type="number"
                    id="edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />

                <br />

                <small className="error">
                    {errores.edad}
                </small>
            </div>


            <div>
                <label>
                    <input
                        type="checkbox"
                        id="terminos"
                        checked={terminos}
                        onChange={(e) => setTerminos(e.target.checked)}
                    />

                    Acepto los términos del gremio
                </label>

                <br />

                <small className="error">
                    {errores.terminos}
                </small>
            </div>


            <button 
                type="submit" 
                id="btnEnviar"
                disabled={!formValido}
            >
                Registrarse
            </button>

        </form>
    );
}


export default Form;