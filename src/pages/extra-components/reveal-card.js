import { Col, Row, RevealCard, Card } from 'rnsc';
import React from 'react';
//import Layout from '../../components/Layout';

export default function RevealCards() {
  return (
    <>
      <Row>
        <Col xs={6}>
          <RevealCard>
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
          </RevealCard>
        </Col>
        <Col xs={6}>
          <RevealCard button="bottom">
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
          </RevealCard>
        </Col>
      </Row>
    </>
  );
}
