import { useState, useEffect, useRef } from 'react';
import musicFile from '../assets/audio/Daddy Castle.mp3';  // Ruta del archivo de música

export const SettingsPage = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);  // Estado para saber si la música está sonando
  const audioRef = useRef(new Audio(musicFile));  // Referencia al objeto de audio

  // Manejar el ciclo infinito de la música
  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2;

  
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

  // Función para alternar entre reproducir y pausar la música
  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white p-8 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">Ajustes</h2>
        <button className="text-2xl" onClick={onClose}>
          X
        </button>
      </div>
      <div className="mt-4">
        <p className="text-lg">Versión del juego: 0.1</p>
        <hr className="my-4 border-gray-600" />
        <div className="flex justify-between items-center my-4">
          <p className="text-xl">Música</p>
          <button className="text-2xl" onClick={toggleMusic}>
            {isPlaying ? '🎶' : '🎵'}  {/* Cambiar el ícono según el estado */}
          </button>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-xl">Efectos de sonido</p>
          <button className="text-2xl">🔊</button>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-xl">Idioma</p>
          <button className="text-xl">Español &gt;</button>
        </div>
        <div className="my-4 p-4 border-2 border-white rounded-lg flex justify-between items-center">
          <p className="text-xl flex items-center">
            <span className="mr-2">☣️</span>
            Remover Anuncios
          </p>
          <p className="text-xl">€1.29</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-4 text-lg">Conectado a Correo Electrónico</p>
        <button className="bg-gray-700 p-2 rounded-lg text-lg">Más Información</button>
      </div>
    </div>
  );
};
