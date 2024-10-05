import { InitialLayout } from "../layouts/InitialLayout";
import backgroundMusic from "../sounds/Mogeko Yankee.mp3"; // Ruta al archivo mp3
import { useEffect, useRef } from "react";
import Settingicon from "../assets/others/configuration.svg";
import './Menu.css'; // Importa el CSS

export const Menu = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleAudioPlay = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1; // Ajusta el volumen
        audioRef.current.play().catch((error) => {
          console.warn("El audio no se pudo reproducir automáticamente:", error);
        });
      }
    };

    window.addEventListener("click", handleAudioPlay, { once: true });

    return () => {
      window.removeEventListener("click", handleAudioPlay);
    };
  }, []);

  return (
    <InitialLayout title="Rector Simuleitor">
      <div className="menu-container">
        <h1 className="menu-title">Rector Simuleitor</h1>
        <button className="menu-button">Continuar</button>
        <button className="menu-button">Nueva Partida</button>
        <button className="menu-button">Mejores Records</button>
        <div className="buttons-row">
          <button className="small-button">Iniciar Sesion</button>
          <button className="small-button">Salir</button>
        </div>
        <div className="settings-icon">
          <img className="settings-image" src={Settingicon} alt="Configuración" />
        </div>
      </div>
      <div className="bottom-gif"></div> {/* Div que contiene el GIF en la parte inferior */}
      <audio ref={audioRef} src={backgroundMusic} loop />
    </InitialLayout>
  );
};
