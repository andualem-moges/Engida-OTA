import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/navigationBar";
import MainContent from "./components/mainContent";
import MainFooter from "./components/mainFooter";
import SearchBox from "./components/searchBox";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header className="app-header" theme="light">
            <NavigationBar />
          </Header>
          <Content style={{ padding: '0 0' }}>
            <MainContent />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <MainFooter />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;










