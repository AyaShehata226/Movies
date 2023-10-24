import React, { useEffect, useState } from "react";
import instance from "../axiosConfig/instance";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./movies.css";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../../store/slices/fav";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [resSearch, setResSearch] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const favorites = useSelector((state) => state.fav.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchPerformed) {
      fetchMovies(); // Fetch movies only when a search is performed
    } else {
      instance
        .get("/movie/popular?", {
          params: {
            page: currentPage,
          },
        })
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
      console.log(favorites);
    }
  }, [currentPage, resSearch, searchPerformed]);

  const fetchMovies = async () => {
    try {
      const response = await instance.get("/search/movie", {
        params: {
          api_key: "04b2c0ab702b8e25b551aaab1c1a7d0b",
          page: currentPage,
          query: resSearch,
        },
      });

      // setMovies(response.data.results);
      setMovies(
        response.data.results.map((movie) => ({
          ...movie,
          isRedBackground: false, // Add isRedBackground property to each movie
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleIconHeart = (movie) => {
    const updatedMovies = movies.map((mov) => {
      if (mov.id === movie.id) {
        const isMovieInFavorites = favorites.find(
          (favMovie) => favMovie.id === movie.id
        );
  
        if (!isMovieInFavorites) {
          dispatch(addToFavorites(movie));
        } else {
          // Handle the case when the movie is already in favorites
          alert("Movie already in favorites");
        }
        return {
          ...mov,
          isRedBackground: !mov.isRedBackground, // Toggle the background color
        };
      }
      return mov;
    });
    setMovies(updatedMovies);

  };
  const decreasePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const increasePage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleSearch = () => {
    setSearchPerformed(true); // Set searchPerformed to true when a search is initiated
    setCurrentPage(1);
    fetchMovies();
  };
  return (
    <>
      <div className="container">
        <div className="m-5">
          {/* <label>Search With Name : &nbsp;</label> */}
          <label className="me-3 fs-4">Name :</label>
          <input
            type="text"
            value={resSearch}
            onChange={(e) => {
              setResSearch(e.target.value);
            }}
          />
          <Button variant="primary" className="ms-3" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className="row mt-5">
          {movies.map((mov) => (
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
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate(`/details/${mov.id}`);
                  }}
                >
                  Details
                </Button>
                <span
                  onClick={() => {
                    handleIconHeart(mov);
                  }}
                >
                  <FaHeart
                    className="ms-5 test"
                    style={{
                      color: mov.isRedBackground ? "red" : "gray",
                      fontSize: "30px",
                    }}
                  />
                </span>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="mb-3"
        >
          <Button variant="primary" onClick={decreasePage}>
            prev
          </Button>
          <Button variant="primary" onClick={increasePage}>
            next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Movies;
