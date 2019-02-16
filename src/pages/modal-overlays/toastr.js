import React, { useRef, useState } from 'react';
import {
  Row,
  Col,
  InputGroup,
  Checkbox,
  Select,
  Toastr,
  Button,
  Card
} from 'oah-ui';
import SEO from '../../components/SEO';

export default function ToastrPage() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({
    title: 'HI there!',
    message: 'cool toaster',
    position: 'topEnd',
    status: 'Primary',
    duration: 2000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false,
    icons: {
      Primary: 'ion-ios-mail',
      Warning: 'ion-ios-alert',
      Danger: 'ion-ios-bug',
      Success: 'ion-ios-checkmark-circle',
      Info: 'ion-ios-help-circle'
    }
  });

  const toastrRef = useRef();

  const showToastr = () => {
    setCount(count + 1);
    toastrRef.current.add(data.title + count, data.message, { ...data });
  };

  const onChangeHandle = (name, value) => {
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const positionOptions = [
    { value: 'topRight', label: 'Top-Right' },
    { value: 'topLeft', label: 'Top-Left' },
    { value: 'bottomRight', label: 'Bottom-Right' },
    { value: 'bottomLeft', label: 'Bottom-Left' },
    { value: 'topStart', label: 'Top-Start' },
    { value: 'topEnd', label: 'Top-End' },
    { value: 'bottomStart', label: 'Bottom-Start' },
    { value: 'bottomEnd', label: 'Bottom-End' }
  ];
  const statusOption = [
    { value: 'Info', label: 'Info' },
    { value: 'Success', label: 'Success' },
    { value: 'Danger', label: 'Danger' },
    { value: 'Primary', label: 'Primary' },
    { value: 'Warning', label: 'Warning' },
    { value: 'Default', label: 'Default' }
  ];

  return (
    <>
      <SEO title="Toastr" keywords={['OAH', 'application', 'react']} />

      <Row>
        <Col xs={12}>
          <Toastr ref={toastrRef} />
          <Card>
            <header>Toaster configuration</header>
            <div className="card-body">
              <Row>
                <Col xs={12} md={6}>
                  <Select
                    fullWidth
                    placeholder="Place to show toast"
                    options={positionOptions}
                    value={data.position}
                    onChange={v => onChangeHandle('position', v)}
                  />
                  <InputGroup fullWidth label="Title">
                    <input
                      type="text"
                      value={data.title}
                      onChange={e => onChangeHandle('title', e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup fullWidth label="Message">
                    <input
                      type="text"
                      value={data.message}
                      onChange={e => onChangeHandle('message', e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup
                    fullWidth
                    label="Time to hide toast, ms. 0 to persistent toast"
                  >
                    <input
                      type="number"
                      value={data.duration}
                      onChange={e =>
                        onChangeHandle('duration', e.target.valueAsNumber)
                      }
                    />
                  </InputGroup>
                </Col>
                <Col xs={12} md={6}>
                  <Select
                    fullWidth
                    placeholder="Toast Status"
                    options={statusOption}
                    value={data.status}
                    onChange={v => onChangeHandle('status', v)}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Checkbox
                      checked={data.destroyByClick}
                      onChange={v => onChangeHandle('destroyByClick', v)}
                    >
                      Hide on click
                    </Checkbox>
                    <Checkbox
                      checked={data.preventDuplicates}
                      onChange={v => onChangeHandle('preventDuplicates', v)}
                    >
                      Prevent arising of duplicate toast
                    </Checkbox>
                    <Checkbox
                      checked={data.hasIcon}
                      onChange={v => onChangeHandle('hasIcon', v)}
                    >
                      Show toast with icon
                    </Checkbox>
                  </div>
                </Col>
              </Row>
            </div>
            <footer>
              <Button onClick={showToastr}>Show Toastr</Button>
            </footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}
