import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct, toggleAmount } from '../../redux/product-reducer';

export const SaveProdacts = (props) => {
    const dispatch = useDispatch();
  return (
    <Stack
      mb={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: 2, borderBottom: '1px solid #e0e0e0' }}
    >
      <Stack direction="column" spacing={1} sx={{ alignItems: 'flex-start' }}>
        <Box
          component="img"
          src={props.img}
          alt="img"
          sx={{ width: 100, height: 'auto', borderRadius: 1 }}
        />
        <Typography variant="h6" sx={{ fontSize: 18 }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price} sum
        </Typography>
      </Stack>
      <Stack direction="column" alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton
            onClick={() =>
              dispatch(toggleAmount({ id: props.id, type: "increment" }))
            }
          >
            +
          </IconButton>
          <Typography>{props.user_count}</Typography>
          {props.user_count < 2 ? (
            <IconButton
              onClick={() => dispatch(deleteProduct({ id: props.id }))}
            >
              x
            </IconButton>
          ) : (
            <IconButton
              onClick={() =>
                dispatch(toggleAmount({ id: props.id, type: "decrement" }))
              }
            >
              -
            </IconButton>
          )}
        </Stack>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {props.user_price} sum
        </Typography>
      </Stack>
    </Stack>  )
}
