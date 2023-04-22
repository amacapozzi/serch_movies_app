import { useEffect, useState } from "react";

export function useMovies({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleGetMovies = async () => {
      try {
        const res = await window.fetch(
          `https://www.omdbapi.com/?apikey=36a28636&s=${query}`
        );
        const data = await res.json();
        console.log(data);
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleGetMovies();
  }, [query]);
  return { movies, loading };
}
