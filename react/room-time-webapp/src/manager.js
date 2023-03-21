import React from 'react';

import { addons, types } from '@storybook/addons';

import { AddonPanel } from '@storybook/components';

import { useParameter } from '@storybook/api';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = 'myAddon';

// give a unique name for the panel
const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : 'No storybook defined';

  return <div>{item}</div>;
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    )
  });
});
