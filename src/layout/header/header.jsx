import React from "react";
import { Navbar } from "./navbar";
import logo from "../../assets/Logo.svg";
import {
  Badge,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  Button, // Added import for Button
} from "@mui/material";
import { BurgerIcons } from "../../assets/icons/burger-icons";
import { LikeIcons } from "../../assets/icons/like-icons";
import { UserIcons } from "../../assets/icons/user-icons";
import SorchInput from "../../components/sorch-input";
import { KorizkaIcons } from "../../assets/icons/korizka-icons";
import { useSelector } from "react-redux";

export const Header = () => {
  const [show, setShow] = React.useState(false);
  const { count } = useSelector((state) => state.product);

  return (
    <>
      <Navbar />
      <Stack sx={{ height: "70px" }}>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={4} sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Stack direction="row" spacing={4}>
              <img src={logo} alt="logo" />
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  backgroundColor: "rgba(254, 238, 0, 1)",
                  padding: "0 20px",
                  borderRadius: "8px",
                }}
              >
                <IconButton>
                  <BurgerIcons />
                </IconButton>
                Каталог
              </Stack>
              <Stack direction="row" sx={{width: "800px"}}>

              <SorchInput /> 
              </Stack>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center">
              <Stack alignItems="center">
                <IconButton>
                  <UserIcons />
                </IconButton>
                <Typography variant="body2">Войти</Typography>
              </Stack>
              <Stack alignItems="center">
                <IconButton>
                  <LikeIcons />
                </IconButton>
                <Typography variant="body2">Избранное</Typography>
              </Stack>
              <Stack alignItems="center">
                <IconButton onClick={() => setShow(true)}>
                  <Badge badgeContent={count ? count : 0} color="error">
                    <KorizkaIcons />
                  </Badge>
                </IconButton>
                <Typography variant="body2">Корзина</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>

        <Drawer onClose={() => setShow(false)} open={show} anchor="left">
          <Button
            onClick={() => setShow(false)}
            sx={{ marginLeft: "auto", fontSize: "30px", padding: "10px" }}
          >
            X
          </Button>
        </Drawer>
      </Stack>
    </>
  );
};
