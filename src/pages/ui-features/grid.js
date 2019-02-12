import { Row, Col, Card } from 'rnsc';
import styled, { css } from 'styled-components';
import { breakpointUp } from 'rnsc/theme';
import React from 'react';
import SEO from '../../components/SEO';

const Box = styled.div`
  ${({ theme, nested, container, row, large }) => css`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    overflow: hidden;
    text-align: center;
    background: ${theme.colorBgActive};
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;
    ${large && 'height: 8rem;'};
    ${row && 'margin-bottom: 1rem;'};
    ${container && 'padding: .5em;'};
    ${nested && `background-color: ${theme.colorFg};`};
    ${breakpointUp('md')`
    padding: 1rem;
  `}
  `}
`;

const GridPage = () => {
  return (
    <>
      <SEO title="Grid" keywords={[`OAH`, `application`, `react`]} />
      <Row>
        <Col xs={12}>
          <Card>
            <header>Grid System</header>
            <div className="card-body">
              <h2>Responsive</h2>
              <p>
                Responsive modifiers enable specifying different column sizes,
                offsets, alignment and distribution at xs, sm, md & lg viewport
                widths.
              </p>
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Box row>
                    xs={12} sm={6} md={4} lg={3}
                  </Box>
                </Col>
                <Col xs={6} sm={6} md={8} lg={6}>
                  <Box row>
                    xs={6} sm={6} md={8} lg={6}
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Box row>
                    xs={12} sm={6} md={4} lg={3}
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Box row>
                    xs={12} sm={6} md={4} lg={3}
                  </Box>
                </Col>
                <Col xs={12} sm={6} md={8} lg={9}>
                  <Box row>
                    xs={12} sm={6} md={8} lg={9}
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col xs={8} sm={6} md={8} lg={9}>
                  <Box row>
                    xs={8} sm={6} md={8} lg={9}
                  </Box>
                </Col>
                <Col xs={4} sm={6} md={4} lg={3}>
                  <Box row>
                    xs={4} sm={6} md={4} lg={3}
                  </Box>
                </Col>
              </Row>

              <h2>Offsets</h2>
              <p>Offset a column.</p>
              <Row>
                <Col xsOffset={11} xs={1}>
                  <Box row>
                    xsOffset={11} xs={1}
                  </Box>
                </Col>
                <Col xsOffset={10} xs={2}>
                  <Box row>
                    xsOffset={10} xs={2}
                  </Box>
                </Col>
                <Col xsOffset={9} xs={3}>
                  <Box row>
                    xsOffset={9} xs={3}
                  </Box>
                </Col>
                <Col xsOffset={8} xs={4}>
                  <Box row>
                    xsOffset={8} xs={4}
                  </Box>
                </Col>
                <Col xsOffset={7} xs={5}>
                  <Box row>
                    xsOffset={7} xs={5}
                  </Box>
                </Col>
                <Col xsOffset={6} xs={6}>
                  <Box row>
                    xsOffset={6} xs={6}
                  </Box>
                </Col>
                <Col xsOffset={5} xs={7}>
                  <Box row>
                    xsOffset={5} xs={7}
                  </Box>
                </Col>
                <Col xsOffset={4} xs={8}>
                  <Box row>
                    xsOffset={4} xs={8}
                  </Box>
                </Col>
                <Col xsOffset={3} xs={9}>
                  <Box row>
                    xsOffset={3} xs={9}
                  </Box>
                </Col>
                <Col xsOffset={2} xs={10}>
                  <Box row>
                    xsOffset={2} xs={10}
                  </Box>
                </Col>
                <Col xsOffset={1} xs={11}>
                  <Box row>
                    xsOffset={1} xs={11}
                  </Box>
                </Col>
              </Row>
              <h2>Auto Width</h2>
              <p>
                Add any number of auto sizing columns to a row. Let the grid
                figure it out.
              </p>
              <Row>
                <Col xs>
                  <Box row>xs</Box>
                </Col>
                <Col xs>
                  <Box row>xs</Box>
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Box row>xs</Box>
                </Col>
                <Col xs>
                  <Box row>xs</Box>
                </Col>
                <Col xs>
                  <Box row>xs</Box>
                </Col>
              </Row>
              <h2>Alignment</h2>
              <p>
                Add classes to align elements to the start or end of row as well
                as the top, bottom, or center of a column
              </p>
              <h3>
                <code>.start-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box container>
                    <Row start="xs">
                      <Col xs={6}>
                        <Box nested>start="xs"</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.center-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box container>
                    <Row center="xs">
                      <Col xs={6}>
                        <Box nested>center="xs"</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.end-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box container>
                    <Row end="xs">
                      <Col xs={6}>
                        <Box nested>end="xs"</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.top-</code>
              </h3>
              <Row top="xs">
                <Col xs={6}>
                  <Box large>top="xs"</Box>
                </Col>
                <Col xs={6}>
                  <Box>top="xs"</Box>
                </Col>
              </Row>
              <h3>
                <code>.middle-</code>
              </h3>
              <Row middle="xs">
                <Col xs={6}>
                  <Box large>middle="xs"</Box>
                </Col>
                <Col xs={6}>
                  <Box>middle="xs"</Box>
                </Col>
              </Row>
              <h3>
                <code>.bottom-</code>
              </h3>
              <Row bottom="xs">
                <Col xs={6}>
                  <Box large>bottom="xs"</Box>
                </Col>
                <Col xs={6}>
                  <Box>bottom="xs"</Box>
                </Col>
              </Row>
              <h2>Distribution</h2>
              <p>Add classes to distribute the contents of a row or column.</p>
              <h3>
                <code>.around-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box container>
                    <Row around="xs">
                      <Col xs={2}>
                        <Box nested>around="xs"</Box>
                      </Col>
                      <Col xs={2}>
                        <Box nested>around="xs"</Box>
                      </Col>
                      <Col xs={2}>
                        <Box nested>around="xs"</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.between-</code>
              </h3>
              <Row>
                <Col xs={12}>
                  <Box container>
                    <Row between="xs">
                      <Col xs={2}>
                        <Box nested>between="xs"</Box>
                      </Col>
                      <Col xs={2}>
                        <Box nested>between="xs"</Box>
                      </Col>
                      <Col xs={2}>
                        <Box nested>between="xs"</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h2>Hide</h2>
              <p>
                You can simply hide some elements for a given breakpoint by
                passing `false` to the breakpoint properties.
              </p>
              <Row>
                <Col xs={12} md={6}>
                  <Box row>
                    xs={12} md={6}
                  </Box>
                </Col>
                <Col xs={false} md={6}>
                  <Box row>xs=false md={6}</Box>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default GridPage;
