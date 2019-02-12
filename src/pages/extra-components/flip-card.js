import { Row, Col, Card, FlipCard } from 'rnsc';
import React from 'react';

export default function FlipCards() {
  return (
    <>
      <Row>
        <Col xs={6}>
          <FlipCard>
            <Card>
              <header>Front</header>
              <div className="card-body">
                Hello Card component this body of card
              </div>
              <footer>Footer</footer>
            </Card>
            <Card>
              <header>Back</header>
              <div className="card-body">
                Hello Card component this body of card
              </div>
              <footer>Footer</footer>
            </Card>
          </FlipCard>
        </Col>
        <Col xs={6}>
          <FlipCard button="bottom">
            <Card status="Info" accent="Primary">
              <header>Front</header>
              <div className="card-body">
                Hello Card component this body of card
              </div>
              <footer>Footer</footer>
            </Card>
            <Card status="Primary" accent="Info">
              <header>Back</header>
              <div className="card-body">
                Hello Card component this body of card
              </div>
              <footer>Footer</footer>
            </Card>
          </FlipCard>
        </Col>
      </Row>
    </>
  );
}
