import {useEffect, useState} from "react";
import axios from "axios";
import "../dia_dos/dia_dos.css";
import "../dia_uno/dia_uno.css";

export const Extras = () => {

    const [resultados, setResultados] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const resultadorPorPagina = 15;
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        const obtenerPaginas = async () => {
            const response = await axios.get(apiURL);
            //const allResults = response.data;
            setResultados(response.data);
        };

        obtenerPaginas();
    }, []);

    const handlePageChange = (pageNumber) => {
        setPaginaActual(pageNumber);
    };

    // Lógica para obtener los resultados de la página actual
    const indexOfLastResult = paginaActual * resultadorPorPagina;
    const indexOfFirstResult = indexOfLastResult - resultadorPorPagina;
    const currentResults = resultados.slice(indexOfFirstResult, indexOfLastResult);


    return (

        <div className="secciones">

            {/*<div className="container">*/}
            {/*    <div className="progress-container">*/}
            {/*        <div className="progress"></div>*/}
            {/*        <div className="circle active">1</div>*/}
            {/*        <div className="circle">2</div>*/}
            {/*        <div className="circle">3</div>*/}
            {/*        <div className="circle">4</div>*/}
            {/*        <div className="circle">5</div>*/}
            {/*        <div className="circle">6</div>*/}
            {/*    </div>*/}

            {/*    <button className="btn">ANTERIOR</button>*/}
            {/*    <button className="btn">SIGUIENTE</button>*/}
            {/*</div>*/}

            <ul>
                {currentResults.map((result) => (
                    <li key={result.id}>{result.title}</li>

                ))}
            </ul>


            {Array.from(
                {length: Math.ceil(resultados.length / resultadorPorPagina)},
                (_, index) => index + 1).map((pagina) => (
                <button className="btn" key={pagina} onClick={() => handlePageChange(pagina)}>
                    {pagina}
                </button>
            ))}

        </div>


    );
}

export default Extras;

// return (
//     <div className="secciones">
//         <div className="container">
//
//             <div className="progress-container">
//                 <div id="progress" className="progress"></div>
//                 {Array.from({length: Math.ceil(results.length / resultsPerPage)}, (_, index) => index + 1).map((page) => (
//                     <div
//                         key={page}
//                         className={`circle ${currentPage === page ? 'active' : ''}`}
//                         data-page={page}
//                     >
//                         {page}
//                     </div>
//                 ))}
//             </div>
//
//             <button id="prev" className="btn"
//                     onClick={handlePrevClick} disabled={currentPage === 1}>
//                 ANTERIOR
//             </button>
//
//             <button
//                 id="next" className="btn"
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === Math.ceil(results.length / resultsPerPage)}
//             >
//                 SIGUIENTE
//             </button>
//
//
//         </div>
//     </div>
// );

/*
        //
        // setPaginaActual(pageNumber);
        //
        circles.forEach((circle, idx) => {
            if (idx < paginaActiva) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });

        // console.log(paginaActiva)

        //
        const actives = document.querySelectorAll('.active');
        //
        // progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

        //console.log(actives)

        //
        // circles.forEach((circle, idx) => {
        //
        //     if (idx < paginaActual) {
        //         circle.classList.add('active');
        //     }
        //
        //     //circle.classList.add('active');
        //     console.log(idx < paginaActual)
        // });

        //console.log(actives.length)

        // progress.style.width = ((actives.length - 1) / (resultados.length - 1)) * 100 + '%';
        //
        // if(pa ){
        //
        // }else{
        //
        // }
 */
