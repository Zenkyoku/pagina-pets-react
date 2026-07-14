const baseUrl = import.meta.env.BASE_URL;

function ExampleSection() {
    return (
        <section className="ejemplo">
            <h2>Ejemplo Guía de Pets</h2>
                <div className="ejemplo-anubisath">
                    <img src={`${baseUrl}img/idolo.png`} alt="Idolo de Anubisath" className="anubisath-imagen" />
                </div>
                <div className="ejemplo-grid">
                    <div className="contenedor-mapa">
                        <img src={`${baseUrl}img/ping.svg`} alt="Ping" className="ping"  title="(46.95, 7.67)" />
                    </div>
                </div>
                <div className="ejemplo-info">
                    <p>   <img src={`${baseUrl}img/icons8-rollo-mágico-50.png`} alt="Rollo Mágico" />Esta página tendrá una guía completa sobre cómo obtener esta mascota.</p>
                    <br />
                    <p><img src={`${baseUrl}img/icons8-brújula-50.png`} alt="Brújula" /> A la izquierda estará el mapa con la ubicación de la pet, npc relevante, misión asociada o ubicación de raid.</p>
                    <br />
                    <p>  <img src={`${baseUrl}img/info.png`} alt="Info" /> A la derecha estará la información relevante sobre la pet, como su origen, expansión, tipo de mascota, rareza, etc.</p>
                </div>
        </section>
    );
}

export default ExampleSection;