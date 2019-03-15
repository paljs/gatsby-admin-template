import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'oah-ui';
import SEO from '../../components/SEO';

export default function TinyMCE() {
  const [editor, setEditor] = useState('');

  useEffect(() => {
    if (window) {
      require('tinymce/plugins/table');
      require('tinymce/plugins/link');
      require('tinymce/plugins/image');
      require('tinymce/plugins/code');
      const { Editor } = require('@tinymce/tinymce-react');
      setEditor(<Editor init={{ plugins: 'link table image code' }} />);
    }
  }, []);

  return (
    <Card>
      <SEO title="Tiny MCE" keywords={['OAH', 'application', 'react']} />
      <header>Tiny MCE</header>
      <CardBody>{editor}</CardBody>
    </Card>
  );
}
