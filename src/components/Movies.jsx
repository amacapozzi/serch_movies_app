import { useMovies } from "../hooks/useMovies";
import responseMovies from "../mocks/with-movies.json";

export default function Movies({ updateSearch }) {
  const { movies, loading } = useMovies({ query: updateSearch });

  return (
    <ul className="movies">
      {loading && <p className="text-loading">Buscando...</p>}
      {movies?.map((movie) => (
        <li className="movie" key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

export const NoMovies = () => {
  return <p>No se encontraron peliculas para esta busqueda</p>;
};
