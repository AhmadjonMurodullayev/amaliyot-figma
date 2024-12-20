import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
      <Stack textAlign={"center"}>
        <Typography variant="subtitle1" fontWeight="bold">
          <Link to={`/catigory/${name}`} style={{ textDecoration: "none", color: "black" }}>
          {text}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};
