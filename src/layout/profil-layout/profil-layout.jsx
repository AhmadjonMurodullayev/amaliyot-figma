import React from "react";
import { loadState } from "../../config/store";
import { Navigate, Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import { Profil } from "../../pages/profil/profil";

export const ProfilLayout = () => {
  const user = loadState("userData");

  if (!user) {
    return <Navigate replace to={"/"} />;
  }
  return (
    <>
      <Container maxWidth="xl">
        <Stack spacing={5} direction={"row"}>
          <Stack>
            <Profil />
          </Stack>
          <Stack>
            <Outlet />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
