import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import {
  Layout,
  LayoutContent,
  LayoutFooter,
  LayoutContainer,
  LayoutColumns,
  LayoutColumn
} from 'oah-ui';

import Header from './Header';
import SimpleLayout from './SimpleLayout';
import SidebarCustom from './Sidebar';

export default function LayoutPage({ children, pageContext }) {
  const [theme, setTheme] = useState('default');
  const [dir, setDir] = useState('ltr');
  const sidebarRef = useRef();

  const changeTheme = newTheme => {
    setTheme(newTheme);
  };

  const changeDir = () => {
    const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(newDir);
  };

  return (
    <ThemeProvider theme={themes(theme, dir)}>
      <>
        <SimpleLayout />
        <Layout
          dir={dir}
          windowMode
          className={pageContext.layout === 'auth' ? 'auth-layout' : ''}
        >
          {pageContext.layout !== 'auth' && (
            <Header
              dir={dir}
              changeDir={changeDir}
              changeTheme={changeTheme}
              toggleSidebar={() => sidebarRef.current.toggle()}
            />
          )}
          <LayoutContainer>
            {pageContext.layout !== 'auth' && (
              <SidebarCustom ref={sidebarRef} />
            )}
            <LayoutContent>
              <LayoutColumns>
                <LayoutColumn className="main-content">{children}</LayoutColumn>
              </LayoutColumns>
              {pageContext.layout !== 'auth' && (
                <LayoutFooter>Footer</LayoutFooter>
              )}
            </LayoutContent>
          </LayoutContainer>
        </Layout>
      </>
    </ThemeProvider>
  );
}
