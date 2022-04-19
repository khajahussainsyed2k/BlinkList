// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LibTab from './LibTab';


export default {
  
  title: 'organism/LibraryTab',
  component: LibTab,
  
} as ComponentMeta<typeof LibTab>;


const Template: ComponentStory<typeof LibTab> = (args) => <LibTab {...args} />;

export const libraryTab = Template.bind({});
