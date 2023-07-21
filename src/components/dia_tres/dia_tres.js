import './dia_tres.css';
import {useEffect, useState} from "react";
import axios from "axios";


export const DiaTres = () => {

    const [resultados, setResultados] = useState({});
    const apiURL = 'https://random-data-api.com/api/users/random_user';
    //const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(apiURL);
            setResultados(response.data);
        };
        fetchData();
    }, []);

    const handleOpen = () => {
        const container = document.querySelector('.container3');
        container.classList.add('show-nav')
    }

    const handleClose = () => {
        const container = document.querySelector('.container3');
        container.classList.remove('show-nav')
    }

    return (

        <div className="secciones3">
            <div className="container3">
                <div className="circle3-container">
                    <div className="circle3">
                        <button
                            id="close"
                            key="close"
                            onClick={handleClose}
                        >
                            <i className="bi bi-x"></i>
                        </button>
                        <button
                            id="open"
                            key="open"
                            onClick={handleOpen}
                        >
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </div>

                <div className="content">
                    {resultados &&
                        <>
                            <h1>{resultados.first_name} {resultados.last_name}</h1>
                            <small>{resultados.uid}</small>
                            <br/>

                            <p>Ubicacion:</p>
                            <ul>
                                <li>Ciudad: {resultados.address.city}</li>
                                <li>Calle: {resultados.address.street_name}</li>
                                <li>Direccion: {resultados.address.street_address}</li>
                                <li>Code Zip: {resultados.address.zip_code}</li>
                                <li>Estado: {resultados.address.state}</li>
                                <li>Pais: {resultados.address.country}</li>
                            </ul>


                            <br/>

                            <h3>{resultados.id}</h3>
                            <img src={resultados.avatar} alt={resultados.id}/>
                            <br/>
                            <p>Empleo: </p>
                            <ul>
                                <li>Titulo: {resultados.employment.title}</li>
                                <li>Habilidades: {resultados.employment.key_skill}</li>
                            </ul>
                            <br/>
                            <p>Subscripciones: </p>
                            <ul>
                                <li>Plan: {resultados.subscription.plan}</li>
                                <li>Estatus: {resultados.subscription.status}</li>
                                <li>Metodo de pago: {resultados.subscription.payment_method}</li>
                                <li>Tiempo: {resultados.subscription.term}</li>
                            </ul>
                            <br/>

                        </>
                    }
                </div>
            </div>

            <nav>
                <ul>
                    <li><a><i className="bi bi-1-circle"></i>TEST 1</a></li>
                    <li><a><i className="bi bi-2-circle"></i>TEST 2</a></li>
                    <li><a><i className="bi bi-3-circle"></i>TEST 3</a></li>
                    <li><a><i className="bi bi-4-circle"></i>TEST 4</a></li>
                    <li><a><i className="bi bi-5-circle"></i>TEST 5</a></li>
                    <li><a><i className="bi bi-6-circle"></i>TEST 6</a></li>
                </ul>
            </nav>


        </div>


    );
}

export default DiaTres;
