import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
