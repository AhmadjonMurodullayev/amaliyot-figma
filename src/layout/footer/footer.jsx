import { Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Facebook } from "../../assets/icons/facebook";
import { Ok } from "../../assets/icons/ok";
import { Tiwiter } from "../../assets/icons/tiwiter";
import { Youtube } from "../../assets/icons/youtube";
import { Instagiram } from "../../assets/icons/instagiram";
import logo from "../../assets/Logo.svg";
import { Payme } from "../../assets/icons/payme";
import { Uscard } from "../../assets/icons/uscard";
import { Humo } from "../../assets/icons/humo";

export const Footer = () => {
  return (
    <>
      <Stack sx={{ backgroundColor: "rgba(245, 245, 246, 1)" }}>
        <Container maxWidth="xl">
          <Stack my={3} direction={"row"} justifyContent={"space-between"}>
            <Stack gap={2}>
              <Stack>
                <img src={logo} alt="logo" />
              </Stack>

              <Stack gap={1}>
                <Typography variant="p" fontWeight={"bold"}>
                  +998 93 355-54-75
                </Typography>
                <Typography variant="p" fontSize={"14px"}>
                  справочная служба
                </Typography>
              </Stack>

              <Stack gap={1}>
                <Typography variant="p" fontWeight={"bold"}>
                  +998 90 456-22-08
                </Typography>
                <Typography variant="p" fontSize={"14px"}>
                  интернет-магазин
                </Typography>
              </Stack>

              <Stack>
                <Typography variant="p" fontWeight={"bold"}>
                  Оставайтесь на связи
                </Typography>
                <Stack direction={"row"} gap={2}>
                  <IconButton>
                    <Facebook />
                  </IconButton>
                  <IconButton>
                    <Ok />
                  </IconButton>
                  <IconButton>
                    <Tiwiter />
                  </IconButton>
                  <IconButton>
                    <Youtube />
                  </IconButton>
                  <IconButton>
                    <Instagiram />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>

            <Stack gap={2}>
              <Typography variant="p">Условия обмена и возврата</Typography>
              <Typography variant="p">Каталог</Typography>
              <Typography variant="p">О компании</Typography>
              <Typography variant="p">Контакты</Typography>
              <Typography variant="p">Доставка</Typography>
              <Typography variant="p">Оплата</Typography>
            </Stack>

            <Stack gap={2}>
              <Typography variant="p">Клиентам</Typography>
              <Typography variant="p">Личный кабинет</Typography>
              <Typography variant="p">Блог</Typography>
            </Stack>

            <Stack gap={2}>
              <Typography variant="p">Информация</Typography>
              <Typography variant="p">Пользовательское соглашение</Typography>
              <Typography variant="p">
                Политика конфиденциальности и оферта
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack sx={{ backgroundColor: "rgba(234, 234, 234, 1)" }}>
        <Container maxWidth="xl">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ height: "50px" }}
          >
            <Typography variant="p">
              © 2022 Любое использование контента без письменного разрешения
              запрещено
            </Typography>
            <Stack direction={"row"} gap={2}>
              <IconButton>
                <Payme />
              </IconButton>
              <IconButton>
                <Uscard />
              </IconButton>
              <IconButton>
                <Humo />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
