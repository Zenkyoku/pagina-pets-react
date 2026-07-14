import { useEffect, useState } from "react";

function BitacoraForm({ registros, setRegistros, bitacoraEditando, setBitacoraEditando }) {

    const [nickname, setNickname] = useState("");
    const [comentario, setComentario] = useState("");

    function guardarBitacora(e) {
        e.preventDefault();

        if (!nickname || !comentario) {
            alert("Completa todos los campos.");
            return;
        }

        if (bitacoraEditando) {

            const registrosActualizados = registros.map((registro) => {

                if (registro.id === bitacoraEditando.id) {
                    return {
                        ...registro,
                        nickname,
                        comentario
                    };
                }

                return registro;

            });

            setRegistros(registrosActualizados);
            setBitacoraEditando(null);

        } else {

            const nuevaBitacora = {
                id: Date.now(),
                fecha: new Date(),
                nickname,
                comentario
            };

            setRegistros([...registros, nuevaBitacora]);
        }

        setNickname("");
        setComentario("");
    }

    useEffect(() => {
        // Esta en rojo porque no es tan eficiente, pero funciona. Es un tema de como REACT maneja tareas asyncronas que no quize hacer.
        if (bitacoraEditando) {
            setNickname(bitacoraEditando.nickname);
            setComentario(bitacoraEditando.comentario);
        }

    }, [bitacoraEditando]);

    return (
        <section className="bitacora-form"> 

            <h2>Nueva Bitácora</h2>

            <form onSubmit={guardarBitacora}>

                <div>
                    <label>Nickname</label>
                    <br />
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <label>Comentario</label>
                    <br />
                    <textarea
                        rows="4"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    ></textarea>
                </div>

                <br />

                <button type="submit">
                    {bitacoraEditando ? "Actualizar Bitácora" : "Guardar Bitácora"}
                </button>

            </form>

        </section>
    );
}

export default BitacoraForm;