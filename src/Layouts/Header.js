import { Actions, Search, User } from 'rnsc';
import React from 'react';

export default function Header(props) {
  const submitHandle = value => value;
  const actions = [
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
        <select onChange={e => changeTheme(e)}>
          <option value="default">default</option>
          <option value="cosmic">cosmic</option>
          <option value="corporate">corporate</option>
        </select>
      )
    },
    {
      content: <button onClick={props.changeDir}>Dir</button>
    },
    {
      content: <button onClick={props.collapseAll}>collapseAll</button>
    },
    {
      content: <button onClick={props.expandAll}>expandAll</button>
    },
    {
      content: (
        <Search
          submit={submitHandle}
          type="rotate-layout"
          placeholder="Search..."
          hint="tap enter"
        />
      )
    },
    {
      content: (
        <User
          image="url('/icons/icon-72x72.png')"
          name="OAH Technology"
          title="Manger"
          size="LG"
        />
      )
    }
  ];

  const changeTheme = event => {
    props.changeTheme(event.target.value);
  };

  return <Actions size="MD" actions={actions} />;
}
