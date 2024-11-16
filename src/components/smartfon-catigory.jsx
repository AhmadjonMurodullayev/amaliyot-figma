import { Stack, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import React from 'react';

export const SmartfonCatigory = ({ id, img, title, rame, color, brand, price }) => {
  return (
    <Stack direction={'row'} sx={{ display: 'flex', p: 2,  gap: 2}}>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, objectFit: 'contain',  }}
        image={img}
        alt={title}
      />
      <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
        <Stack spacing={2}>
          <Typography variant="p" fontSize={"20px"} fontFamily={"Jost"}>
            Смартфон {title}, {rame}, {color} ({brand})
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" color="black" fontWeight="bold">
            {price} Сум
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
