import './dia_cinco.css';
import {useEffect, useState} from "react";

export const DiaCinco = () => {

    const [load, setLoad] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoad(prevLoad => (prevLoad + 1 > 101 ? 101 : prevLoad + 1));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <center><h1>Blurry Loading / Carga borrosa</h1></center>
            <section className={"section"}>
                <div className={"bg"}
                     style={{
                         background: 'url("https://random.imagecdn.app/500/150") no-repeat  center center/cover',
                         filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
                     }}></div>
                <div className={"loading-text"}
                     style={{opacity: scale(load, 0, 100, 1, 0)}}>
                    {load <= 100 ? `${load}%` : ''}
                </div>
            </section>
        </>

    )
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

export default DiaCinco;
