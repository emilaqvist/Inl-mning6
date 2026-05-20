import { useState } from 'react'
import AddMovieForm from './components/addMovieForm/AddMovieForm'
import Header from './components/Header/Header'
import AddedMoviesSection from './components/AddedMoviesSection/AddedMoviesSection'
import Movie from './components/Movie/Movie'
function App() {

  const [movies, setMovies] = useState([]);

  const addMovieToList = movie => {
    setMovies([...movies, movie]);
  }

  const removeMovie = (indexToRemove) => {
    const updatedMovies = movies.filter(
      (movie, index) => index !== indexToRemove
    );
    setMovies(updatedMovies);
  }

  const sortAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMovies(sortedMovies);
  }
  const sortByRating = () => {
    const sortedMovies = [...movies].sort(
      (a, b) => b.rating - a.rating
    );
    setMovies(sortedMovies);
  }

  return (
    <>
      <div className='container'>
        <Header />
        <AddMovieForm addMovie={addMovieToList} />
        <AddedMoviesSection
          movies={movies}
          removeMovie={removeMovie}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg me-3"
          onClick={sortAlphabetically}
        >
          Alfabetisk Ordning
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={sortByRating}
        >
          Betygsordning
        </button>
      </div>
    </>
  );
}


export default App
