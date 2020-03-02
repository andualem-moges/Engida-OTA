import React, { Component } from "react";
import "./App.css";
import { Layout } from "antd";
import PageHeader from "./components/pageHeader/pageHeader";
import PageContent from "./components/pageContent/pageContent";
import PageFooter from "./components/pageFooter/pageFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <PageHeader />
          <div className="site-content">
            <PageContent className="site-content" />
          </div>
          <PageFooter />
        </Layout>
      </div>
    );
  }
}

export default App;
