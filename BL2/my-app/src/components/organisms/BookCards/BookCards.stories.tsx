// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import BookCards from './BookCards';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'organism/BookCards',
  component: BookCards,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BookCards>;
export const Primary= ()=> <BookCards key={1} id={1} author="Kathleen Shannon and Emily" title="Being Boss" pic="http://127.0.0.1:8887/beingBoss.png" state="" page='Currently Reading' />