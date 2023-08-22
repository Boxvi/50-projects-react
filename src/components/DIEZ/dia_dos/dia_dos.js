import {useEffect, useState} from "react";
import axios from "axios";
import '../dia_uno/dia_uno.css';

export const DiaDos = () => {

    const [resultados, setResultados] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const resultadorPorPagina = 15;
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(apiURL);
            setResultados(response.data);
        };
        fetchData();
    }, []);

    const circles = Array.from(
        {length: Math.ceil(resultados.length / resultadorPorPagina)},
        (_, index) => index + 1);

    const handleNext = () => {
        setPaginaActual((prev) => (prev < circles.length ? prev + 1 : circles.length));
    };

    const handlePrev = () => {
        setPaginaActual((prev) => (prev > 1 ? prev - 1 : 1));
    };

    useEffect(() => {
        const progress = document.getElementById('progress');
        const actives = document.querySelectorAll('.circle.active');

        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    }, [paginaActual, circles]);

    return (
        <>
            <center><h1>Progress Steps / Pasos de progreso</h1></center>
            <div className="secciones2">
                <div className="container2">
                    <div className="progress-container">
                        <div className="progress" id="progress"></div>
                        {circles.map((circle, index) => (
                            <div key={index + 1} className={`circle ${circle <= paginaActual ? 'active' : ''}`}>
                                {index + 1}</div>
                        ))}

                    </div>

                    <button className="btn"
                            id="anterior"
                            key="anterior"
                            onClick={handlePrev}
                            disabled={paginaActual === 1}
                    >ANTERIOR
                    </button>

                    <button
                        className="btn"
                        id="siguiente"
                        key="siguiente"
                        onClick={handleNext}
                        disabled={paginaActual === Math.ceil(resultados.length / resultadorPorPagina)}
                    >SIGUIENTE
                    </button>
                </div>
            </div>
        </>
    )

};

export default DiaDos;

/*
const [resultados, setResultados] = useState([]);
const [currentActive, setCurrentActive] = useState(1);

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(apiURL);
        setResultados(response.data);
    };
    fetchData();
}, []);


const handleNext = () => {
    setCurrentActive((prev) => (prev < circles.length ? prev + 1 : circles.length));
};

const handlePrev = () => {
    setCurrentActive((prev) => (prev > 1 ? prev - 1 : 1));
};

useEffect(() => {
    const progress = document.getElementById('progress');
    const actives = document.querySelectorAll('.circle.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
}, [currentActive, circles]);

return (
    <div className="container">
        <div className="progress-container">
            <div className="progress" id="progress"></div>
            {circles.map((circle) => (
                <div key={circle} className={`circle ${circle <= currentActive ? 'active' : ''}`}>
                    {circle}
                </div>
            ))}
        </div>

        <button className="btn" id="prev" onClick={handlePrev} disabled={currentActive === 1}>
            Prev
        </button>
        <button className="btn" id="next" onClick={handleNext} disabled={currentActive === circles.length}>
            Next
        </button>
    </div>
);
};

export default DiaDos;

*/
