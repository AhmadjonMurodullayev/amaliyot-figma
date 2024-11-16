import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};
