import { Layout } from "antd";

const { Header } = Layout;

const HeaderComp = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Header</h1>
    </Header>
  );
};

export default HeaderComp;
