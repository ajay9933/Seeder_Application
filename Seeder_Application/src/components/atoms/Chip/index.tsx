/*import React from 'react';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';

interface ChipProps {
    backgroundColor?: string;
    label?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: string;
    letterSpacing?: string;
}

const StyledChip = styled(Chip)<ChipProps>`
    border-radius: 0;
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => props.fontSize}px;
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
`;

const CustomChip: React.FC<ChipProps> = (props) => {
    return <StyledChip {...props} />;
}

export default CustomChip;
*/
// CustomChip.tsx


/*
import React from 'react';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';

interface ChipProps {
    backgroundColor?: string;
    label?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: string;
    letterSpacing?: string;
    width?: string; 
    height?: string; 
    
}

const StyledChip = styled(Chip)<ChipProps>`
    border-radius: 4px;
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => props.fontSize}px;
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  
    padding: 4px 8px 4px 8px;
`;

const CustomChip: React.FC<ChipProps> = (props) => {
    return <StyledChip {...props} />;
}

export default CustomChip;*/




/*-----------------------------------------------------
import React from 'react';
import { styled } from '@mui/system';
import Chip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

interface ChipProps extends Omit<MuiChipProps,'color'> {
    backgroundColor?: string;
    label?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: string;
    letterSpacing?: string;
    width?: string; 
    height?: string;
    color?:string;
    // Use MuiChipProps['color'] type for compatibility
}

const StyledChip = styled(Chip)<ChipProps>`
    border-radius: 4px;
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => props.fontSize}px;
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
   
   .MuiChip-label {
        color: ${(props) => props.color};
    }

    padding: 4px 8px 4px 8px;
`;

const CustomChip: React.FC<ChipProps> = (props) => {
    return <StyledChip {...props} />;
}

export default CustomChip;*/



import React from 'react';
import { styled } from '@mui/system';
import Chip, { ChipProps as MuiChipProps } from '@mui/material/Chip';

// Type for color to allow any string, not just 'custom'
type ChipColor = MuiChipProps['color'] | string;

interface ChipProps extends Omit<MuiChipProps, 'color' | 'variant'> {
    backgroundColor?: string;
    label?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: string;
    letterSpacing?: string;
    width?: string;
    height?: string;
    color?: ChipColor;  // Allows any string color
}

const StyledChip = styled(Chip)<ChipProps>`
    border-radius: 4px;
    background-color: ${(props) => props.backgroundColor || 'default'};
    font-size: ${(props) => props.fontSize}px;
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.fontWeight};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${(props) => props.color && `
        .MuiChip-label {
            color: ${props.color};  // Apply color dynamically
        }
    `}

    padding: 4px 8px;
`;

const CustomChip: React.FC<ChipProps> = (props) => {
    // Determine if the color is a MUI predefined color or a custom color
    const isMuiColor = ['primary', 'secondary', 'default', 'error', 'info', 'success', 'warning'].includes(props.color);
    
    // If it's not a MUI color, apply the color through the styled component.
    return <StyledChip {...props} style={!isMuiColor ? { color: props.color } : {}} />;
}

export default CustomChip;

