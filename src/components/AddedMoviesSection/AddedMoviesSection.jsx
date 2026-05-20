import Movie from "../Movie/Movie";

export default function AddedMoviesSection({ movies, removeMovie }) {

    return (
        <>
            <div className="card">
                <h2>Dina Filmer</h2>
                <div className="card-body">
                    <ul>
                        {movies.map((movie, index) => (
                            <Movie
                                movie={movie}
                                index={index}
                                removeMovie={removeMovie}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}