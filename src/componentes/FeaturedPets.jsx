function FeaturedPets() {
  return (
    <section className="pets">
        <h2>EXPLORAR MASCOTAS DESTACADAS</h2>
        <div className="pet-grid">
            <div className="pet-card batalla">
                <div className="detalle-carta-pet"></div>
                <img src="/img/icono-bestia.png" alt="icono bestia" className="pet-icon" />
                <img src="/img/gurrumino-zandalari.png" alt="Gurrumino Zandalari" className="pet-card-image" />
                <h3>Gurrumino Zandalari</h3>
                <div className="pet-info">
                    <p><span>Origen:</span> <span>Batalla</span></p>
                    <p><span>Expansión:</span> <span>BFA</span></p>
                </div>
                <button className="btn-card">DETALLES</button>
            </div>
            <div className="pet-card batalla">
                <div className="detalle-carta-pet"></div>
                <img src="/img/icono-nomuerto.png" alt="icono no muerto" className="pet-icon" />
                <img src="/img/Val'kyr-nonata.png" alt="Val'kyr nonata" className="pet-card-image" />
                <h3>Val'kyr nonata</h3>
                <div className="pet-info">
                    <p><span>Origen:</span> <span>Batalla</span></p>
                    <p><span>Expansión:</span> <span>WotLK</span></p>
                </div>
                <button className="btn-card">DETALLES</button>
            </div>
            <div className="pet-card raid">
                <div className="detalle-carta-pet"></div>
                <img src="/img/icono-humanoide.png" alt="icono humanoide" className="pet-icon" />
                <img src="/img/idolo.png" alt="Idolo de Anubisath" className="pet-card-image" />
                <h3>Idolo de Anubisath</h3>
                <div className="pet-info">
                    <p><span>Origen:</span> <span>Raid</span></p>
                    <p><span>Expansión:</span> <span>Cataclysm</span></p>
                </div>
                <button className="btn-card">DETALLES</button>
            </div>
            <div className="pet-card tienda">
                <div className="detalle-carta-pet"></div>
                <img src="/img/icono-elemental.png" alt="icono elemental" className="pet-icon" />
                <img src="/img/mini-ragnaros.png" alt="Mini Ragnaros" className="pet-card-image" />
                <h3>Mini Ragnaros</h3>
                <div className="pet-info">
                    <p><span>Origen:</span> <span>Tienda</span></p>
                    <p><span>Expansión:</span> <span>Cataclysm</span></p>
                </div>
                <button className="btn-card">DETALLES</button>
            </div>
        </div>
        <footer>
            <p>&copy; 2026 WoW Pet Collector. Todos los derechos reservados.</p>
        </footer>
    </section>
  );
}

export default FeaturedPets;