
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Avatar from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/assets/icons/Image.svg',
  alt: 'Default Avatar',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: '/assets/icons/Image.svg',  
  alt: 'Avatar with Image',
};

export const NoImage = Template.bind({});
NoImage.args = {
  src: '',  // No image case
  alt: 'Avatar with No Image',
};

export const CustomAltText = Template.bind({});
CustomAltText.args = {
  src: '/assets/icons/Image.svg', 
  alt: 'Custom Alt Text',
};

