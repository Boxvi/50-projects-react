import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import DiaUno from "./components/dia_uno/dia_uno";
import SideBar from "./sidebar/SideBar";
import {DiaDos} from "./components/dia_dos/dia_dos";
import DiaTres from "./components/dia_tres/dia_tres";
import Extras from "./components/extras/extras";
import DiaCuatro from "./components/dia_cuatro/dia_cuatro";
import Television from "./components/television/television";
import DiaCinco from "./components/dia_cinco/dia_cinco";
import DiaSeis from "./components/dia_seis/dia_seis";
import {DiaSiete} from "./components/dia_siete/dia_siete";

function App() {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/extras' element={<Extras/>}/>
                <Route path='/television' element={<Television/>}/>
                <Route path='/dia_uno' element={<DiaUno/>}/>
                <Route path='/dia_dos' element={<DiaDos/>}/>
                <Route path='/dia_tres' element={<DiaTres/>}/>
                <Route path='/dia_cuatro' element={<DiaCuatro/>}/>
                <Route path='/dia_cinco' element={<DiaCinco/>}/>
                <Route path='/dia_seis' element={<DiaSeis/>}/>
                <Route path='/dia_siete' element={<DiaSiete/>}/>
            </Routes>
        </BrowserRouter>


    )
}

export default App;
