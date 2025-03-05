import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function ButtonVariants() {
  return (
    <div>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button variant="outlined">Outlined</Button> 
    </Box>
     <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
     <Button variant="outlined">Outlined</Button> 
   </Box>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
    <Button variant="outlined">Outlined</Button> 
  </Box> 
    </div>
   
  );
}