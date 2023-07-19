import './dia_uno.css'
import {useEffect, useState} from "react";
import axios from "axios";

const DiaUno = () => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        async function fetchPhotos() {
            const response = await axios.get('https://fakestoreapi.com/products');
            const initialFotos = response.data.slice(0, 10).map((photo, index) => {
                return {...photo, active: index === 0};
            });
            setFotos(initialFotos);
        }

        fetchPhotos();
    }, []);

    const handlePanelClick = (clickedPanelIndex) => {
        setFotos((prevFotos) =>
            prevFotos.map((foto, index) =>
                index === clickedPanelIndex ? {...foto, active: true} : {...foto, active: false}
            )
        );
    };

    return (

        <section>
            <div className="container">
                {fotos.map((foto, index) => (
                    <div
                        key={foto.id}
                        className={`panel ${foto.active ? 'active' : ''}`}
                        style={{backgroundImage: `url('${foto.image}')`}}
                        onClick={() => handlePanelClick(index)}
                    >


                        <h3>{foto.title}</h3>
                    </div>
                ))}
            </div>
        </section>

    );
};
export default DiaUno;
