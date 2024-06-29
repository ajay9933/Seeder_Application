import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ChipProps } from '@mui/material';
import StyledChip from './index'; // Adjust the import path as needed

interface StyledChipProps extends ChipProps {
    backgroundColor?: string;
    customcolor?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineheight?: string|number;
    letterSpacing?: string|number;
    width?: string;
    height?: string;
    label?: string; // Ensure label is included with correct type
  }
  
  export default {
    title: 'Components/StyledChip',
    component: StyledChip,
    argTypes: {
      backgroundColor: { control: 'color' },
      customcolor: { control: 'color' },
      fontSize: { control: 'number' },
      fontFamily: { control: 'text' },
      fontWeight: { control: 'number' },
      lineheight: { control: 'text' },
      letterSpacing: { control: 'text' },
      width: { control: 'text' },
      height: { control: 'text' },
    },
  } as Meta;
  
  const Template: StoryFn<StyledChipProps> = (args) => <StyledChip {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    label: 'Default Chip', // Ensure label is passed as a string
    backgroundColor: 'lightblue', // Example background color
    customcolor: 'black', // Example custom color
    fontSize: 16, // Example font size
    fontFamily: 'Arial', // Example font family
    fontWeight: 400, // Example font weight
    lineheight: '1.5', // Example line height
    letterSpacing: 'normal', // Example letter spacing
    width: '150px', // Example width
    height: '50px', // // Ensure label is passed as a string
  };
  
  export const CustomColors = Template.bind({});
  CustomColors.args = {
    label: 'Custom Colors',
    backgroundColor: 'pink',
    customcolor: 'blue',
  };
  
  export const CustomSize = Template.bind({});
  CustomSize.args = {
    label: 'Custom Size',
    width: '200px',
    height: '60px',
  };
  
  export const CustomTypography = Template.bind({});
  CustomTypography.args = {
    label: 'Custom Typography',
    fontSize: 20,
    fontFamily: 'Courier New',
    fontWeight: 700,
    lineheight: '2',
    letterSpacing: '2px',
  };