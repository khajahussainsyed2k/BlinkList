// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner  from './Banner';
import { Card } from '@mui/material';

export default {
  
  title: 'molecules/Banner',
  component: Banner,
  
} as ComponentMeta<typeof Banner>;


const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const banner = Template.bind({});
banner.args = {

sx:{height:'264px'
,width:'912px',
backgroundColor:'#F1F6F4',
},

raised:false,    
    }