import './dia_diez.css'
import {useEffect, useState} from "react";

const DiaDiez = () => {

    const [chiste, setChiste] = useState({joke: '', setup: '', delivery: ''})

    const getChiste = async () => {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };

        const res = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es', config);

        const data = await res.json();
        
        setChiste({
            joke: data.joke,
            setup: data.setup,
            delivery: data.delivery
        })

    }

    useEffect(() => {
        getChiste();
    }, []);

    return (
        <section className={"section"}>
            <div className={"container10"}>
                <h3 className={"h310"}>CHISTES </h3>
                <div className={"joke10"}>{chiste.setup}</div>
                <div className={"joke10"}>{chiste.joke}</div>
                <div className={"joke10"}>{chiste.delivery}</div>
                <button className={"btn10"} onClick={getChiste}>Generar Otro Chiste</button>
            </div>
        </section>
    )
}

export default DiaDiez
