import React from 'react'
import { useParams } from 'react-router-dom'
import { useCatalog } from '../../hooks/useCatalog'
import {
    Container,
    Stack,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
    FormControl,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CatigoryPages } from '../../components/catigory-pages';

export const Catigory = () => {
    const {name} = useParams()
    const {data} = useCatalog(name)
  return (
    <>
    
    <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Stack direction="row" spacing={1}>
          <Typography variant="h5" color="#7e7e7e">
            Главная /
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Смартфоны и планшеты
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Stack direction="row" spacing={2}>
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={3}
            sx={{ flex: 1 }}
          >
            {data?.map((item, index) => (
              <Stack key={index} >
                <CatigoryPages {...item} />
              </Stack>
            ))}
          </Stack>

          <Stack
            spacing={2}
            sx={{
              width: "380px",
              padding: 2,
              background: "#fff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
            }}
          >
            <FormControl>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Сортировка
              </Typography>
              <TextField
                select
                SelectProps={{
                  native: true,
                }}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
              >
                <option value="default">По умолчанию</option>
                <option value="price-asc">Цена: по возрастанию</option>
                <option value="price-desc">Цена: по убыванию</option>
              </TextField>
            </FormControl>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Цена</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="row" spacing={2}>
                  <TextField label="От" size="small" fullWidth />
                  <TextField label="До" size="small" fullWidth />
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Цвет</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["черный", "красный", "белый"].map((color) => (
                    <FormControlLabel
                      key={color}
                      control={<Checkbox />}
                      label={color}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Объем памяти</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["32GB", "64GB", "128GB", "256GB"].map((memory) => (
                    <FormControlLabel
                      key={memory}
                      control={<Checkbox />}
                      label={memory}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Экран</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["6.5'' (1600x720) 60 Гц", "6.2'' (2400x1080) Пикс"].map(
                    (screen) => (
                      <FormControlLabel
                        key={screen}
                        control={<Checkbox />}
                        label={screen}
                      />
                    )
                  )}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Оперативная память</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["3 ГБ", "8 ГБ"].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Память</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["32 ГБ, слот для карты памяти", "128GB", "256GB"].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>4 камеры</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["48 МП, 5 МП, 2 МП, 2 МП", "64/12/12", "64/12/14","64/12/15"].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Aккумулятор</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["5000 мА·ч", ].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Беспроводные интерфейсы</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["NFC, Wi-Fi, Bluetooth 5.0","NFC, Wi-Fi, Bluetooth 5.1", "NFC, Wi-Fi, Bluetooth 5.2","NFC, Wi-Fi, Bluetooth 5.3", "NFC, Wi-Fi, Bluetooth 5.4" ].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Интернет</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["4G LTE", "5G LTE" ].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Вес</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {["205 г", "206 г", "207 г","208 г" ].map((ram) => (
                    <FormControlLabel
                      key={ram}
                      control={<Checkbox />}
                      label={ram}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Container></>
  )
}
