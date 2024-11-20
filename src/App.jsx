import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Korzina } from "./components/korzina";
import { SaveProdactss } from "./pages/save-prodacts/save-prodacts";
import { Catigory } from "./pages/catigory/catigory";
import { ProfilLayout } from "./layout/profil-layout/profil-layout";
import { UserDocument } from "./pages/user-dacument/user-document";
import { UserZakaz } from "./pages/user-zakaz/user-zakaz";
import { UserAdres } from "./pages/user-adres/user-adres";
import { UserLike } from "./pages/user-like/user-like";
import { UserNatifikation } from "./pages/user-natification/user-natifikation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="korzina" element={<SaveProdactss />} />
        <Route path="korzina/:id" element={<Korzina />} />
        <Route path="catigory/:name" element={<Catigory />} />
        <Route path="profil" element={<ProfilLayout />}>
          <Route index  element={<UserDocument />} />
          <Route path="zakaz" element={<UserZakaz />} />
          <Route path="like" element={<UserLike />} />
          <Route path="adres" element={<UserAdres />} />
          <Route path="natificeshin" element={<UserNatifikation />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
