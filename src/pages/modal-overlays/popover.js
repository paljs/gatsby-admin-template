import React from 'react';
import { Row, Col, Card, Button, Tabs, Tab, Popover } from 'oah-ui';
import SEO from '../../components/SEO';

export default function PopoverPage() {
  return (
    <>
      <SEO title="Popover" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12} md={6}>
          <Card size="XS">
            <header>Popover Position</header>
            <div className="card-body" id="popoverScroll">
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="left"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Left</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="right"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Right</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Top</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="bottom"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Bottom</Button>
              </Popover>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card size="XS">
            <header>Simple Popovers</header>
            <div className="card-body popoverScroll">
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="click"
                placement="top"
                overlay={
                  <Tabs activeIndex={0} fullWidth>
                    <Tab title="Tab 1" icon="icon ion-ios-home" responsive>
                      Content 1
                    </Tab>
                    <Tab
                      title="Tab 2"
                      icon="icon ion-ios-star-outline"
                      responsive
                    >
                      Content 2
                    </Tab>
                  </Tabs>
                }
              >
                <Button fullWidth>on click</Button>
              </Popover>
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                overlay={
                  <Card className="popover-card">
                    <header>Hello!</header>
                    <div className="card-body">Hello, how are you today?</div>
                  </Card>
                }
              >
                <Button fullWidth>on hover</Button>
              </Popover>
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="focus"
                placement="bottom"
                overlay={
                  <Card className="popover-card">
                    <header>Hello!</header>
                    <div className="card-body">Hello, how are you today?</div>
                  </Card>
                }
              >
                <Button fullWidth>on focus</Button>
              </Popover>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
