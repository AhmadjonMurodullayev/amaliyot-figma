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
  Button,
} from "@mui/material";
import { BurgerIcons } from "../../assets/icons/burger-icons";
import { LikeIcons } from "../../assets/icons/like-icons";
import { UserIcons } from "../../assets/icons/user-icons";
import SorchInput from "../../components/sorch-input";
import { KorizkaIcons } from "../../assets/icons/korizka-icons";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SingUp } from "../../pages/sing-up/sing-up";
import { SingIn } from "../../pages/sing-in/sing-in";
import { loadState } from "../../config/store";

export const Header = () => {
  const { count } = useSelector((state) => state.product);
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState("signIn");
  const navigate = useNavigate()
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleUserIconClick = () => {
    const token = loadState("userData")
    if (token) {
      navigate("/profil"); 
    } else {
      setOpen(true); 
    }
  };
  return (
    <>
      <Navbar />
      <Stack sx={{ height: "70px" }}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={4}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
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
              <Stack direction="row" sx={{ width: "800px" }}>
                <SorchInput />
              </Stack>
            </Stack>

            <Stack direction="row" spacing={4} alignItems="center">
              <Stack alignItems="center">
                <IconButton onClick={ handleUserIconClick}>
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
                <Link to={"/korzina"}>
                  <IconButton>
                    <Badge badgeContent={count} color="error">
                      <KorizkaIcons />
                    </Badge>
                  </IconButton>
                </Link>
                <Typography variant="body2">Корзина</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>

        <Drawer
          sx={{ width: "500px" }}
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Button
            onClick={() => setOpen(false)}
            sx={{ marginLeft: "auto", fontSize: "30px" }}
          >
            X
          </Button>
          <Stack sx={{ padding: "0 25px" }}>
            {view === "signIn" ? <SingIn /> : <SingUp />}
          </Stack>
          <Container>
            {view === "signIn" ? (
              <Button
                color="black"
                sx={{ padding: "12px 0", marginTop: "20px" }}
                variant="outlined"
                fullWidth
                onClick={() => setView("signUp")}
              >
                Зарегистрироваться
              </Button>
            ) : (
              <Button
                color="black"
                sx={{ padding: "12px 0", marginTop: "20px" }}
                variant="outlined"
                fullWidth
                onClick={() => setView("signIn")}
              >
                Back to Sign In
              </Button>
            )}
          </Container>
        </Drawer>
      </Stack>
    </>
  );
};
