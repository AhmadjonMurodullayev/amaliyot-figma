import { IconButton, Stack, Typography, Box, Container, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, toggleAmount } from "../redux/product-reducer";
import formatter from "../config/cyrrenscy-format";

export const SaveProdact = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Container maxWidth="xl">
        <Stack sx={{ width: "70%" }}>
          <Stack
            mb={2}
            spacing={5}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 2, borderBottom: "1px solid #e0e0e0" }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center" }}
            >
              <Stack>
                <img src={props.img} alt="" />
              </Stack>
              <Stack>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="h6" color="text.secondary">
                  {/* { props.price}  */}
                  {formatter(props.price)}Сум
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" spacing={1}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {formatter(props.user_price)} sum
              </Typography>


              <Stack sx={{backgroundColor: "rgba(237, 237, 237, 1)",padding: "2px "}} direction="row" alignItems="center" spacing={1}>
                <Button
                sx={{backgroundColor: "white", borderRadius: "none"}}
                  onClick={() =>
                    dispatch(toggleAmount({ id: props.id, type: "increment" }))
                  }
                >
                  +
                </Button>
                <Typography>{props.user_count}</Typography>
                {props.user_count < 2 ? (
                  <Button
                    sx={{ backgroundColor: "white", borderRadius: "none" }}
                    onClick={() => dispatch(deleteProduct({ id: props.id }))}
                  >
                    x
                  </Button>
                ) : (
                  <Button
                    sx={{ backgroundColor: "white", borderRadius: "none" }}
                    onClick={() =>
                      dispatch(
                        toggleAmount({ id: props.id, type: "decrement" })
                      )
                    }
                  >
                    -
                  </Button>
                )}
              </Stack>
            
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
