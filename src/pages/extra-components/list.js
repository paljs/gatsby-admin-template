import { Row, Col, Card, List, ListItem, User } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

const ListPage = () => {
  const userList = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' }
  ];
  const fruits = [
    'Lemons',
    'Raspberries',
    'Strawberries',
    'Blackberries',
    'Kiwis',
    'Grapefruit',
    'Avocado',
    'Watermelon',
    'Cantaloupe',
    'Oranges',
    'Peaches'
  ];
  return (
    <>
      <SEO title="List" keywords={[`OAH`, `application`, `react`]} />
      <Row>
        <Col xs={12} md={6}>
          <Card size="SM">
            <header>Fruit List</header>
            <List>
              {fruits.map((fruit, index) => (
                <ListItem key={index}>{fruit}</ListItem>
              ))}
            </List>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card size="SM">
            <header>Users List</header>
            <List>
              {userList.map((user, index) => (
                <ListItem key={index}>
                  <User title={user.title} name={user.name} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ListPage;
