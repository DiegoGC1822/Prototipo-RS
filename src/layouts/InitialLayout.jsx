import { useState, useEffect, useRef } from 'react';
import un from "../assets/backgrounds/university-night.svg";
import conf from "../assets/others/configuration.svg";
import musicFile from '../assets/audio/Daddy Castle.mp3';  // Ruta del archivo de música
import { SettingsPage } from "../pages/SettingsPage";

export const InitialLayout = ({ tittle, children, confb, ret, mt }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);  // Estado para controlar si la música está sonando
  const audioRef = useRef(new Audio(musicFile));  // Referencia del objeto de audio

  // Efecto para manejar la reproducción de música
  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2;  // Ajustar el volumen al 20%

    if (isPlaying) {
      audio.play();
      audio.loop = true;  // Repetir en bucle
    } else {
      audio.pause();
    }

    // Limpiar el audio cuando el componente se desmonta
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  // Función para alternar la música desde cualquier parte de la web
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${un})`,
      }}
    >
      <h1 className="mt-16 text-center font-p text-8xl text-white">{tittle}</h1>
      <div
        className="flex h-[60%] w-[40%] flex-col items-center"
        style={{ marginTop: mt }}
      >
        {children}
      </div>

      {/* Mostrar página de configuración */}
      {showSettings && (
        <SettingsPage
          onClose={() => setShowSettings(false)}
          isPlaying={isPlaying}
          toggleMusic={toggleMusic}
        />
      )}

      {/* Botón de configuración */}
      {confb && (
        <div
          className="absolute bottom-5 right-10 rounded-3xl bg-[#d77b74] p-2 transition-colors duration-300 hover:bg-[#b95f5b] cursor-pointer"
          onClick={() => setShowSettings(true)}
        >
          <img src={conf} alt="configuration" className="h-[50px] w-[50px]" />
        </div>
      )}

      {ret && (
        <button className="absolute bottom-5 left-10 bg-[#d77b74] p-4 font-p text-2xl text-white">
          Volver
        </button>
      )}
    </div>
  );
};
