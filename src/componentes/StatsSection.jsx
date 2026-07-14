const baseUrl = import.meta.env.BASE_URL;

function StatsSection() {
    return (
        <section className="stats" id="cartas">
            <div className="grid">
                <div className="card">
                    <img src={`${baseUrl}img/patita.png`} alt="Patita" className="patita-carta" />
                    <div className="texto-carta">
                        <h2>2009</h2>
                        <p>Total de Mascotas Actual</p>
                    </div>
                </div>
                <div className="card">
                    <img src={`${baseUrl}img/medallaa.png`} alt="Medalla" className="patita-carta" />
                    <div className="texto-carta">
                        <h2>89</h2>
                        <p>Mascotas de Logros</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default StatsSection;