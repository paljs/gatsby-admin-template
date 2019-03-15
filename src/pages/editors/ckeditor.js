import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'oah-ui';
import SEO from '../../components/SEO';

export default function CKEditor() {
  const [editor, setEditor] = useState('');

  useEffect(() => {
    if (window) {
      const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
      const Editor = require('@ckeditor/ckeditor5-react');
      setEditor(<Editor editor={ClassicEditor} />);
    }
  }, []);

  return (
    <Card>
      <SEO title="CKEditor" keywords={['OAH', 'application', 'react']} />
      <header>CKEditor</header>
      <CardBody>{editor}</CardBody>
    </Card>
  );
}
