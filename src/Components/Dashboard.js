import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Overview</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Sales: $10,000</ListGroup.Item>
              <ListGroup.Item>Expenses: $5,000</ListGroup.Item>
              <ListGroup.Item>Profit: $5,000</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Activity</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>New sign ups: 25</ListGroup.Item>
              <ListGroup.Item>New orders: 10</ListGroup.Item>
              <ListGroup.Item>Support tickets: 5</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;