import { Col, Row, RevealCard, Card, CardBody } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function RevealCards() {
  return (
    <>
      <SEO title="RevealCards" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <RevealCard>
            <Card>
              <header>Front</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
            <Card>
              <header>Back</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
          </RevealCard>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <RevealCard button="bottom">
            <Card status="Info" accent="Primary">
              <header>Front</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
            <Card status="Primary" accent="Info">
              <header>Back</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
          </RevealCard>
        </Col>
      </Row>
    </>
  );
}
