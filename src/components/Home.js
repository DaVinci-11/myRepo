import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className= "text primary"> Welcome to Vince Adesa's Profile!</h1>
          <p>A third-year student pursuing a Bachelor of Science in Computer Science (BSCS).</p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
