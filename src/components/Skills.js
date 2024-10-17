import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container>
      <h1 className="custom-violet">My Skills</h1>
      <ListGroup>
        <ListGroup.Item>1.JavaScript</ListGroup.Item>
        <ListGroup.Item>2.Communication</ListGroup.Item>
        <ListGroup.Item>3.HTML & CSS</ListGroup.Item>
        <ListGroup.Item>4.Teamwork</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Skills;
