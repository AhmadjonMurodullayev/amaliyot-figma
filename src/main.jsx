import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { client } from "./config/query-clinet";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <App />
        <ToastContainer />
        <CssBaseline />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
