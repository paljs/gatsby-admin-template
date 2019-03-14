import { InputGroup, Checkbox, Button } from 'oah-ui';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Auth from '../../components/Auth';
import SEO from '../../components/SEO';
import Socials from '../../components/Auth/Socials';

const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const onCheckbox = v => {
    // v will be true or false
  };
  return (
    <Auth title="Create new account">
      <SEO title="Register" keywords={['OAH', 'application', 'react']} />
      <form>
        <Input fullWidth label="Username">
          <input type="text" />
        </Input>
        <Input fullWidth label="Email Address">
          <input type="email" />
        </Input>
        <Input fullWidth label="Password">
          <input type="password" />
        </Input>
        <Input fullWidth label="Confirm Password">
          <input type="password" />
        </Input>
        <Checkbox onChange={onCheckbox}>
          Agree to <Link to="/">Terms & Conditions</Link>
        </Checkbox>
        <Button status="Success" type="button" shape="SemiRound" fullWidth>
          Register
        </Button>
      </form>
      <Socials />
      <p>
        Already have an account? <Link to="/auth/login">Log In</Link>
      </p>
    </Auth>
  );
}
