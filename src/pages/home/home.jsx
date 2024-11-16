import React from "react";
import { Banner } from "../../components/banner";
import { Container, Stack, Typography } from "@mui/material";
import { useCatalogGet } from "../../hooks/useCatalogGet";
import { Catalog } from "../../components/catalog";
import { PhoneProdact } from "../../components/phone-prodact";
import { useAksiya } from "../../hooks/useAksiya";
import { Aksiya } from "../../components/aksiya";
import { usePhoneGet } from "../../hooks/usePhoneGet";
import { useNotebookGet } from "../../hooks/useNotebookGet";
import { SmartfonCatigory } from "../../components/smartfon-catigory";
import { NotebookCategory } from "../../components/notebook-category";
import { NotebokProdact } from "../../components/notebok-prodact";
import { useBrandGet } from "../../hooks/useBrandGet";
import { Barand } from "../../components/barand";

export const Home = () => {
  const { data: catalogData, isLoading } = useCatalogGet();
  const { data: phoneData } = usePhoneGet();
  const { data: notebookData } = useNotebookGet();
  const { data: aksiya } = useAksiya();
  const { data: brandData } = useBrandGet();
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
          <PhoneProdact />
        </Stack>
      </Container>

      <Stack
        sx={{
          backgroundColor: "rgba(0, 203, 254, 1)",
          height: "100%",
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Stack p={4}>
            <Typography variant="h4">Акции</Typography>
            <Stack my={3} direction={"row"} spacing={4}>
              {isLoading ? (
                <Typography>Loading...</Typography>
              ) : (
                aksiya?.map((item) => <Aksiya key={item.id} {...item} />)
              )}
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Stack my={4}>
        <Container maxWidth="xl">
          <Stack spacing={4} direction={"row"}>
            <Stack sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #e0e0e0", paddingBottom: 1 }}
              >
                Смартфоны и планшеты
              </Typography>
              <Stack sx={{ gap: 2 }}>
                {phoneData?.splice(0, 4)?.map((item) => {
                  return <SmartfonCatigory key={item.id} {...item} />;
                })}
              </Stack>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #e0e0e0", paddingBottom: 1 }}
              >
                Ноутбуки, планшеты и компьютеры
              </Typography>
              <Stack gap={2}>
                {notebookData?.splice(0, 3)?.map((item) => {
                  return <NotebookCategory key={item.id} {...item} />;
                })}
              </Stack>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ borderBottom: "2px solid #e0e0e0", paddingBottom: 1 }}
              >
                Смартфоны и планшеты
              </Typography>
              <Stack sx={{ gap: 2 }}>
                {phoneData?.splice(0, 4)?.map((item) => {
                  return <SmartfonCatigory key={item.id} {...item} />;
                })}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Stack>
        <Container maxWidth="xl">
          <Stack>
            <PhoneProdact />
          </Stack>
        </Container>
      </Stack>

      <Stack>
        <Container maxWidth="xl">
          <Stack>
            <NotebokProdact />
          </Stack>
        </Container>
      </Stack>

      <Stack my={4}>
        <Container maxWidth="xl">
          <Stack>
            <Typography my={2} variant="h4">Популярные бренды</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ display: "flex", flexWrap: "wrap" }}
            spacing={4}
          >
            <Stack gap={2} direction="row" sx={{ flexWrap: "wrap" }}>
              {brandData?.map((item) => (
                <Barand key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
