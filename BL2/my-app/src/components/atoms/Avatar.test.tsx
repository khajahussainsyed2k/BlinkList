import React from 'react';
import { render, screen } from '@testing-library/react';
import LetterAvatar from './Avatar' ;

test('renders Avatar Component', () => {
  render(<LetterAvatar></LetterAvatar>);
  const AvatarElement = screen.getByText('A');
  expect(AvatarElement).toBeInTheDocument();
});