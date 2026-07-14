import { useEffect, useState } from "react";
import axios from "axios";

function Indicadores() {

    const [indicadores, setIndicadores] = useState(null);

    useEffect(() => {

        axios.get("https://mindicador.cl/api")
            .then((respuesta) => {
                setIndicadores(respuesta.data);
            })
            .catch((error) => {
                console.error("Error obteniendo indicadores:", error);
            });

    }, []);

    return (
        <section className="indicadores">

            <h2>Indicadores Económicos</h2>

            <h3>Origen : CLP</h3>

            {indicadores ? (
                <div>

                    <p>
                        UF: ${indicadores.uf.valor}
                    </p>

                    <p>
                        UTM: ${indicadores.utm.valor}
                    </p>

                    <p>
                        Dólar: ${indicadores.dolar.valor}
                    </p>

                    <p>
                        Euro: ${indicadores.euro.valor}
                    </p>

                </div>

            ) : (
                <p>Cargando indicadores...</p>
            )}

        </section>
    );
}

export default Indicadores;