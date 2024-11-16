import { Stack, Typography } from '@mui/material';
import React from 'react';

export const Barand = ({ img, brand }) => {
  return (
    <>
      <Stack
        spacing={2}
        p={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 6px 15px rgba(0,0,0,0.2)',
          },
        }}
      >
        <Stack
          sx={{
            width: '181px',
            height: '90px',
            overflow: 'hidden',
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={img}
            alt="brand-logo"
            style={{
              objectFit: 'contain',
              overflow: 'hidden',
              width: '80%',
              height: 'auto',
            }}
          />
        </Stack>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            color: '#333',
            fontFamily: 'monospace',
          }}
        >
          {brand}
        </Typography>
      </Stack>
    </>
  );
};
