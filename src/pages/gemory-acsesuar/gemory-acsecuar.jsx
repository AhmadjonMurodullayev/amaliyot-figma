import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { GemoryAcsesuarPages } from '../../components/gemory-acsesuar-pages'
import { useCopyuterGet } from '../../hooks/useCopyuterGet'

export const GemoryAcsecuar = () => {
    const { data } = useCopyuterGet()
  return (
   <>
    <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Stack direction={"row"} spacing={1}>
          <Typography variant="h5" color="#7e7e7e">
            Главная /
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Copyuters
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="xl">
        <Stack direction={"row"}>
          <Stack direction={"row"} display={"flex"} flexWrap={"wrap"}>
            {data?.map((item) => (
              <Stack>
                <GemoryAcsesuarPages {...item} />
              </Stack>
            ))}
           
          </Stack>
          <Stack>lorem500000</Stack>
        </Stack>
      </Container></>
  )
}
