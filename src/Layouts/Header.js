import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  Actions,
  Select,
  LayoutHeader,
  Button,
  User,
  ContextMenu
} from 'oah-ui';
import { breakpointDown } from 'oah-ui/theme';

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

export default function Header(props) {
  const themeOptions = [
    {
      value: 'default',
      label: 'Default',
      selected: true
    },
    {
      value: 'cosmic',
      label: 'Cosmic'
    },
    {
      value: 'corporate',
      label: 'Corporate'
    }
  ];
  return (
    <LayoutHeader fixed>
      <HeaderStyle>
        <Actions
          size="MD"
          actions={[
            {
              icon: 'icon ion-ios-menu',
              events: {
                onClick: props.toggleSidebar
              }
            },
            {
              content: <h3>OAH Admin</h3>
            },
            {
              content: (
                <Select
                  size="SM"
                  style={{ minWidth: '8rem' }}
                  customLabel="Themes"
                  options={themeOptions}
                  onChange={v => props.changeTheme(v)}
                />
              )
            },
            {
              content: (
                <Button size="SM" onClick={() => props.changeDir()}>
                  {props.dir}
                </Button>
              )
            }
          ]}
        />
        <Actions
          size="SM"
          className="right"
          actions={[
            {
              icon: 'icon ion-logo-github',
              url: 'https://github.com/oahtech/oah-admin',
              target: '_blank'
            },
            {
              icon: 'icon ion-logo-twitter',
              url: 'https://twitter.com/AhmedElywh',
              target: '_blank'
            },
            {
              content: (
                <ContextMenu
                  style={{ cursor: 'pointer' }}
                  placement="bottom"
                  items={[
                    { title: 'Profile', link: '/modal-overlays/tooltip' },
                    { title: 'Log out', link: '/logout' }
                  ]}
                  Link={Link}
                >
                  <User
                    image="url('/icons/icon-72x72.png')"
                    name="OAH Technology"
                    title="Manger"
                    size="MD"
                  />
                </ContextMenu>
              )
            }
          ]}
        />
      </HeaderStyle>
    </LayoutHeader>
  );
}
