import { Row, Col, Card, Chat, ChatForm, ChatMessages } from 'oah-ui';
import React, { useState } from 'react';
import SEO from '../../../components/SEO';
import defaultMessages from '../../../components/messages';

export default function ChatPage() {
  const [messages, setMessages] = useState(defaultMessages);

  const onSendHandle = v => {
    const files = !v.files
      ? []
      : v.files.map(file => {
        return {
          url: file.src,
          type: file.type,
          icon: 'icon ion-ios-document'
        };
      });
    const newMessage = {
      message: v.message,
      date: new Date().toLocaleTimeString(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files,
      sender: 'Jonh Doe',
      avatar: 'https://i.gifer.com/no.gif'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <SEO title="Chat" keywords={['OAH', 'application', 'react']} />
      <Row>
        <Col xs={12} md={6} style={{ marginBottom: '1rem' }}>
          <Chat title="OAH Technology">
            <ChatMessages messages={messages} mapKey="API_KEY" />
            <ChatForm
              onSend={v => onSendHandle(v)}
              dropFiles
              filesIcon="icon ion-ios-document"
            />
          </Chat>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <header>Main features</header>
            <div className="card-body">
              <ul>
                <li>
                  different message types support (text, image, file, file
                  group, map, etc)
                </li>
                <li>drag &amp; drop for images and files with preview</li>
                <li>different UI styles</li>
              </ul>
              <Row />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
