import { Accordion, AccordionItem, Card, CardBody, Col, Row, Button, AccordionRefObject } from 'oah-ui';
import React, { useRef } from 'react';
import SEO from '../../components/SEO';

const Accordions = () => {
  const accordionRef = useRef<AccordionRefObject>(null);
  const style = { marginBottom: '1.5rem' };
  return (
    <>
      <SEO title="Accordions" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, lg: 6 }}>
          <Card>
            <header>Toggle Accordion By Button</header>
            <CardBody>
              <Row>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  <Button fullWidth onClick={() => accordionRef.current?.openAll()}>
                    openAll
                  </Button>
                </Col>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  <Button fullWidth onClick={() => accordionRef.current?.closeAll()}>
                    closeAll
                  </Button>
                </Col>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  <Button fullWidth onClick={() => accordionRef.current?.open(0)}>
                    open first
                  </Button>
                </Col>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  <Button fullWidth onClick={() => accordionRef.current?.close(0)}>
                    close first
                  </Button>
                </Col>
                <Col style={style} breakPoint={{ xs: 12, lg: 4 }}>
                  <Button fullWidth onClick={() => accordionRef.current?.toggle(0)}>
                    toggle first
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Accordion ref={accordionRef}>
            <AccordionItem title="head 1">Hello 1Hello 1Hello 1Hello 1</AccordionItem>
            <AccordionItem title="head 2">Hello 2Hello 2Hello 2Hello 2</AccordionItem>
            <AccordionItem title="head 3">Hello 3Hello 3Hello 3Hello 3</AccordionItem>
          </Accordion>
        </Col>
        <Col breakPoint={{ xs: 12, lg: 6 }}>
          <Accordion multi>
            <AccordionItem title="head 1">Hello 1Hello 1Hello 1Hello 1</AccordionItem>
            <AccordionItem title="head 2">Hello 2Hello 2Hello 2Hello 2</AccordionItem>
            <AccordionItem title="head 3">Hello 3Hello 3Hello 3Hello 3</AccordionItem>
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default Accordions;
