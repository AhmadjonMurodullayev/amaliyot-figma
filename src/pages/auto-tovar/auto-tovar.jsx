import React from "react";
import { useAutoTovar } from "../../hooks/useAutoTovar";
import { Container, Stack, Typography } from "@mui/material";
import { AutoTovarProdatc } from "../../components/auto-tovar-prodatc";

export const AutoTovar = () => {
    const { data } = useAutoTovar()
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Stack direction={"row"} spacing={1}>
          <Typography variant="h5" color="#7e7e7e">
            Главная /
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            Auto Tovar
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="xl">
        <Stack direction={"row"}>
          <Stack direction={"row"} display={"flex"} flexWrap={"wrap"}>
            {data?.map((item) => (
              <Stack>
                <AutoTovarProdatc {...item} />
              </Stack>
            ))}
          </Stack>
          <Stack>lorem500000</Stack>
        </Stack>
      </Container>
    </>
  );
};
