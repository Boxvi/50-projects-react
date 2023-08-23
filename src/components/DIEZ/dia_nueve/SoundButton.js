const SoundButton = ({ sound, playSound }) => {
    return (
        <button className="btn" onClick={() => playSound(sound)}>
            {sound}
        </button>
    );
};

export default SoundButton;
