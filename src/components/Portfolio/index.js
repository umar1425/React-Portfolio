import React from "react";
import Card from "react-bootstrap/Card";

const Portfolio = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="assets/zap.jpg" />
        <Card.Body>
          <Card.Title>Zap</Card.Title>
          <Card.Text>
            Check out this cool game app that my teammates and I worked on. We
            created this app that shows video games, where to buy them at the
            best price and multiple previews. Link:
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>Take this fun quiz!</p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card>
      <Card>
        <Card.Img variant="top" src="PROJECT 2 PIC" />
        <Card.Body>
          <Card.Title>Beehive Project</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Keep track of your physical activity with this fitness application.
            https://fitnessapplication.herokuapp.com/stats
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="assets/react.gif" />
      </Card>
      <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted"></small>
          </footer>
        </blockquote>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Portfolio;
