import './dia_nueve.css'
import {useState} from "react";
import SoundButton from "./SoundButton";

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const DiaNueve = () => {
    const [currentSound, setCurrentSound] = useState(null);

    const playSound = (sound) => {
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }

        const audio = new Audio(`https://50projects50days.com/projects/sound-board/sounds/${sound}.mp3`);
        setCurrentSound(audio);
        audio.play();
    };


    return (
        <section className={"section"}>
            <div id="buttons">
                {sounds.map((sound, index) => (
                    <SoundButton key={index} sound={sound} playSound={playSound}/>
                ))}
            </div>

            <div className="buttons9"></div>
        </section>
    )

}

export default DiaNueve



