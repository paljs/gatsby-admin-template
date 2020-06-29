import { Row, Col, Card, CardBody, FlipCard, CardHeader, CardFooter } from '@paljs/ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function FlipCards() {
  return (
    <>
      <SEO title="FlipCards" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <FlipCard>
            <Card>
              <CardHeader>Front</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
            <Card>
              <CardHeader>Back</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </FlipCard>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <FlipCard button="bottom">
            <Card status="Info" accent="Primary">
              <CardHeader>Front</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
            <Card status="Primary" accent="Info">
              <CardHeader>Back</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </FlipCard>
        </Col>
      </Row>
    </>
  );
}
