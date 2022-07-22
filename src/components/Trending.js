import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import womanImage from "../assets/images/women.jpeg";
import axios from "axios";

const Trending = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        // console.log("datas => ", response.data.results)
        setmovies(response.data.results);
      });
  }, []);

  return (
    <Container>
      <br />
      <h1>TRENDING</h1>
      <br />
      <Row>
        {movies.map((result, index) => {
          return (
            <Col md={4} className="movieWrapper" id="trending" key={index}>
              <Card className="movieImage">
                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">{result.title}</Card.Title>
                    <Card.Text className="text-left">
                      {result.overview}
                    </Card.Text>
                    <Card.Text className="text-left">
                      {result.release_date}
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Trending;
