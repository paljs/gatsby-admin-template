import { Row, Col, Card, Button, Tooltip } from 'rnsc';
import React from 'react';
import SEO from '../../components/SEO';

export default function TooltipPage() {
  return (
    <>
      <SEO title="Tooltip" keywords={[`OAH`, `application`, `react`]} />
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <header>Tooltip Placements</header>
            <div className="card-body">
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="left"
                content="hello"
              >
                <Button>left</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="right"
                content="hello"
              >
                <Button>right</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                content="hello"
              >
                <Button>top</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="bottom"
                content="hello"
              >
                <Button>bottom</Button>
              </Tooltip>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Tooltip With Icon</header>
            <div className="card-body">
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                icon="ion-ios-home"
              >
                <Button>icon only</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="left"
                icon="ion-ios-home"
                content="hello"
              >
                <Button>icon left</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="right"
                icon="ion-ios-home"
                content="hello"
              >
                <Button>icon right</Button>
              </Tooltip>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Tooltip Placements</header>
            <div className="card-body">
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Success"
                content="hello"
              >
                <Button>Success</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Primary"
                content="hello"
              >
                <Button>Primary</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Danger"
                content="hello"
              >
                <Button>Danger</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Info"
                content="hello"
              >
                <Button>Info</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Warning"
                content="hello"
              >
                <Button>Warning</Button>
              </Tooltip>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
