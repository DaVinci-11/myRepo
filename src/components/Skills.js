import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container>
      <h1 className="custom-violet">My Skills</h1>
      <ListGroup>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>Communication</ListGroup.Item>
        <ListGroup.Item>HTML & CSS</ListGroup.Item>
        <ListGroup.Item>Teamwork</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Skills;
