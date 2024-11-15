import React from "react";
import { Banner } from "../../components/banner";
import { Container, Stack, Typography } from "@mui/material";
import { useCatalogGet } from "../../hooks/useCatalogGet";
import { Catalog } from "../../components/catalog";
import { usePhoneGet } from "../../hooks/usePhoneGet";
import { PhoneProdact } from "../../components/phone-prodact";

export const Home = () => {
  const { data: catalogData, isLoading } = useCatalogGet();

  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <Stack
          mt={4}
          direction="row"
          spacing={4}
          sx={{
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            catalogData?.map((item) => <Catalog key={item.id} {...item} />)
          )}
        </Stack>
      </Container>
      <Container maxWidth="xl">
      
        <Stack>
    <PhoneProdact/>
        </Stack>
      </Container>
    </>
  );
};
