import React from 'react';
import { Card, CardBody } from 'oah-ui';
import Editor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SEO from '../../components/SEO';

export default function CKEditor() {
  return (
    <Card>
      <SEO title="CKEditor" keywords={['OAH', 'application', 'react']} />
      <header>CKEditor</header>
      <CardBody>
        <Editor editor={ClassicEditor} config={{ height: '100%' }} />
      </CardBody>
    </Card>
  );
}
