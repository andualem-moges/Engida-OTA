import React, { Component } from "react";

import { Layout } from "antd";
import SearchBox from "./searchBox/searchBox";

const { Content } = Layout;

class PageContent extends Component {
  state = {};
  render() {
    return (
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <SearchBox />
        </div>
      </Content>
    );
  }
}

export default PageContent;
