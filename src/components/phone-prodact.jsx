import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Stack, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { KorizkaIcons } from "../assets/icons/korizka-icons";
import { usePhoneGet } from "../hooks/usePhoneGet";
import { LeftIcons } from "./left-icons";
import { RightIcons } from "./right-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/product-reducer";

export const PhoneProdact = (props) => {
  const { data, isLoading } = usePhoneGet();
  const dispatch = useDispatch()

  return (
    <>
      <Stack
      my={4}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography variant="h4" fontFamily={"monospace"}>
            Смартфоны и планшеты
          </Typography>
        </Stack>
        <Stack my={1} justifyContent={"end"} direction={"row"} gap={6}>
          <IconButton
            className="swiper-button-prev"
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <LeftIcons />
          </IconButton>

          <IconButton
            className="swiper-button-next"
            sx={{
              backgroundColor: "white",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <RightIcons />
          </IconButton>
        </Stack>
      </Stack>

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {isLoading ? (
          <Typography variant="h6">Loading...</Typography>
        ) : (
          data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Stack
                spacing={1.5}
                p={2}
                sx={{
                  backgroundColor: "#f6f6f6",
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={item.img}
                  alt="product-img"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
                <Stack spacing={0.5}>
                  <Typography fontWeight="bold">
                    Смартфон {item.barand}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.titel} {item.rame}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Цвет: {item.color}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <Typography fontWeight="bold">{item.price} Сум</Typography>
                  <Button
                    onClick={()=> dispatch(addCart(props))}
                    variant='outlined'
                    sx={{
                      backgroundColor: "rgba(254, 238, 0, 1)",
                      minWidth: "40px",
                      minHeight: "40px",
                      padding: 1,
                    }}
                  >
                    <KorizkaIcons />
                  </Button>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <style jsx>{`
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};
