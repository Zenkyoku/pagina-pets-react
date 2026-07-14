import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import SearchSection from "../componentes/SearchSection";
import ExampleSection from "../componentes/ExampleSection";
import StatsSection from "../componentes/StatsSection";
import FeaturedPetsSection from "../componentes/FeaturedPets";
import "../css/style.css";

function Home() {
    return (
        <div className="contenedor-principal">
            <Navbar />
            <Hero />
            <SearchSection />
            <ExampleSection />
            <StatsSection />
            <FeaturedPetsSection />
        </div>
    );
}

export default Home;