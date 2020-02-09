import React from 'react';
import { Card, CardBody } from 'oah-ui';
import SEO from '../../components/SEO';
const ClassicEditor = React.lazy(() => import('@ckeditor/ckeditor5-build-classic'));
const CKEditor = React.lazy(() => import('@ckeditor/ckeditor5-react'));

export default function CKEditorPage() {
  const isSSR = typeof window === 'undefined';
  return (
    <Card>
      <SEO title="CKEditor" keywords={['OAH', 'application', 'react']} />
      <header>CKEditor</header>
      <CardBody>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
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
          </React.Suspense>
        )}
      </CardBody>
    </Card>
  );
}
