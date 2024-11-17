import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../../service/useLogin";

export const SingIn = () => {
  const { handleSubmit, register, reset } = useForm();
  const{mutate}=useLogin()

  const submit = (data) => {
    mutate(data,{
      onSuccess:(data)=>{
        
      }
    })
  };
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h5" fontWeight={"bold"}>
          Войти или создать профиль
        </Typography>
        <form onSubmit={handleSubmit(submit)}>
          <Stack spacing={1}>
            <Typography variant="p" color="#7e7e7e">
              Номер телефона
            </Typography>
            <TextField
              type="number"
              {...register("phone")}
              variant="outlined"
              fullWidth
              placeholder="Введите номер телефона"
            />
          </Stack>
          <Stack my={2} spacing={1}>
            <Typography variant="p" color="#7e7e7e">
              Пароль
            </Typography>
            <TextField
              type="password"
              {...register("password")}
              variant="outlined"
              fullWidth
              placeholder="Введите пароль"
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"end"}>
            <Typography variant="p" color="#7e7e7e">
              Забыли пароль?
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="black"
              sx={{
                backgroundColor: "rgba(254, 238, 0, 1)",
                padding: "12px 0",
              }}
              fullWidth
              type="submit"
            >
              Войти
            </Button>
            <Link to="/sing-up" style={{ textDecoration: "none" }}>
              <Button
                color="black"
                sx={{ padding: "12px 0" }}
                variant="outlined"
                fullWidth
              >
                Зарегистрироваться
              </Button>
            </Link>
          </Stack>
        </form>
      </Stack>
    </>
  );
};
