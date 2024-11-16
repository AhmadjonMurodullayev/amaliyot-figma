import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { LikeIcons } from "../assets/icons/like-icons";
import { KorizkaIcons } from "../assets/icons/korizka-icons";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/product-reducer";

export const GemoryAcsesuarPages = ({ id, img, title, rame, color, brand, price }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    try {
      const parsedPrice = Number(price.replace(/\s/g, ""));
      const product = { id, img, title, rame, color, brand, price: parsedPrice };

      dispatch(addCart(product));

      toast.success("Товар успешно добавлен!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Ошибка при добавлении товара в корзину.", {
        position: "top-right",
      });
    }
  };

  return (
    <Stack
      width={"250px"}
      position="relative"
      spacing={1}
      p={1.5}
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "8px",
          backgroundColor: "#fff",
          padding: 0.5,
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
      </Stack>

      <Stack
        sx={{
          position: "absolute",
          right: "8px",
          top: "8px",
          backgroundColor: "#fff",
          padding: "4px",
          borderRadius: "50%",
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <IconButton>
          <LikeIcons />
        </IconButton>
      </Stack>

      <Stack>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Jost",
            fontSize: "16px",
            color: "#333",
            lineHeight: "1.4",
          }}
        >
          {title} {rame} {color} {brand}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: "#000",
            fontSize: "16px",
          }}
        >
          {price} Сум
        </Typography>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            backgroundColor: "rgba(254, 238, 0, 1)",
            color: "#000",
            borderRadius: "6px",
            padding: "6px",
            minWidth: "36px",
            minHeight: "36px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#fdd835",
            },
          }}
        >
          <KorizkaIcons />
        </Button>
      </Stack>
    </Stack>
  );
};
