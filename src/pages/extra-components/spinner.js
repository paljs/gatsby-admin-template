import { Row, Col, Card, Button, Spinner, Tabs, Tab } from 'rnsc';
import React, { useState } from 'react';
//import Layout from '../../components/Layout';

const SpinnerPage = () => {
  const [show, setShow] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const onClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const onSelect = i => {
    setShowTab(true);
    setActiveTab(i);
    setTimeout(() => {
      setShowTab(false);
    }, 5000);
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner>Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner size="XS">Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner size="SM">Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner size="MD">Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner size="LG">Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner size="XL">Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card style={{ position: 'relative' }}>
            <div className="card-body">Some card content.</div>
            <Spinner size="XXL">Loading...</Spinner>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <div className="card-body">
              <Row>
                <Col xs={6} md={4}>
                  <Button
                    onClick={onClick}
                    style={{ position: 'relative' }}
                    fullWidth
                    status="Primary"
                  >
                    Primary
                    {show && <Spinner size="MD" status="Primary" />}
                  </Button>
                </Col>
                <Col xs={6} md={4}>
                  <Button
                    onClick={onClick}
                    style={{ position: 'relative' }}
                    fullWidth
                    status="Success"
                  >
                    Primary
                    {show && <Spinner size="MD" status="Success" />}
                  </Button>
                </Col>
                <Col xs={6} md={4}>
                  <Button
                    onClick={onClick}
                    style={{ position: 'relative' }}
                    fullWidth
                    status="Danger"
                  >
                    Primary
                    {show && <Spinner size="MD" status="Danger" />}
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Tabs activeIndex={activeTab} fullWidth onSelect={i => onSelect(i)}>
              <Tab
                title="Tab 1"
                badge={{ status: 'Danger', title: '11', position: 'topStart' }}
                responsive
              >
                <div style={{ position: 'relative' }}>
                  <h1>Content 1</h1>
                  {showTab && <Spinner size="LG" status="Danger" />}
                </div>
              </Tab>
              <Tab
                title="Tab 2"
                icon="fas fa-cog"
                badge={{ status: 'Info', title: '11', position: 'bottomEnd' }}
                responsive
              >
                <div style={{ position: 'relative' }}>
                  <h1>Content 2</h1>
                  {showTab && <Spinner size="LG" status="Danger" />}
                </div>
              </Tab>
              <Tab
                title="Tab 3"
                icon="fas fa-server"
                badge={{ status: 'Success', title: '11', position: 'topStart' }}
                responsive
              >
                <div style={{ position: 'relative' }}>
                  <h1>Content 3</h1>
                  {showTab && <Spinner size="LG" status="Danger" />}
                </div>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default SpinnerPage;
