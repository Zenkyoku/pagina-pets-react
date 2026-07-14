function RegisterTable({ registros }) {
    return (
        <section
            className="registro"
            id="tablaRegistros"
            style={{ display: registros.length > 0 ? "block" : "none" }}
        >

            <h2>Usuarios Registrados</h2>

            <div className="tabla">

                <table>

                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Edad</th>
                        </tr>
                    </thead>


                    <tbody id="cuerpoTabla">

                        {registros.map((registro, index) => (
                            <tr key={index}>
                                <td>{registro.nombre}</td>
                                <td>{registro.email}</td>
                                <td>{registro.edad}</td>
                            </tr>
                        ))}

                    </tbody>


                </table>

            </div>

        </section>
    );
}

export default RegisterTable;