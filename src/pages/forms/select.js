import { Row, Col, Card, CardBody, Select } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function SelectPage() {
  const positionOptions = [
    { value: 'topRight', label: 'Top-Right' },
    { value: 'topLeft', label: 'Top-Left' },
    { value: 'bottomRight', label: 'Bottom-Right' },
    { value: 'bottomLeft', label: 'Bottom-Left' },
    { value: 'topStart', label: 'Top-Start' },
    { value: 'topEnd', label: 'Top-End', selected: true },
    { value: 'bottomStart', label: 'Bottom-Start', selected: true },
    { value: 'bottomEnd', label: 'Bottom-End', selected: true }
  ];
  const statusOption = [
    { label: 'Clean' },
    { value: 'Info', label: 'Info' },
    { value: 'Success', label: 'Success' },
    { value: 'Danger', label: 'Danger' },
    { value: 'Primary', label: 'Primary' },
    { value: 'Warning', label: 'Warning' },
    { value: 'Default', label: 'Default' }
  ];
  return (
    <>
      <SEO title="Select" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <Select
                style={{ marginBottom: '1rem' }}
                options={statusOption}
                placeholder="Select"
              />
              <Select
                options={positionOptions}
                multiple
                placeholder="Select multiple"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
