import { Col, Row, RevealCard, Card } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function RevealCards() {
  return (
    <>
      <SEO title="RevealCards" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12} md={6}>
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
        <Col xs={12} md={6}>
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
