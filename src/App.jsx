import { Game } from "./pages/Game";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start";
import { Characters } from "./pages/Characters";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Menu />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/game"
        element={<Game />}
      />
      <Route
        path="/start"
        element={<Start />}
      />
      <Route
        path="/characters"
        element={<Characters />}
      />
    </Routes>
  );
}

export default App;
