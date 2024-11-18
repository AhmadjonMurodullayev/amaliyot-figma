import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Korzina } from "./components/korzina";
import { Profil } from "./pages/profil/profil";
import { SaveProdactss } from "./pages/save-prodacts/save-prodacts";
import { Catigory } from "./pages/catigory/catigory";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profil" element={<Profil />} />
        <Route path="korzina" element={<SaveProdactss />} />
        <Route path="korzina/:id" element={<Korzina />} />
        <Route path="catigory/:name" element={<Catigory />} />
      </Route>
    </Routes>
  );
}

export default App;
