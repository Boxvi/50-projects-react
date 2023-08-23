import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section className="sectiones">
            <br/><span></span><br/><br/><br/>
            <h3 style={{textAlign: "center"}}>Bienvenidos a mi Portafolio</h3>
            <br/>
            <h3 style={{textAlign: "center"}}>Boris Quizhpe Desarrollador de Software </h3>
            <br/>
            <h3 style={{textAlign: "center"}}><i className="bi bi-telephone"></i>Contacto: +593996474990</h3>
            <br/>
            <div style={{textAlign: "center"}}>
                <button style={{backgroundColor: "aqua", borderRadius: "15px"}}><Link to={"/dia_siete"}>Nuevo Dia Click
                    AKI</Link></button>

            </div>
        </section>
    );
};

export default Home;

/*

            {/*<h2>BORIS QUIZHPE DESARROLLADOR DE SOFTWARE</h2
/*<p >Centrame</p>
 */
