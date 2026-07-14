import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Login from "./paginas/Login";
import Tools from "./paginas/Tools";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tools" element={<Tools />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;