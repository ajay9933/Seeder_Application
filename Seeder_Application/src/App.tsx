import { ThemeProvider } from "@emotion/react";
import { Button, CssBaseline, Typography } from "@mui/material";
import React from 'react'

import theme from "./theme/index";
import Avatar from "./components/atoms/Avatar/index";
import Chip from '../src/components/atoms/Chip/index'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
     <CssBaseline/>
      <Chip label="lopa" customcolor="red" backgroundColor="pink" fontFamily="Arial"lineHeight={200}  />
    </ThemeProvider>
  );
}