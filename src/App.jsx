import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Tools from "./paginas/Tools";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;