import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Korzina } from "./components/korzina";
import { Profil } from "./pages/profil/profil";
import { Phone } from "./pages/phone/phone";
import { SaveProdactss } from "./pages/save-prodacts/save-prodacts";
import { Copyuter } from "./pages/copyuter/copyuter";
import { AutoTovar } from "./pages/auto-tovar/auto-tovar";
import { GemoryAcsecuar } from "./pages/gemory-acsesuar/gemory-acsecuar";
import { Texnika } from "./pages/tenixa/texnika";
import { Sport } from "./pages/sport/sport";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profil" element={<Profil />} />
        <Route path="korzina" element={<SaveProdactss />} />
        <Route path="korzina/:id" element={<Korzina />} />
        <Route path="phones" element={<Phone />} />
        <Route path="copyuter" element={<Copyuter />} />
        <Route path="auto-tovar" element={<AutoTovar />} />
        <Route path="gemory-acsesuar" element={<GemoryAcsecuar />} />
        <Route path="betavoy-texnika" element={<Texnika/>} />
        <Route path="sport" element={<Sport />} />
      </Route>
    </Routes>
  );
}

export default App;
