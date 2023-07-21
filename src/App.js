import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import DiaUno from "./components/dia_uno/dia_uno";
import SideBar from "./sidebar/SideBar";
import {DiaDos} from "./components/dia_dos/dia_dos";
import DiaTres from "./components/dia_tres/dia_tres";
import Extras from "./components/extras/extras";
import DiaCuatro from "./components/dia_cuatro/dia_cuatro";

function App() {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/extras' element={<Extras/>}/>
                <Route path='/dia_uno' element={<DiaUno/>}/>
                <Route path='/dia_dos' element={<DiaDos/>}/>
                <Route path='/dia_tres' element={<DiaTres/>}/>
                <Route path='/dia_cuatro' element={<DiaCuatro/>}/>
            </Routes>
        </BrowserRouter>


    )
}

export default App;
