import { Row, Col, Card, CardBody, Checkbox, Radio, InputGroup, Select } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const InputPage = () => {
  const onChangeCheckbox = (_value: any) => {
    // value will be true or false
  };
  const onChangeRadio = (_value: any) => {
    // value will be item value
  };
  return (
    <>
      <SEO title="Input" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Input status</header>
            <CardBody>
              <InputGroup fullWidth size="Small">
                <input type="text" placeholder="Size small" />
              </InputGroup>
              <InputGroup fullWidth size="Medium">
                <input type="text" placeholder="Size Medium" />
              </InputGroup>
              <InputGroup fullWidth size="Large">
                <input type="text" placeholder="Size Large" />
              </InputGroup>
              <InputGroup fullWidth shape="Rectangle">
                <input type="text" placeholder="Rectangle border" />
              </InputGroup>
              <InputGroup fullWidth shape="SemiRound">
                <input type="text" placeholder="SemiRound border" />
              </InputGroup>
              <InputGroup fullWidth shape="Round">
                <input type="text" placeholder="Round border" />
              </InputGroup>
              <Row>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <InputGroup fullWidth>
                    <input type="text" disabled />
                  </InputGroup>
                </Col>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <InputGroup fullWidth>
                    <input type="text" disabled placeholder="Disabled Input" />
                  </InputGroup>
                </Col>
              </Row>
              <Select fullWidth placeholder="Select" options={options} />
              <InputGroup fullWidth shape="Round">
                <textarea rows={5} placeholder="Text Area" />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Validation States</header>
            <CardBody>
              <InputGroup fullWidth status="Info">
                <input type="text" placeholder="Input with Info" />
              </InputGroup>
              <InputGroup fullWidth status="Warning">
                <input name="text" placeholder="Input with Warning" />
              </InputGroup>
              <InputGroup fullWidth status="Success">
                <input type="text" placeholder="Input with Success" />
              </InputGroup>
              <InputGroup fullWidth status="Danger">
                <input type="text" placeholder="Input with Danger" />
              </InputGroup>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Radio
                    name="radio"
                    onChange={onChangeRadio}
                    options={[
                      {
                        value: 'value 1',
                        label: 'option 1',
                        checked: true,
                      },
                      {
                        value: 'value 2',
                        label: 'option 2',
                        status: 'Info',
                      },
                      {
                        value: 'value 3',
                        label: 'option 3',
                        status: 'Danger',
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox status="Success" onChange={onChangeCheckbox}>
                    Success
                  </Checkbox>
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox status="Danger" onChange={onChangeCheckbox}>
                    Danger
                  </Checkbox>
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox status="Warning" onChange={onChangeCheckbox}>
                    Warning
                  </Checkbox>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default InputPage;
