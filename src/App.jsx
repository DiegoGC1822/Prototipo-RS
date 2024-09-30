import { Game } from "./pages/Game";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Routes, Route } from "react-router-dom";

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
    </Routes>
  );
}

export default App;
