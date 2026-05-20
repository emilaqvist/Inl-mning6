export default function Movie({ movie, index, removeMovie }) {

    return (
        <li>
            <p>{movie.title}</p>
            <button className="btn btn-danger" onClick={() => removeMovie(index)}>
                Ta Bort Film
            </button>
        </li>
    );
}