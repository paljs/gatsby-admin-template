import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function index() {
  useEffect(() => {
    navigate('/forms/inputs');
  }),
    [];
  return <div />;
}
