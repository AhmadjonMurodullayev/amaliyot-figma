import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { KorizkaIcons } from "../assets/icons/korizka-icons";
import { usePhoneGet } from "../hooks/usePhoneGet";
import { LeftIcons } from "../assets/icons/left-icons";
import { RightIcons } from "../assets/icons/right-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/product-reducer";
import { Link, useNavigate } from "react-router-dom";
import { EysIcons } from "../assets/icons/eys-icons";

export const PhoneProdact = () => {
  const { data, isLoading } = usePhoneGet();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (item) => {
    try {
      let price = "";
      for (let i of item.price) {
        if (i !== " ") {
          price += i;
        }
      }

      const parsedPrice = Number(price);

      dispatch(addCart({ ...item, price: parsedPrice }));

      setCartItems((prev) => [...prev, item.id]);
      toast.success("Mufaqqatliy qo'shildi", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Ошибка при добавлении товара в корзину.", {
        position: "top-right",
      });
    }
  };

  const handleNavigateToCart = () => {
    navigate("/korzina");
  };

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
        <Stack my={1} justifyContent={"end"} direction={"row"}>
          <button
            style={{ border: "none", backgroundColor: "inherit" }}
            className="arrow-right arrow"
          >
            <LeftIcons />
          </button>
          <button
            style={{ border: "none", backgroundColor: "inherit" }}
            className="arrow-lefts arrow"
          >
            <RightIcons />
          </button>
        </Stack>
      </Stack>

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".arrow-lefts", prevEl: ".arrow-right" }}
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
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/korzina/${item.id}`}
                  >
                    <Typography variant="p" fontFamily={"Jost"}>
                      Смартфон {item.brand} {item.titel} {item.rame}
                      {item.color}
                    </Typography>
                  </Link>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <Typography fontWeight="bold">{item.price} Сум</Typography>
                  {cartItems.includes(item.id) ? (
                    <Button
                      onClick={handleNavigateToCart}
                      variant="outlined"
                      sx={{
                        backgroundColor: "rgba(254, 238, 0, 1)",
                        minWidth: "40px",
                        minHeight: "40px",
                        padding: 1,
                      }}
                    >
                      <EysIcons />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleClick(item)}
                      variant="outlined"
                      sx={{
                        backgroundColor: "rgba(254, 238, 0, 1)",
                        minWidth: "40px",
                        minHeight: "40px",
                        padding: 1,
                      }}
                    >
                      <KorizkaIcons />
                    </Button>
                  )}
                </Stack>
              </Stack>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};
