import React from "react";
import { Footer, Header } from "@components/index";
import s from "./Layout.module.scss";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`${s.layout} container`}>{children}</main>
      <Footer />
    </>
  );
};
