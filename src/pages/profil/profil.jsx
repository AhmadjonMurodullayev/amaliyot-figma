import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

export const Profil = () => {
  return (
    <>
    <Container maxWidth="xl">
      <Stack direction={'row'}>

        <Stack spacing={2}>
   <Stack sx={{ padding: 2, border: '2px solid #e0e0e0' }}>
    <Typography variant="h5">
    Персональные данные
    </Typography>
   </Stack>
        </Stack>
      </Stack>
    </Container>
    </>
  )
}
