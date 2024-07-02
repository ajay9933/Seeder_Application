import React from 'react';
import { TypographyAtom } from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import { Box ,useTheme,styled} from '@mui/material';

export interface TypographyIconProps {
  label?: string;
  src?: string;
  alt?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  height?: string | number;
  width?: string | number;
  variant?: 'title' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'caption' | 'button';
  backgroundColor?: string;
  justifyContent?:'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly',
  gap?:string,
}
const OuterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.elevation1,
  
}));

const StyledTypographyAtom = styled(TypographyAtom)<{ variant?: TypographyIconProps['variant'] }>(({ theme, variant }) => ({
  ...(variant && theme.typography[variant]),
 

}));

export const TypographyIconMolecule: React.FC<TypographyIconProps> = ({
  label,
  src,
  alt,
  flexDirection,
  height,
  width,
  variant,
  justifyContent,
  gap
}) => {
  const theme = useTheme(); 

  return (
    <OuterBox flexDirection={flexDirection} height={height} width={width} justifyContent={justifyContent} gap={gap}>
      <StyledTypographyAtom theme={theme} variant={variant}>
        {label}
      </StyledTypographyAtom>
      <Icon src={src} alt={alt} />
    </OuterBox>
  );
}