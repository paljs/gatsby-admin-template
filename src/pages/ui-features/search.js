import { Row, Col, Card, Search } from 'oah-ui';
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
            <div className="card-body">
              <Search
                submit={value => submitHandle(value)}
                type="rotate-layout"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Zoomin Search</header>
            <div className="card-body">
              <Search
                submit={submitHandle}
                type="modal-zoomin"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Move Search</header>
            <div className="card-body">
              <Search
                submit={submitHandle}
                type="modal-move"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Drop Search</header>
            <div className="card-body">
              <Search
                submit={submitHandle}
                type="modal-drop"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Modal Half Search</header>
            <div className="card-body">
              <Search
                submit={submitHandle}
                type="modal-half"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Curtain Search</header>
            <div className="card-body">
              <Search
                submit={submitHandle}
                type="curtain"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Column Curtain Search</header>
            <div className="card-body">
              <Search
                submit={submitHandle}
                type="column-curtain"
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
