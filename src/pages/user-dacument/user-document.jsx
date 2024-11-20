import React from "react";
import { Stack, Typography } from "@mui/material";
import { loadState } from "../../config/store";

export const UserDocument = () => {
  const userData = loadState("userData");
  if (!userData || !userData.user) {
    return (
      <Typography variant="h6" color="error">
        Пользовательские данные не найдены.
      </Typography>
    );
  }

  const { id, name, tel, birthDate, gender, email } = userData.user;

  return (
    <>
      <Stack>
        <Typography variant="h5" fontWeight={"bold"}>
          Персональные данные
        </Typography>
      </Stack>
      <Stack my={2} gap={2}>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <Typography>ID пользователя</Typography>
          <Stack
            sx={{ width: "300px", height: "1.5px", backgroundColor: "black" }}
          ></Stack>
          <Typography>{id || "Не указано"}</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <Typography>Имя и фамилия</Typography>
          <Stack
            sx={{ width: "300px", height: "1.5px", backgroundColor: "black" }}
          ></Stack>
          <Typography>{name || "Не указано"}</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <Typography>Номер телефона </Typography>
          <Stack
            sx={{ width: "300px", height: "1.5px", backgroundColor: "black" }}
          ></Stack>
          <Typography>{tel || "Не указано"}</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <Typography>Дата рождения</Typography>
          <Stack
            sx={{ width: "300px", height: "1.5px", backgroundColor: "black" }}
          ></Stack>
          <Typography>{birthDate || "Не указано"}</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <Typography>Пол</Typography>
          <Stack
            sx={{ width: "300px", height: "1.5px", backgroundColor: "black" }}
          ></Stack>
          <Typography>{gender || "Не указано"}</Typography>
        </Stack>
        <Stack alignItems={"center"} direction={"row"} gap={2}>
          <Typography>Электронная почта</Typography>
          <Stack
            sx={{ width: "300px", height: "1.5px", backgroundColor: "black" }}
          ></Stack>
          <Typography>{email || "Не указано"}</Typography>
        </Stack>
      </Stack>
    </>
  );
};
