import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNotebookGet } from "../hooks/useNotebookGet";
import { addCart } from "../redux/product-reducer";
import { KorizkaIcons } from "../assets/icons/korizka-icons";
import { LeftIcons } from "../assets/icons/left-icons";
import { RightIcons } from "../assets/icons/right-icons";

export const NotebokProdact = (props) => {
  const { data, isLoading } = useNotebookGet();
  const dispatch = useDispatch();

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

      toast.success("Mufaqqatliy qo'shildi", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Ошибка при добавлении товара в корзину.", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Stack
        my={3}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h4" fontFamily={"monospace"}>
          Смартфоны и планшеты
        </Typography>
        <Stack direction={"row"} gap={2}>
          <button
            style={{ border: "none", backgroundColor: "inherit" }}
            className="arrow-right arrow"
          >
            <LeftIcons />
          </button>
          <button
            style={{ border: "none", backgroundColor: "inherit" }}
            className="arrow-left arrow"
          >
            <RightIcons />
          </button>
        </Stack>
      </Stack>

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
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
                </Stack>
              </Stack>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};
