import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Header style={{ backgroundColor: "dark", float: "right" }}>
          <div className="logo" />
          <div className="nav-menu">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Discover Ethiopia</Menu.Item>
              <Menu.Item key="2">Hotels</Menu.Item>
              <Menu.Item key="3">Tour Sites</Menu.Item>
              <Menu.Item key="4">Transports</Menu.Item>
              <Menu.Item key="5">Join</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    );
  }
}

export default PageHeader;
