import React from 'react';
import { Link } from 'gatsby';
import styled, { DefaultTheme } from 'styled-components';
import { Actions, Select, LayoutHeader, Button, User, ContextMenu, breakpointDown, EvaIcon } from 'oah-ui';
import { getPathReady } from './Sidebar';
import { Location } from '@reach/router';

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${breakpointDown('sm')`
    .right{
      display: none;
    }
  `}
`;

const Label = styled.span`
  display: flex;
  align-items: center;
`;

const SelectStyled = styled(Select)`
  min-width: 150px;
`;

interface HeaderProps {
  toggleSidebar: () => void;
  changeTheme: (value: DefaultTheme['name']) => void;
  changeDir: () => void;
  dir: 'rtl' | 'ltr';
}

const Header: React.FC<HeaderProps> = props => {
  const themeOptions = [
    {
      value: 'default',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#a6c1ff' }} />
          Default
        </Label>
      ),
    },
    {
      value: 'dark',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#192038' }} />
          Dark
        </Label>
      ),
    },
    {
      value: 'cosmic',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#5a37b8' }} />
          Cosmic
        </Label>
      ),
    },
    {
      value: 'corporate',
      label: (
        <Label>
          <EvaIcon name="droplet" options={{ fill: '#3366ff' }} />
          Corporate
        </Label>
      ),
      selected: true,
    },
  ];
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="Medium"
          actions={[
            {
              icon: 'menu-2-outline',
              url: {
                onClick: props.toggleSidebar,
              },
            },
            {
              content: <h3 style={{ margin: 0 }}>OAH Admin</h3>,
            },
            {
              content: (
                <SelectStyled
                  isSearchable={false}
                  shape="SemiRound"
                  placeholder="Themes"
                  options={themeOptions}
                  onChange={({ value }: { value: DefaultTheme['name'] }) => props.changeTheme(value)}
                />
              ),
            },
            {
              content: (
                <Button size="Small" onClick={() => props.changeDir()}>
                  {props.dir}
                </Button>
              ),
            },
          ]}
        />
        <Actions
          size="Small"
          className="right"
          actions={[
            {
              icon: 'github',
              url: { href: 'https://github.com/AhmedElywa/oah-admin', target: '_blank' },
            },
            {
              icon: 'twitter',
              url: { href: 'https://twitter.com/AhmedElywh', target: '_blank' },
            },
            {
              content: (
                <Location>
                  {({ location }) => (
                    <ContextMenu
                      style={{ cursor: 'pointer' }}
                      placement="bottom"
                      currentPath={getPathReady(location.pathname)}
                      items={[
                        { title: 'Profile', link: { to: '/modal-overlays/tooltip' } },
                        { title: 'Log out', link: { to: '/logout' } },
                      ]}
                      Link={Link}
                    >
                      <User image="url('/icons/icon-72x72.png')" name="OAH Technology" title="Manger" size="Medium" />
                    </ContextMenu>
                  )}
                </Location>
              ),
            },
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
};
export default Header;
