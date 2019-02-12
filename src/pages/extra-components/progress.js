import { Row, Col, Card, Actions, Progress } from 'rnsc';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
//import Layout from '../../components/Layout';

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;

export default function ProgressPage() {
  const [value, setValue] = useState(25);
  const [status, setStatus] = useState('Danger');

  useEffect(() => {
    if (value <= 25) {
      setStatus('Danger');
    } else if (value <= 50) {
      setStatus('Warning');
    } else if (value <= 75) {
      setStatus('Info');
    } else {
      setStatus('Success');
    }
  }, [value]);

  const setProgressValue = newValue => {
    setValue(Math.min(Math.max(newValue, 0), 100));
  };

  const style = { marginBottom: '1rem' };
  return (
    <>
      <Row>
        <Col xs={12}>
          <Card>
            <header>Progress Status</header>
            <div className="card-body">
              <Progress style={style} value={20} status="Primary">
                Primary
              </Progress>
              <Progress style={style} value={40} status="Success">
                Success
              </Progress>
              <Progress style={style} value={60} status="Danger">
                Danger
              </Progress>
              <Progress style={style} value={80} status="Info">
                Info
              </Progress>
              <Progress style={style} value={100} status="Warning">
                Warning
              </Progress>
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Progress Bar Size</header>
            <div className="card-body">
              <Progress style={style} value={20} size="XS">
                XS
              </Progress>
              <Progress style={style} value={40} size="SM">
                SM
              </Progress>
              <Progress style={style} value={60} size="MD">
                MD
              </Progress>
              <Progress style={style} value={80} size="LG">
                LG
              </Progress>
              <Progress style={style} value={100} size="XL">
                XL
              </Progress>
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Progress Bar Value</header>
            <div className="card-body">
              <Progress style={style} value={20} displayValue />
              <Progress style={style} value={40}>
                Custom value
              </Progress>
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Progress Bar Interactive</header>
            <div className="card-body">
              <Container>
                <Actions
                  size="MD"
                  actions={[
                    {
                      icon: 'icon ion-ios-arrow-down',
                      events: { onClick: () => setProgressValue(value - 25) }
                    }
                  ]}
                />
                <Progress
                  className="bar"
                  value={value}
                  status={status}
                  displayValue
                />
                <Actions
                  size="MD"
                  actions={[
                    {
                      icon: 'icon ion-ios-arrow-up',
                      events: { onClick: () => setProgressValue(value + 25) }
                    }
                  ]}
                />
              </Container>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
