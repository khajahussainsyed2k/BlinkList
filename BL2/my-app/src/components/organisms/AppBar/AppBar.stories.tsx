import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './AppBar';


export default{
    title:'organism/Header',
    component:Header,
   
}as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = { color: 'primary',sx:{width:1150}};