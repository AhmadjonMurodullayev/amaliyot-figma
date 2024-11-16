import React from "react";
import { usePhoneGet } from "../../hooks/usePhoneGet";
import { Container, Stack, Typography, Grid2 } from "@mui/material";
import { PhonePages } from "../../components/phone-pages";

export const Phone = () => {
  const { data } = usePhoneGet();

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Stack direction={"row"} spacing={1}>
          <Typography variant="h5" color="#7e7e7e">
            Главная /
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Смартфоны и планшеты
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="xl">
        <Stack direction={"row"}>
          <Stack direction={"row"} display={"flex"} flexWrap={"wrap"}>
            {data?.map((item) => (
              <Stack>
                <PhonePages {...item} />
              </Stack>
            ))}
          </Stack>
          <Stack>lorem500000</Stack>
        </Stack>
      </Container>
    </>
  );
};
