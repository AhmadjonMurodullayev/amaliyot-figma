import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNotebookGet } from "../../hooks/useNotebookGet";
import { CopyuterPages } from "../../components/copyuter-pages";

export const Copyuter = () => {
  const { data } = useNotebookGet();
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
                <CopyuterPages {...item} />
              </Stack>
            ))}
           
          </Stack>
          <Stack>lorem500000</Stack>
        </Stack>
      </Container>
    </>
  );
};
