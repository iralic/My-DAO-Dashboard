import { Layout } from "antd";
import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import AccountComponent from "./AccountComponent/AccountComponent";
import "./App.css";
import { store } from "./backbone/store";
import DAO from "./Pages/DAO";
import Dashboard from "./Pages/Dashboard";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AccountComponent>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div style={{ color: "#fff" }}>
              <Link to="/">My DAO Dashboard</Link>
            </div>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dao" component={DAO} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>ETH Berlin Zwei</Footer>
        </Layout>
      </AccountComponent>
    </Provider>
  );
};

export default App;
