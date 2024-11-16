import React from "react";
import { useParams } from "react-router-dom";
import { useGetAll } from "../hooks/useGetAll";
import {
  Button,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { LikeIcons } from "../assets/icons/like-icons";

export const Korzina = () => {
  const { id } = useParams();
  const { data } = useGetAll(id);
  console.log(id);

  return (
    <>
      <Container maxWidth="xl">
        <Stack sx={{ height: "50px", alignItems: "center" }} direction={"row"}>
          <Typography sx={{ color: "rgba(51, 51, 51, 1)" }} variant="h5">
            Главная /
          </Typography>
          <Typography variant="h5">Смартфоны и планшеты</Typography>
        </Stack>
      </Container>

      <Container sx={{ my: "40px" }} maxWidth="xl">
        <Stack borderBottom={"1px solid #e0e0e0"} gap={2}>
          <Typography sx={{ fontWeight: "bold" }} variant="h4">
            Смартфон {data?.title}
          </Typography>
          <Stack my={1} gap={3} direction={"row"} alignItems={"center"}>
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            <Stack alignItems={"center"} direction={"row"}>
              <IconButton>
                <LikeIcons />
              </IconButton>
              <Typography>В избранное</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack my={2}>
          <Stack position={"relative"} alignItems={"center"} direction={"row"}>
            <Stack sx={{ width: "30%" }}>
              <img style={{ width: "100%" }} src={data?.img} alt="" />
            </Stack>

            <Stack gap={2}>
              <Stack gap={1}>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Объем памяти
                </Typography>
                <Typography variant="p">{data?.rame}</Typography>
              </Stack>

              <Stack gap={2}>
                <Typography variant="p" sx={{ fontWeight: "bold" }}>
                  Характеристики
                </Typography>

                <Stack direction={"row"} gap={2}>
                  <Typography color="#7E7E7E" variant="p">
                    Цвет:
                  </Typography>
                  <Typography variant="p">{data?.color}</Typography>
                </Stack>

                <Stack direction={"row"} gap={2}>
                  <Typography color="#7E7E7E" variant="p">
                    экран:
                  </Typography>
                  <Typography variant="p">6.2"/2400x1080 Пикс</Typography>
                </Stack>

                <Stack direction={"row"} gap={2}>
                  <Typography color="#7E7E7E" variant="p">
                    оперативная память:
                  </Typography>
                  <Typography variant="p">8GB</Typography>
                </Stack>

                <Stack direction={"row"} gap={2}>
                  <Typography color="#7E7E7E" variant="p">
                    память:
                  </Typography>
                  <Typography variant="p">{data?.rame}</Typography>
                </Stack>

                <Stack direction={"row"} gap={2}>
                  <Typography color="#7E7E7E" variant="p">
                    4 камеры:
                  </Typography>
                  <Typography variant="p">64/12/12</Typography>
                </Stack>

                <Stack direction={"row"} gap={2}>
                  <Typography color="#7E7E7E" variant="p">
                    беспроводные интерфейсы:
                  </Typography>
                  <Typography variant="p">NFC, Wi-Fi, Bluetooth 5.0</Typography>
                </Stack>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "bold", color: "rgba(228, 69, 66, 1)" }}
                >
                  Все характеристики
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                padding: 2,
                border: "2px solid #e0e0e0",
                position: "absolute",
                top: "30px",
                right: "90px",
                gap: 2,
              }}
            >
              <Stack gap={12} direction={"row"} alignItems={"center"}>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  variant="h5"
                  color="#7E7E7E"
                >
                  74 990.00 Сум
                </Typography>
                <Stack
                  direction={"row"}
                  sx={{
                    backgroundColor: "rgba(228, 69, 66, 1)",
                    padding: "2px 10px",
                  }}
                >
                  -9%
                </Stack>
              </Stack>
              <Typography variant="h4" fontWeight={"bold"}>
                {data?.price} Сум
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(254, 238, 0, 1) ",
                  color: "black",
                }}
              >
                В корзину
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
            <Stack mx={5} direction={"row"} gap={9}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Характеристики
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" ,color:"#7E7E7E"}}>
                Отзывы
                </Typography>
            </Stack>
            <Stack my={2} direction={"row"} justifyContent={"space-between"}>

                <Stack gap={2}>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    Цвет
                    </Typography>
                    <Stack sx={{width:"350px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> белый</Typography>
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    оперативная память
                    </Typography>
                    <Stack sx={{width:"248px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> 8GB</Typography>
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    4 камеры
                    </Typography>
                    <Stack sx={{width:"300px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> 64/12/12</Typography>
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    интернет
                    </Typography>
                    <Stack sx={{width:"320px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> 5G LTE</Typography>
                  </Stack>

                </Stack>


                <Stack gap={2}>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    экран
                    </Typography>
                    <Stack sx={{width:"350px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> 6.2"/2400x1080 Пикс</Typography>
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                     память
                    </Typography>
                    <Stack sx={{width:"350px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> 8GB</Typography>
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    беспроводные интерфейсы
                    </Typography>
                    <Stack sx={{width:"200px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> NFC, Wi-Fi, Bluetooth 5.0</Typography>
                  </Stack>

                  <Stack gap={2} direction={"row"} alignItems={"center"}>
                    <Typography variant="p" >
                    вес
                    </Typography>
                    <Stack sx={{width:"380px", height: "1px", backgroundColor:"#7E7E7E"}}>
                    </Stack>
                    <Typography variant="p"> 205 г</Typography>
                  </Stack>

                </Stack>
                
            </Stack>
        </Stack>
      </Container>
    </>
  );
};
