import './dia_seis.css';
import {useEffect, useState} from "react";
import axios from "axios";

const DiaSeis = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkBoxes = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        const boxElements = document.querySelectorAll('.box6');

        boxElements.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('show6');
            } else {
                box.classList.remove('show6');
            }
        });

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMorePokemon();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkBoxes);
        checkBoxes();

        return () => {
            window.removeEventListener('scroll', checkBoxes);
        }
    }, [checkBoxes]);

    const loadMorePokemon = async () => {
        try {
            const response = await axios.get(nextUrl);
            const newPokemonList = response.data.results;
            setNextUrl(response.data.next);

            const updatedPokemonList = await Promise.all(newPokemonList.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    image: pokemonResponse.data.sprites.other.dream_world.front_default,
                    type: pokemonResponse.data.types[0].type.name,
                };
            }));

            setPokemonList(prevList => [...prevList, ...updatedPokemonList]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case "normal":
                return "#A8A878";
            case "fighting":
                return "#C03028";
            case "flying":
                return "#A890F0";
            case "poison":
                return "#A040A0";
            case "ground":
                return "#E0C068";
            case "rock":
                return "#B8A038";
            case "bug":
                return "#A8B820";
            case "ghost":
                return "#705898";
            case "steel":
                return "#B8B8D0";
            case "fire":
                return "#F08030";
            case "water":
                return "#6890F0";
            case "grass":
                return "#78C850";
            case "psychic":
                return "#F84888";
            case "ice":
                return "#98D8D8";
            case "dragon":
                return "#7038F8";
            case "dark":
                return "#705848";
            case "fairy":
                return "#EE99AC";
            case "unknown":
                return "#A0A0A0";
            case "shadow":
                return "#696969";
            case "electric":
                return "#F8D030";
            default:
                return "#000000";  // Color negro por defecto
        }
    };

    return (

        <section className={"section"}>
            <center><h1>Scroll Animation / Animación de desplazamiento</h1></center>
            {pokemonList && pokemonList.map((pokemon, index) => (
                <div className="box6" style={{backgroundColor: getTypeColor(pokemon.type)}}
                     key={pokemon.name + index}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.image} alt={pokemon.name} width={"30%"}/>
                </div>
            ))}
        </section>

    );
};

export default DiaSeis;
