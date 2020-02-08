import React from 'react';
import { Card, CardBody } from 'oah-ui';
import SEO from '../../components/SEO';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CKEditorPage() {
  return (
    <Card>
      <SEO title="CKEditor" keywords={['OAH', 'application', 'react']} />
      <header>CKEditor</header>
      <CardBody>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor: any) => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event: any, editor: { getData: () => any }) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event: any, editor: any) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event: any, editor: any) => {
            console.log('Focus.', editor);
          }}
        />
      </CardBody>
    </Card>
  );
}
