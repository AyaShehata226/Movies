import React, { useEffect ,useState} from "react";
import instance from "../axiosConfig/instance";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { moviesAction } from "../../store/slices/movies";

const Home = () => {
    // const [movies, setMovies] = useState([]);
    // const movies = useLoaderData()
    const dispatch = useDispatch()
   const  m = useSelector((state)=>state.movies.movies);
console.log(m)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(moviesAction());
      //       .get("/movie/popular?", {
      //         params: {

      //         },
      //       })
      //       .then((res) => {
      //         setMovies(res.data.results);
      //         console.log(res.data.results);
      //       })
      //       .catch((err) => {
      //         console.error(err);
      //       });
      }, []);
    return (
        <div className="container">
           <div className="row mt-5">
          {m.map((mov) => (
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
              </Card.Body>
            </Card>
          ))}
        </div>
        </div>
    );
}

export const loader = async () => {
    try {
      const response = await instance.get("/movie/popular", {});
      return response.data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
export default Home;
