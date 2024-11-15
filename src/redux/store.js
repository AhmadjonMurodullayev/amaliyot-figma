import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import productReducer, { addCart, totalCount } from "./product-reducer";
import { deleteProduct } from "./product-reducer";
import { loadState, saveState } from "../config/store";

const totalCountMiddlware = createListenerMiddleware();
totalCountMiddlware.startListening({
  matcher: isAnyOf(addCart, deleteProduct),
  effect: (action, api) => {
    api.dispatch(totalCount());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddlware) =>
    defaultMiddlware().prepend(totalCountMiddlware.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState().product);
});
