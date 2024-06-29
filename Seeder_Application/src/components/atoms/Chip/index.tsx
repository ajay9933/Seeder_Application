/* import React from "react";
import { styled } from "@mui/system";
import Chip, { ChipProps as MuiChipProps } from "@mui/material/Chip";

interface ChipProps extends MuiChipProps {
  backgroundColor?: string;
  label?: string;
  fontSize?: number|string;
  fontFamily?: string;
  fontWeight?: number|string;
  lineHeight?: string;
  letterSpacing?: string;
  width?: number|string;
  height?: number|string;
  customColor?: React.CSSProperties["color"]  ; 
  
}

const StyledChip = styled(Chip)<ChipProps>`
  border-radius: 4px;
  background-color: ${(props: ChipProps) => props.backgroundColor};
  font-size: ${(props: ChipProps) => props.fontSize}px;
  font-family: ${(props: ChipProps) => props.fontFamily};
  font-weight: ${(props: ChipProps) => props.fontWeight};
  line-height: ${(props: ChipProps) => props.lineHeight};
  letter-spacing: ${(props: ChipProps) => props.letterSpacing};
  width: ${(props: ChipProps) => props.width};
  height: ${(props: ChipProps) => props.height};

  .MuiChip-label {
    color: ${(props: ChipProps) => props.customColor};
  }
 sx={{ color: (props) => props.customColor }};
  padding: 4px 8px 4px 8px;

`;

const CustomChip: React.FC<ChipProps> = (props) => {
  const { customColor, ...muiProps } = props;
  return <StyledChip {...muiProps} customColor={customColor} />;
};

export default CustomChip;
*/


/*----------------------------------------------------------------------------------------------------*/
/*
import React from "react";
import { styled } from "@mui/material/styles";
import Chip, { ChipProps as MuiChipProps } from "@mui/material/Chip";

interface ChipProps extends Omit<MuiChipProps, "color"> {
  backgroundcolor?: string;
  label?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  width?: string;
  height?: string;
  customcolor?: React.CSSProperties["color"]; // Rename to avoid conflict with MUI's color
}

interface StyledChipProps {
  backgroundcolor?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: string;
  width?: string;
  height?: string;
  customcolor?: React.CSSProperties["color"];
}

const StyledChip = styled(Chip)(
  ({
    backgroundcolor,
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    letterSpacing,
    width,
    height,
    customcolor,
  }: StyledChipProps) => ({
    borderRadius: "4px",
    backgroundcolor: backgroundcolor || "#000",
    fontSize: fontSize || "16px",
    fontFamily: fontFamily || "Gilroy, sans-serif",
    fontWeight: fontWeight || 600,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    width: width,
    height: height,
    color: customcolor || "black",
  })
);

const CustomChip: React.FC<ChipProps> = (props) => {
  return <StyledChip {...props} />;
};

export default CustomChip;



/*
import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

interface ChipProps {
  customBorderRadius?: string | number;
  customColor?: string;
  label: string;
  customBackgroundColor: string;
}

const StyledChip = styled(Chip)(
  ({
    customBorderRadius,
    customColor,
    customBackgroundColor,
  }: {
    customBorderRadius?: string | number;
    customColor?: string;
    customBackgroundColor?: string;
  }) => ({
    color: customColor || 'black',
    borderRadius: customBorderRadius || '4px',
    backgroundColor: customBackgroundColor || "red",
  })
);

const CustomChip: React.FC<ChipProps> = (props) => {
  return <StyledChip {...props} />;
};

export default CustomChip;*/
import React from 'react'
import { Chip,ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledChipProps extends ChipProps {
    backgroundColor?: string;
    label?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: string|number;
    letterSpacing?: string|number;
    width?: string;
    height?: string;
    customcolor?: string;
 }
 
 const StyledChip = styled(Chip)<StyledChipProps>(({
    customcolor,
    ...props
 }) => ({
    backgroundColor: props.backgroundColor || 'lightblue',
    width: props.width || '150px',
    height: props.height || '50px',
    borderRadius: '4px',
    padding: '4px 8px', 
    lineHeight: props.lineHeight || '1.5',

    '& .MuiChip-label': {
       color: customcolor || 'black',
       fontSize: props.fontSize || 16,
       fontFamily: props.fontFamily || 'Gilroy, sans-serif',
      fontWeight: props.fontWeight || 400,
      
       letterSpacing: props.letterSpacing || 'normal',
    },
 
   
 }));
 
 export default StyledChip;

