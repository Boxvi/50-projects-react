import './dia_cuatro.css';

export const DiaCuatro = () => {

    const handleOpen = () => {
        const search = document.querySelector('.search4');
        const input = document.querySelector('.input4');

        search.classList.toggle('active');
        input.focus();
    }

    return (
        <>
            <center><h1>Hidden Search Widget / Widget de búsqueda oculta</h1></center>
            <section className={"section"}>
                <div className={"search4"}>
                    <input type={"text"} className={"input4"} placeholder={"Buscador..."}/>
                    <button className={"btn4"} onClick={handleOpen}>
                        <i className={"i4 bi bi-search"}></i>
                    </button>
                </div>
            </section>
        </>
    )
};

export default DiaCuatro;
