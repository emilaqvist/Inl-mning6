export default function Movie({ movie, index, removeMovie }) {

    const ratingAmount = [];
    for (let i = 0; i < movie.rating; i++) {
        ratingAmount.push(<img key={i} src="../src/assets/star.png" alt="stjärna" />);
    }

    return (
        <li className="list-group-item">
            <hr />
            <h3>{movie.title}</h3>
            {ratingAmount}
            <img src="../src/assets/delete.png" onClick={() => removeMovie(index)} />
        </li>
    );
}