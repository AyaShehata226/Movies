import React from "react";
import { useParams } from "react-router-dom";
import Movies from "./Movies";
import { useEffect, useState } from "react";
import instance from "../axiosConfig/instance";
const Details = () => {
  const { id } = useParams();
  const [move, setMove] = useState([]);
  const [geners, setGeners] = useState([]);
  useEffect(() => {
    async function getMove() {
      try {
        const res = await instance.get(`/movie/${id}`, {
          // params: { api_key: "04b2c0ab702b8e25b551aaab1c1a7d0b" },
        });
        console.log(res.data);
        // let geners = res.data.genres;
        setGeners(res.data.geners);
        setMove(res.data);
        // console.log(move);
      } catch (err) {
        console.log(err);
      }
      // getMove();
    }
    getMove();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-md-5 me-5">
            <img
              className=""
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${move.poster_path}`}
            />
          </div>
          <div className="col-md-5 bg-gray" style={{}}>
            <p className="fs-3">
              Name:<span className="ms-2 fs-5">{move.original_title}</span>
            </p>
            <p className="fs-3">
              overview:<span className="ms-2 fs-5">{move.overview}</span>
            </p>
            {/* <div>
              {genres.length > 0 ? (
                <>
                  {geners.map((gener) => (
                    <p key={gener.id}>{gener.name}</p>
                  ))}
                </>
              ) : (
                <p>No genres available.</p>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
