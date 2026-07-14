function BitacoraTable({ registros, setRegistros, setBitacoraEditando  }) {

    function eliminarBitacora(id) {
    const registrosActualizados = registros.filter(
        (registro) => registro.id !== id
    );

    setRegistros(registrosActualizados);
}

    return (
        <section className="bitacora-table">

            <h2>Bitácoras Registradas</h2>

            <table>

                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Nickname</th>
                        <th>Comentario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>

                    {registros.length === 0 ? (
                        <tr>
                            <td colSpan="4">
                                No hay bitácoras registradas.
                            </td>
                        </tr>
                    ) : (
                        registros.map((registro) => (
                            <tr key={registro.id}>
                                <td>
                                    {new Date(registro.fecha).toLocaleString()}
                                </td>

                                <td>{registro.nickname}</td>

                                <td>{registro.comentario}</td>

                                <td>
                                    <button onClick={() => setBitacoraEditando(registro)}>
                                        Editar
                                    </button>
                                    <button onClick={() => eliminarBitacora(registro.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}

                </tbody>

            </table>

        </section>
    );
}

export default BitacoraTable;