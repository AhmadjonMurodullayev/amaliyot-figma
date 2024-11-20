import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "../../service/useRegister";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SingUp = () => {
  const { handleSubmit, register, reset } = useForm();
  const naviget = useNavigate();
  const { mutate } = useRegister();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        reset();
        naviget("/profil");
      },
      onError: (data) => {
        toast.error(data.response.data.message);
      },
    });
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
              // value={"+998"}
              defaultValue={"+998"}
              type="tel"
              {...register("tel")}
              variant="outlined"
              fullWidth
              placeholder="Введите номер телефона"
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="p" color="#7e7e7e">
              Email адрес
            </Typography>
            <TextField
              type="email"
              {...register("email")}
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
          </Stack>
        </form>
      </Stack>
    </>
  );
};
