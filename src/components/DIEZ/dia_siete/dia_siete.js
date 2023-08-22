import './dia_siete.css';
import {useEffect, useState} from "react";
import axios from "axios";

export const DiaSiete = () => {
    const [hoveredSide, setHoveredSide] = useState(null);
    const [data, setData] = useState({image: '', title: '', price: ''});
    const [data2, setData2] = useState({image: '', title: '', price: ''});

    useEffect(() => {
        cargarDatosUno();
        cargarDatosDos();
    }, []);

    const cargarDatosUno = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/20'); // Reemplaza esto con la URL real de la API
        const {image, title, price} = response.data;
        setData({image, title, price})
    };

    const cargarDatosDos = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/15'); // Reemplaza esto con la URL real de la API
        const {image, title, price} = response.data;
        setData2({image, title, price})
    };

    const handleMouseEnter = (side) => {
        setHoveredSide(side);
    };

    const handleMouseLeave = () => {
        setHoveredSide(null);
    };
//                         background: 'url("https://random.imagecdn.app/500/150") no-repeat  center center/cover',
    return (
        <section className={"section7"}>
            <div className={`container7 ${hoveredSide ? `hover-${hoveredSide}` : ''}`}>
                <div className={"split7 left7"}
                     style={{
                         background: 'url("https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg") no-repeat',
                         backgroundSize: 'cover'
                     }}
                     onMouseEnter={() => handleMouseEnter('left7')}
                     onMouseLeave={() => handleMouseLeave()}>
                    <h1 className={"pp"}>{data.title}</h1>
                    <h2>{data.price} $</h2>
                    <button className={"btn7"}>Comprar</button>
                </div>
                <div className={"split7 right7"}
                     style={{
                         right: 0,
                         background: 'url("https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg") no-repeat',
                         backgroundSize: 'cover'
                     }}
                     onMouseEnter={() => handleMouseEnter('right7')}
                     onMouseLeave={() => handleMouseLeave()}
                >
                    <h1 className={"pp"}>{data2.title}</h1>
                    <h2>{data2.price} $</h2>
                    <button className={"btn7"}>Comprar</button>
                </div>
            </div>
        </section>
    );
};

export default DiaSiete;
