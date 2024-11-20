import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { loadState } from "../../config/store";
import { Navigate, NavLink } from "react-router-dom";
import { DokumentIcons } from "../../assets/icons/dokument-icons";
import { ZakazIcons } from "../../assets/icons/zakaz-icons";
import { AdresIcons } from "../../assets/icons/adres-icons";
import { LikeIcons } from "../../assets/icons/like-icons";
import { Natificeshin } from "../../assets/icons/natificeshin";

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
            <NavLink style={{ textDecoration: "none", color: "black" }}  to={'/profil'}>
            <Stack direction={"row"} sx={{ alignItems: "center", gap: 2,  padding: 2, border: "2px solid #e0e0e0" }}>
              <DokumentIcons/>
              <Typography variant="h5">Персональные данные</Typography>
            </Stack>
            </NavLink>
          <NavLink style={{ textDecoration: "none", color: "black" }}  to={'/profil/zakaz'}>
          <Stack direction={"row"} sx={{ alignItems: "center", gap: 2,  padding: 2, border: "2px solid #e0e0e0" }}>
              <ZakazIcons/>
              <Typography variant="h5">Мои заказы</Typography>
            </Stack>
          </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }} to={'/profil/adres'}>
        <Stack direction={"row"} sx={{ alignItems: "center", gap: 2,  padding: 2, border: "2px solid #e0e0e0" }}>
              <AdresIcons/>
              <Typography variant="h5">Адреса</Typography>
            </Stack>
        </NavLink>
         <NavLink style={{ textDecoration: "none", color: "black" }}  to={'/profil/like'}>
         <Stack direction={"row"} sx={{ alignItems: "center", gap: 2,  padding: 2, border: "2px solid #e0e0e0" }}>
              <LikeIcons/>
              <Typography variant="h5">Избранные товары</Typography>
            </Stack>
         </NavLink>
            <NavLink style={{ textDecoration: "none", color: "black" }} to={'/profil/natificeshin'}>
            <Stack direction={"row"} sx={{ alignItems: "center", gap: 2,  padding: 2, border: "2px solid #e0e0e0" }}>
              <Natificeshin/>
              <Typography variant="h5">Уведомления</Typography>
            </Stack>
            </NavLink>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
