import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function index() {
  useEffect(() => {
    navigate('/dashboard');
  }),
    [];
  return <div />;
}
