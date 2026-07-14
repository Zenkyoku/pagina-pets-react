import { Link } from "react-router-dom";


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
                <Link to="/">Inicio</Link>
                <Link to="/collection">Colección</Link>
                <Link to="/expansions">Expansiones</Link>
                <Link to="/achievements">Logros</Link>
                <Link to="/tools">Herramientas</Link>
            </nav>
            <div className="profile">
                <span><Link to="/login">Iniciar Sesión</Link></span>
            </div>
        </header>
    );
}

export default Navbar;