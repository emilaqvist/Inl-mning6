import { useState } from "react";

export default function AddMovieForm({ addMovie }) {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const collectAnswer = () => {
    if (title === "" || rating === "") {
      window.alert("Du måste fylla i allt");
      return;
    }
    console.log(title + " " + rating);
    const movieObject = {
      title: title,
      rating: rating
    }
    addMovie(movieObject);

    setTitle("");
    setRating("");
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="movie-title"
              placeholder="Titel här plz..."
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="movie-title">Titel</label>
          </div>
          <select
            className="form-control mb-3"
            name="ratings"
            id="ratings"
            value={rating}
            onChange={e => setRating(e.target.value)}
          >
            <option value="">Välj betyg</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={collectAnswer} type="button" className="btn btn-primary btn-lg">Spara</button>
        </div>
      </div>
    </>
  );
}