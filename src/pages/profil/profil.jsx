import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { loadState } from "../../config/store";
import { Navigate } from "react-router-dom";

export const Profil = () => {
  const user = loadState('userData');

  if(!user){
    return <Navigate replace to={'/'} />
  }

  return (
    <>
      <Container maxWidth="xl">
        <Stack direction={"row"}>
          <Stack spacing={2}>
            <Stack sx={{ padding: 2, border: "2px solid #e0e0e0" }}>
              <Typography variant="h5">Персональные данные</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
