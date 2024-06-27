import { ThemeProvider } from "@emotion/react";
import { Button, CssBaseline, Typography } from "@mui/material";
import React from 'react'

import theme from "./theme/index";
import Avatar from "./components/atoms/Avatar/index";
import CustomChip from "./components/atoms/Chip/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
     <CssBaseline/>
      <CustomChip backgroundColor="red" label="hello" fontSize={27.5}/>
    </ThemeProvider>
  );
}