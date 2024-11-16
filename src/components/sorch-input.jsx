import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  InputAdornment,
} from "@mui/material";
import { useSearch } from "../service/useSorch";
import { SorchIcons } from "../assets/icons/sorch-icons";
import { useDebounce } from "../hooks/useDebounce";

export default function SorchInput() {
  const [input, setInput] = useState("");
  const debounceValue = useDebounce(input);
  const { data, isLoading } = useSearch(debounceValue);
  console.log(data);

  return (
    <Stack sx={{ width: "100%" }} position="static">
      <Stack>
        <Box sx={{ position: "relative" }}>
          <TextField
            InputProps={{
              endAdornment: ( 
                <InputAdornment position="end">
                  <SorchIcons />
                </InputAdornment>
              ),
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
            placeholder="Поиск"
            fullWidth
            sx={{ bgcolor: "background.paper", borderRadius: 1 }}
          />

          {input && data && (
            <Paper
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                mt: 1,
                boxShadow: 3,
                maxHeight: 300,
                overflowY: "auto",
                zIndex: 10000000,
              }}
            >
              {isLoading ? (
                <Typography sx={{ p: 2, textAlign: "center" }}>
                  Loading...
                </Typography>
              ) : (
                <List>
                  {data?.map((item) => (
                    <ListItem
                      button
                      key={item.id}
                      sx={{
                        "&:hover": { bgcolor: "grey.200" },
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        secondary={item.authors}
                        primaryTypographyProps={{
                          fontWeight: "bold",
                          color: "text.primary",
                        }}
                        secondaryTypographyProps={{
                          color: "text.secondary",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
