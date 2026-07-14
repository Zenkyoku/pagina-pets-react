import { useEffect, useState } from "react";

function obtenerDescripcionClima(codigo) {

    const estados = {
        0: "Cielo despejado",
        1: "Principalmente despejado",
        2: "Parcialmente nublado",
        3: "Nublado",
        61: "Lluvia",
        95: "Tormenta"
    };

    return estados[codigo] || "Desconocido";
}

function Clima() {

    const [clima, setClima] = useState(null);

    useEffect(() => {

        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=-33.4489&longitude=-70.6693&current=temperature_2m,weather_code"
        )
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            setClima(datos.current);
        })
        .catch((error) => {
            console.error("Error obteniendo clima:", error);
        });

    }, []);

    return (
        <section className="clima">

            <h2>Clima</h2>

            {clima ? (
                <div>
                    <p>
                        Temperatura: {clima.temperature_2m} °C
                    </p>

                    <p>
                        Estado: {obtenerDescripcionClima(clima.weather_code)}
                    </p>
                </div>
            ) : (
                <p>Cargando clima...</p>
            )}

        </section>
    );
}

export default Clima;