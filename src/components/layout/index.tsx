import Head from "next/head";
import React from "react";
import { Header } from "./Header";
import * as S from "./styles";

export const Layout = ({
  children,
  title,
}: {
  children: React.ReactElement;
  title?: string;
}) => {
  return (
    <>
      <Head>
        <title>
          {title ? title : "Fillscene - Assistir filmes e series grátis"}
        </title>
      </Head>
      <S.Container>
        <Header />
        <main>{children}</main>
      </S.Container>
    </>
  );
};
