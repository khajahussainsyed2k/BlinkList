// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavTabs from './NavTabs';
import { Tab } from '@mui/material';
import { TabPanel } from '@mui/lab';


export default {
  
  title: 'organism/NavTab',
  component: NavTabs,
  
} as ComponentMeta<typeof NavTabs>;


const Template: ComponentStory<typeof NavTabs> = (args) => <NavTabs/>;

export const NavTab = Template.bind({});
