import React from 'react';
import { Card, CardBody } from 'oah-ui';
import { Editor } from '@tinymce/tinymce-react';
import SEO from '../../components/SEO';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';

export default function TinyMCE() {
  return (
    <Card>
      <SEO title="Tiny MCE" keywords={['OAH', 'application', 'react']} />
      <header>Tiny MCE</header>
      <CardBody>
        <Editor init={{ plugins: 'link table image code' }} />
      </CardBody>
    </Card>
  );
}
