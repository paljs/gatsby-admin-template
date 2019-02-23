import { Row, Col, Card, CardBody, Search } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function SearchPage() {
  const submitHandle = value => value;
  return (
    <>
      <SEO
        title="Animated Searches"
        keywords={['OAH', 'application', 'react']}
      />
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <header>Layout Rotate Search</header>
            <CardBody>
              <Search
                submit={value => submitHandle(value)}
                type="rotate-layout"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Zoomin Search</header>
            <CardBody>
              <Search
                submit={submitHandle}
                type="modal-zoomin"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Move Search</header>
            <CardBody>
              <Search
                submit={submitHandle}
                type="modal-move"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Drop Search</header>
            <CardBody>
              <Search
                submit={submitHandle}
                type="modal-drop"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Half Search</header>
            <CardBody>
              <Search
                submit={submitHandle}
                type="modal-half"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Curtain Search</header>
            <CardBody>
              <Search
                submit={submitHandle}
                type="curtain"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Column Curtain Search</header>
            <CardBody>
              <Search
                submit={submitHandle}
                type="column-curtain"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
