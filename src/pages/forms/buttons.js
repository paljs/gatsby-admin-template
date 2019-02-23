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
  return (
    <>
      <SEO title="Button" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12}>
          <Card>
            <header>Button Hero</header>
            <CardBody>
              <Row>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth hero status="Primary" shape="Rectangle">
                    Primary
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth hero status="Success" shape="Rectangle">
                    Success
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth hero status="Danger" shape="Rectangle">
                    Danger
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth hero status="Info" shape="Rectangle">
                    Info
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth hero status="Warning" shape="Rectangle">
                    Warning
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth hero status="Secondary" shape="Rectangle">
                    Secondary
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Colors</header>
            <CardBody>
              <Row>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth status="Primary" shape="Rectangle">
                    Primary
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth status="Success" shape="Rectangle">
                    Success
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth status="Danger" shape="Rectangle">
                    Danger
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth status="Info" shape="Rectangle">
                    Info
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth status="Warning" shape="Rectangle">
                    Warning
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth status="Secondary" shape="Rectangle">
                    Secondary
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Outline</header>
            <CardBody>
              <Row>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth outline status="Primary" shape="Rectangle">
                    Primary
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth outline status="Success" shape="Rectangle">
                    Success
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth outline status="Danger" shape="Rectangle">
                    Danger
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth outline status="Info" shape="Rectangle">
                    Info
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button fullWidth outline status="Warning" shape="Rectangle">
                    Warning
                  </Button>
                </Col>
                <Col style={style} xs={6} md={4} lg={2}>
                  <Button
                    fullWidth
                    outline
                    status="Secondary"
                    shape="Rectangle"
                  >
                    Secondary
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Size</header>
            <CardBody>
              <Row middle="xs">
                <Col style={style} xs={6} md={3}>
                  <Button fullWidth size="XS" shape="Rectangle">
                    X Small
                  </Button>
                </Col>
                <Col style={style} xs={6} md={3}>
                  <Button fullWidth size="SM" shape="Rectangle">
                    Small
                  </Button>
                </Col>
                <Col style={style} xs={6} md={3}>
                  <Button fullWidth size="MD" shape="Rectangle">
                    Medium
                  </Button>
                </Col>
                <Col style={style} xs={6} md={3}>
                  <Button fullWidth size="LG" shape="Rectangle">
                    Large
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Shape</header>
            <CardBody>
              <Row middle="xs">
                <Col style={style} xs={6} sm={4}>
                  <Button fullWidth shape="Rectangle">
                    Rectangle
                  </Button>
                </Col>
                <Col style={style} xs={6} sm={4}>
                  <Button fullWidth shape="SemiRound">
                    SemiRound
                  </Button>
                </Col>
                <Col style={style} xs={6} sm={4}>
                  <Button fullWidth shape="Round">
                    Round
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <header>Button Elements</header>
            <CardBody>
              <Row middle="xs">
                <Col style={style} xs={6} md={3}>
                  <Button fullWidth shape="Rectangle">
                    Button
                  </Button>
                </Col>
                <Col style={style} xs={6} md={3}>
                  <ButtonInput
                    fullWidth
                    shape="Rectangle"
                    type="button"
                    value="Input button"
                  />
                </Col>
                <Col style={style} xs={6} md={3}>
                  <ButtonInput
                    fullWidth
                    shape="Rectangle"
                    type="submit"
                    value="Input submit"
                  />
                </Col>
                <Col style={style} xs={6} md={3}>
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
