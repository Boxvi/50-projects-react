import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import DiaUno from "./components/DIEZ/dia_uno/dia_uno";
import SideBar from "./sidebar/SideBar";
import {DiaDos} from "./components/DIEZ/dia_dos/dia_dos";
import DiaTres from "./components/DIEZ/dia_tres/dia_tres";
import Extras from "./components/extras/extras";
import DiaCuatro from "./components/DIEZ/dia_cuatro/dia_cuatro";
import Television from "./components/television/television";
import DiaCinco from "./components/DIEZ/dia_cinco/dia_cinco";
import DiaSeis from "./components/DIEZ/dia_seis/dia_seis";
import {DiaSiete} from "./components/DIEZ/dia_siete/dia_siete";
import DiaOcho from "./components/DIEZ/dia_ocho/dia_ocho";

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
                <Route path='/dia_ocho' element={<DiaOcho/>}/>
            </Routes>
        </BrowserRouter>


    )
}

export default App;
