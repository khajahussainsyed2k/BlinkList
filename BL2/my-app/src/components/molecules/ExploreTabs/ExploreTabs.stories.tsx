// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExploreTabs from './ExploreTabs';


export default {
  
  title: 'molecules/ExploreTabs',
  component: ExploreTabs,
  
} as ComponentMeta<typeof ExploreTabs>;


const Template: ComponentStory<typeof ExploreTabs> = (args) => <ExploreTabs {...args} />;

export const exploretabs = Template.bind({});


