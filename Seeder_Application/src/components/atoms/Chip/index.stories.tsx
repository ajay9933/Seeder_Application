
/*import React from 'react';

import { StoryFn, Meta } from '@storybook/react';
import CustomChip from './index'; // Adjust the import path as per your project structure

export default {
    title: 'Components/CustomChip',
    component: CustomChip,
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        fontSize: { control: 'number' },
        fontFamily: { control: 'text' },
        fontWeight: { control: 'number' },
        lineHeight: { control: 'text' },
        letterSpacing: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
        color: {control:'text'},
    },
} as Meta;

const Template: StoryFn<typeof CustomChip> = (args) => <CustomChip {...args} />;

export const CustomStyledChip = Template.bind({});
CustomStyledChip.args = {
    label: 'Custom Styled Chip',
    backgroundColor: '#E39AB2', // Accent/pink color
    fontSize: 14,
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 600,
    lineHeight: '17.15px',
    letterSpacing: '1%',
    width: '107px', // Inside chip width
    height: '17px',
    color:"#201F24" // Inside chip height
};

export const customchipstiry2 = Template.bind({});
customchipstiry2.args = {
    label: 'customchipstiry2',
    backgroundColor: '#2D2D30',
    fontSize: 16,
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0.8px',
    width: '83px',
    height: '25px',
};*/

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CustomChip from './index'; // Adjust the import path as per your project structure

export default {
    title: 'Components/CustomChip',
    component: CustomChip,
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        fontSize: { control: 'number' },
        fontFamily: { control: 'text' },
        fontWeight: { control: 'number' },
        lineHeight: { control: 'text' },
        letterSpacing: { control: 'text' },
        width: { control: 'text' },
        height: { control: 'text' },
        color: { control: 'text' }, // Use 'text' control for custom color prop
    },
} as Meta;

const Template: StoryFn<typeof CustomChip> = (args) => <CustomChip {...args} />;

export const CustomStyledChip = Template.bind({});
CustomStyledChip.args = {
    label: 'Custom Styled Chip',
    backgroundColor: '#E39AB2', // Accent/pink color
    fontSize: 14,
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 600,
    lineHeight: '17.15px',
    letterSpacing: '1%',
    width: '107px', // Inside chip width
    height: '17px',
    color: '#201F24', // Custom hexadecimal color
};

export const customchipstiry2 = Template.bind({});
customchipstiry2.args = {
    label: 'customchipstiry2',
    backgroundColor: '#2D2D30',
    fontSize: 16,
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0.8px',
    width: '83px',
    height: '25px',
    color: '#C9C8CC', // Another custom hexadecimal color
};

