import { useEffect, useRef, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("Ingrese una pelicula");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}

function App() {
  const [query, setQuery] = useState("");
  const { search, updateSearch, error } = useSearch();

  const handleChange = (e) => {
    updateSearch(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            name="query"
            value={search}
            type={"text"}
            placeholder={"Avengers, toy story, drango ball..."}
          ></input>
          <button onClick={handleSubmit} type="submit">
            Buscar pelicula
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </header>
      <main>
        <Movies updateSearch={search} />
      </main>
    </div>
  );
}

export default App;
