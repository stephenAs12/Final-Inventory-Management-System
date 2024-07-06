import React from "react";
import { Layout } from "antd";
import HeaderComp from "../../shared/header";
import SiderComp from "../../shared/left panel";

const App = () => {
  return (
    <Layout>
      <HeaderComp />
      <Layout>
        <SiderComp />
      </Layout>
    </Layout>
  );
};
export default App;
