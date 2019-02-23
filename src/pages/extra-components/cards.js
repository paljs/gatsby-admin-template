import { Row, Col, Card, CardBody } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function Cards() {
  return (
    <>
      <SEO title="Cards" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <header>Simple card</header>
            <CardBody>Hello Card component this body of card</CardBody>
            <footer>Footer</footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card size="XS">
            <header>Card with size</header>
            <CardBody>
              Hello Card component this body of card Hello Card component this
              body of card Hello Card component this body of card Hello Card
              component this body of card
            </CardBody>
            <footer>Footer</footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card status="Info">
            <header>Status card</header>
            <CardBody>Hello Card component this body of card</CardBody>
            <footer>Footer</footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card status="Primary">
            <header>Status card</header>
            <CardBody>Hello Card component this body of card</CardBody>
            <footer>Footer</footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card status="Primary" accent="Info">
            <header>Status and accent card</header>
            <CardBody>Hello Card component this body of card</CardBody>
            <footer>Footer</footer>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card accent="Info">
            <header>Card with accent</header>
            <CardBody>Hello Card component this body of card</CardBody>
            <footer>Footer</footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}
