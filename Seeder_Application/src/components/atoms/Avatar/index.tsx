
import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import { styled } from '@mui/system';

interface AvatarProps {
  src?: string;
  alt?: string;
}

const StyledAvatar = styled(MuiAvatar)({
  width: '32px',
  height: '32px',
  borderRadius: '12px',
  margin: '8px',
  opacity: 1,
});

const Avatar: React.FC<AvatarProps> = ({ alt, src }) => {
  return (
    <StyledAvatar src={src} alt={alt}/>
     
   
  );
};

export default Avatar;
