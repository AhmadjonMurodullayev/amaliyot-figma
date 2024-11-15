import { Stack, Typography } from "@mui/material";
import React from "react";

export const Catalog = ({ id, img, text, name }) => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "rgba(246, 246, 246, 1)",
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "300px",
        padding: 2,
        borderRadius: 1,
      }}
    >
      <Stack>
        <img src={img} alt={name} style={{ width: "100%", height: "auto" }} />
      </Stack>
      <Stack ml={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
};
