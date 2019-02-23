import { Row, Col, Card, CardBody, Alert } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

const alert = () => {
  return (
    <>
      <SEO title="Alert" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12}>
          <Card>
            <header>Alert Status</header>
            <CardBody>
              <Alert closable status="Success">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Danger">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Primary">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Info">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Warning">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Active">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Disabled">
                You have been successfully authenticated!
              </Alert>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Alert Accent</header>
            <CardBody>
              <Alert accent="Danger" status="Success">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Primary" status="Danger">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Info" status="Primary">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Warning" status="Info">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Danger" status="Warning">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Disabled" status="Active">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Success" status="Disabled">
                You have been successfully authenticated!
              </Alert>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Alert Outline</header>
            <CardBody>
              <Alert outline="Success">
                You have been successfully authenticated!
              </Alert>
              <Alert outline="Danger">
                You have been successfully authenticated!
              </Alert>
              <Alert outline="Primary">
                You have been successfully authenticated!
              </Alert>
              <Alert outline="Info">
                You have been successfully authenticated!
              </Alert>
              <Alert outline="Warning">
                You have been successfully authenticated!
              </Alert>
              <Alert outline="Active">
                You have been successfully authenticated!
              </Alert>
              <Alert outline="Disabled">
                You have been successfully authenticated!
              </Alert>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Alert Size</header>
            <CardBody>
              <Alert status="Danger" size="XXS">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Primary" size="SM">
                You have been successfully authenticated!
              </Alert>

              <Alert status="Success" size="XXL">
                You have been successfully authenticated!
              </Alert>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default alert;
