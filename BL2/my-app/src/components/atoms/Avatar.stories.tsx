import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatars from './Avatar';


export default{
    title:'atom/Avatar',
    component:Avatars,
   
}as ComponentMeta<typeof Avatars>;

const Template: ComponentStory<typeof Avatars> = (args) => <Avatars {...args} />;

export const avatar = Template.bind({});
avatar.args = { sx:{backgroundColor:'#69A6E3'}};