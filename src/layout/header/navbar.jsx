import { Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { PhoneIcons } from "../../assets/icons/phone-icons";

export const Navbar = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{sm: {display: "none"}, md: {display: "flex"}}}>
        <Stack
          direction="row"
          spacing={3}
          sx={{ height: "60px", alignItems: "center", justifyContent: "end" }}
        >
          <Typography variant="p">Доставка и оплата</Typography>
          <Typography variant="p">Пункты выдачи</Typography>
          <Typography variant="p">Поддержка </Typography>
          <IconButton>
            <PhoneIcons />
          </IconButton>
          <Typography variant="p">+998 90 222 26 47</Typography>
        </Stack>
      </Container>
    </>
  );
};
