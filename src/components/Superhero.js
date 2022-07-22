import { Card, Container, Row, Col, Image } from "react-bootstrap";
import womanImage from "../assets/images/women.jpeg";
import React from "react";

const Superhero = () => {
  return (
    <Container>
        <br />
        <br />
        <h1>My Lecture</h1>
      <Row>
        <Col md={4} className="movieWrapper" id="superhero">
          <Card className="movieImage">
            <Image src={womanImage} alt="Woman image" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Image</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={womanImage} alt="Woman image" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Image</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={womanImage} alt="Woman image" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Image</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={womanImage} alt="Woman image" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Image</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={womanImage} alt="Woman image" className="images"/>
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Image</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="movieImage">
            <Image src={womanImage} alt="Woman image" className="images" />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Image</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Superhero;
