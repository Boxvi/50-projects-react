import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import DiaUno from "./components/dia_uno/dia_uno";
import SideBar from "./sidebar/SideBar";
import {DiaDos} from "./components/dia_dos/dia_dos";

function App() {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dia_uno' element={<DiaUno/>}/>
                <Route path='/dia_dos' element={<DiaDos/>}/>
            </Routes>
        </BrowserRouter>


    )
}

export default App;
/*
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <SideBar/>
    //         <App/>
    //     </BrowserRouter>
    // </React.StrictMode>
 */
