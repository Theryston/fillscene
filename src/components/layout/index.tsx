import Head from "next/head";
import React from "react";
import Menu from "./Menu";

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
          <link rel="icon" href="/favicon.ico" />
        </title>
      </Head>
      <S.Container>
        <Menu />
        <main>{children}</main>
      </S.Container>
    </>
  );
};
