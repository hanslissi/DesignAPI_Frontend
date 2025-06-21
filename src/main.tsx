import "./util/patchLocalStorage";
import { BrowserRouter, Route, Routes } from "react-router";
import { CardPage, CollectionPage, HomePage } from "./pages";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:collectionSlug" element={<CollectionPage />} />
        <Route path="/:collectionSlug/:cardSlug" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
