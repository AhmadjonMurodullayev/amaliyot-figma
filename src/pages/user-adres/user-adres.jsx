import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useUsersGet } from "../../hooks/useUsersGet";
import { toast } from "react-toastify";

export const UserAdres = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate } = useUsersGet();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (data) => {
        toast.error(data.response.data.message);
      },
    });
    reset();
  };

  return (
    <>
      <h1>User Address</h1>
      <Stack direction={"row"}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
          onSubmit={handleSubmit(submit)}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            type="text"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            fullWidth
            variant="outlined"
            type="date"
            {...register("date", { required: "Date is required" })}
            error={!!errors.date}
            helperText={errors.date?.message}
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Location"
            type="text"
            {...register("location", { required: "Location is required" })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />

          <Button variant="contained" type="submit">
            Save
          </Button>
        </form>
      </Stack>
    </>
  );
};
