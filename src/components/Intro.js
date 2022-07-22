import { Button, Container, Row, Col } from "react-bootstrap";

const intro = () => {
    return(
        <div className="intro">
          <Container className="text-black d-flex justify-content-center align-content-center text-center">
            <Row>
              <Col>
                <div className="title">Directory Screenshoot</div>
                <div className="title">Figma Essentials</div>
                <div className="introButton mt-4 text-center">
                    <Button variant="dark">Lihat Semua List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default intro