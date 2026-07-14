
function Navbar() {
    return (
        <header className="navbar">
            <section className="logo">
                <img src="/img/WoW_icon.svg.png" alt="Logo navegación" />
                <div className="titulo-logo">
                    <h1>WoW</h1>
                    <span>Maestro Pokewow</span>
                </div>
            </section>
            <nav>
                <a href="/">Inicio</a>
                <a href="#">Colección</a>
                <a href="#">Expansiones</a>
                <a href="#">Logros</a>
                <a href="/tools">Herramientas</a>
            </nav>
            <div className="profile">
                <span><a href="/login">Iniciar Sesión</a></span>
            </div>
        </header>
    );
}

export default Navbar;