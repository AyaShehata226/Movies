import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHeart, FaTrash } from "react-icons/fa";
import { removeFromFavorites } from "../../store/slices/fav";

const Favorites = () => {
  const favorites = useSelector((state) => state.fav.movies);
  const dispatch = useDispatch();

  const handleDeleteMovie = (movie) => {
    // Dispatch an action to remove the movie from favorites
    dispatch(removeFromFavorites(movie.id));
  };

  return (
    <>
      <div className="row mt-5">
        {favorites.map((mov) => (
          <Card
            key={mov.id}
            style={{ width: "18rem" }}
            className="col-lg-3 ms-5 mt-5 mb-5"
          >
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{mov.original_title}</Card.Title>
              <Card.Text>{mov.overview}</Card.Text>
              <Button variant="danger" onClick={() => handleDeleteMovie(mov)}>
                <FaTrash />
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Favorites;
