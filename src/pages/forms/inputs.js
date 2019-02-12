import { Row, Col, Card, Checkbox, Radio, InputGroup, Select } from 'rnsc';
import React from 'react';
//import Layout from '../../components/Layout';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
const InputPage = () => {
  const onChangeCheckbox = value => {
    // value will be true or false
  };
  const onChangeRadio = value => {
    // value will be item value
  };
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <header>Input status</header>
            <div className="card-body">
              <InputGroup fullWidth fieldSize="SM" label="Size small">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth label="Size Medium">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth fieldSize="LG" label="Size Large">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth label="Rectangle border">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth shape="SemiRound" label="SemiRound border">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth shape="Round" label="Round border">
                <input type="text" />
              </InputGroup>
              <Row>
                <Col xxs={12} sm={6}>
                  <InputGroup fullWidth label="Disabled Input">
                    <input type="text" disabled />
                  </InputGroup>
                </Col>
                <Col xxs={12} sm={6}>
                  <InputGroup fullWidth label="Disabled Input">
                    <input type="text" disabled />
                  </InputGroup>
                </Col>
              </Row>
              <InputGroup fullWidth label="Select">
                <select name="text">
                  <option value="value1">option 1</option>
                  <option value="value1">option 1</option>
                  <option value="value1">option 1</option>
                  <option value="value1">option 1</option>
                </select>
              </InputGroup>
              <Select
                closeMenuOnSelect={false}
                isMulti
                fullWidth
                label="React Select"
                options={options}
              />
              <InputGroup fullWidth shape="Round" label="Text Area">
                <textarea rows="5" />
              </InputGroup>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Validation States</header>
            <div className="card-body">
              <InputGroup fullWidth status="Info" label="Input with Info">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth status="Warning" label="Input with Warning">
                <input name="text" />
              </InputGroup>
              <InputGroup fullWidth status="Success" label="Input with Success">
                <input type="text" />
              </InputGroup>
              <InputGroup fullWidth status="Danger" label="Input with Danger">
                <input type="text" />
              </InputGroup>
              <Row>
                <Col xs={12}>
                  <Radio
                    name="radio"
                    onChange={onChangeRadio}
                    options={[
                      {
                        value: 'value 1',
                        label: 'option 1',
                        checked: true
                      },
                      {
                        value: 'value 2',
                        label: 'option 2',
                        status: 'Info'
                      },
                      {
                        value: 'value 3',
                        label: 'option 3',
                        status: 'Danger'
                      }
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={4}>
                  <Checkbox status="Success" onChange={onChangeCheckbox}>
                    Success
                  </Checkbox>
                </Col>
                <Col xs={6} sm={4}>
                  <Checkbox status="Danger" onChange={onChangeCheckbox}>
                    Danger
                  </Checkbox>
                </Col>
                <Col xs={6} sm={4}>
                  <Checkbox status="Warning" onChange={onChangeCheckbox}>
                    Warning
                  </Checkbox>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default InputPage;
