import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  ButtonInput,
  ButtonLink
} from 'oah-ui';
import { navigate } from 'gatsby';
import React from 'react';
import SEO from '../../components/SEO';

const style = { marginBottom: '1.5rem' };

export default function ButtonPage() {
  const status = [
    'Info',
    'Success',
    'Danger',
    'Primary',
    'Warning',
    'Secondary'
  ];
  return (
    <>
      <SEO title="Button" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12}>
          <Card>
            <header>Button Hero</header>
            <CardBody>
              <Row>
                {status.map(state => (
                  <Col key={state} style={style} xs>
                    <Button fullWidth hero status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Colors</header>
            <CardBody>
              <Row>
                {status.map(state => (
                  <Col key={state} style={style} xs>
                    <Button fullWidth status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Outline</header>
            <CardBody>
              <Row>
                {status.map(state => (
                  <Col key={state} style={style} xs>
                    <Button fullWidth outline status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Size</header>
            <CardBody>
              <Row middle="xs">
                {['XS', 'SM', 'MD', 'LG'].map(size => (
                  <Col key={size} style={style} xs>
                    <Button fullWidth size={size}>
                      {size}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Shape</header>
            <CardBody>
              <Row middle="xs">
                {['Rectangle', 'SemiRound', 'Round'].map(shape => (
                  <Col key={shape} style={style} xs>
                    <Button fullWidth shape={shape}>
                      {shape}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Elements</header>
            <CardBody>
              <Row middle="xs">
                <Col style={style} xs>
                  <Button fullWidth shape="Rectangle">
                    Button
                  </Button>
                </Col>
                <Col style={style} xs>
                  <ButtonInput
                    fullWidth
                    shape="Rectangle"
                    type="button"
                    value="Input button"
                  />
                </Col>
                <Col style={style} xs>
                  <ButtonInput
                    fullWidth
                    shape="Rectangle"
                    type="submit"
                    value="Input submit"
                  />
                </Col>
                <Col style={style} xs>
                  <ButtonLink
                    onClick={() => navigate('/')}
                    fullWidth
                    shape="Rectangle"
                  >
                    Link
                  </ButtonLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
