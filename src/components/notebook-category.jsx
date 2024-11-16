import { Stack, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import React from 'react';

export const NotebookCategory = ({ id, img, title, ram, color, brand, price, geForce, display, core, memory }) => {
  return (
    <Stack direction={'row'} sx={{ display: 'flex', p: 1, alignItems: 'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 140, objectFit: 'contain' }}
        image={img}
        alt={title}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
        <Stack spacing={1}>
          <Typography variant="p" fontSize={"17px"} fontFamily={"Jost"}>
            Ноутбук {title}, {ram}, {color} ({brand})
            {geForce}, {display}, {core}, {memory}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" color="black" fontWeight="bold">
            {price} Сум
          </Typography>

        </Stack>
      </CardContent>
    </Stack>
  );
};
