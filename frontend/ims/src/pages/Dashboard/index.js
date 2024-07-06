import React from "react";
import { Layout } from "antd";
import HeaderComp from "../../shared/header";
import SiderComp from "../../shared/left panel";
import ContentComp from "../../shared/content";

const App = () => {
  return (
    <Layout>
      <HeaderComp />
      <Layout>
        <SiderComp />
        <ContentComp />
      </Layout>
    </Layout>
  );
};
export default App;
