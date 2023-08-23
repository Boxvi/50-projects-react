import './dia_ocho.css';
import {useEffect, useState} from "react";
import axios from "axios";

export const DiaOcho = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({mensaje: '', color: '', backgroundColor: ''});

    useEffect(() => {
        const labels = document.querySelectorAll('.form-control8 .label8');

        labels.forEach((label) => {
            label.innerHTML = label.innerText
                .split('')
                .map(
                    (letter, idx) =>
                        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
                )
                .join('');
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'https://reqres.in/api/login';
        const requestBody = {
            email: email,
            password: password,
        }
        try {
            const response = await axios.post(url, requestBody);
            console.log(response.data);
            setErrorMessage({
                mensaje: 'Ingreso exitoso',
                color: 'green',
                backgroundColor: '#c3f9c4',
            })
            //setData(response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage({
                    mensaje: 'Correo o contraseña incorrectos',
                    color: 'red',
                    backgroundColor: '#f9c3c3',
                });
            } else {
                setErrorMessage({
                    mensaje: 'Error en el servidor',
                    color: 'red',
                    backgroundColor: '#f9c3c3',
                });
            }
            console.error('Error:', error);
        }
    }


    return (
        <>
            <section className={"section"}>
                <h1>LOGIN</h1>
                <center><p>En este apartado se uso la api de <a href="https://reqres.in/"
                                                                target="_blank" rel="noopener noreferrer">reqres.in</a>
                    para poder probar solo ingrese los datos a continuacion
                </p>
                    <br/>
                    <p>email: eve.holt@reqres.in </p>
                    <p>contrasena: pistol</p>
                </center>
                <div className={"container8"}>
                    <h1 className={"h18"}>LOGIN</h1>
                    <form className={"form8"} onSubmit={handleSubmit}>
                        <div className="form-control8">
                            <input type={"text "}
                                   value={email}
                                   className={"input8"}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required={true}/>
                            <label className={"label8"}>CORREO</label>
                        </div>

                        <div className="form-control8">
                            <input type={"password"}
                                   className={"input8"}
                                   onChange={(e) => setPassword(e.target.value)}
                                   required={true}/>
                            <label className={"label8"}>CONTRASENA</label>
                        </div>

                        <button className={"btn8"} type={"submit"}><strong>INGRESAR</strong></button>

                        <p className={"text8"}>No tienes una cuenta? Registro</p>

                        {errorMessage && (
                            <div className="error-message" style={{
                                color: errorMessage.color,
                                backgroundColor: errorMessage.backgroundColor
                            }}>{errorMessage.mensaje}</div>
                        )}

                    </form>
                    {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
                </div>
            </section>
        </>
    );
};

export default DiaOcho;
