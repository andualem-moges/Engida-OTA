import React, { Component } from "react";

import { Layout, Row, Col } from "antd";
import SearchBox from "./searchBox/searchBox";
import ResultList from "./searchResult/resultList";
import SimpleMap from "./searchResult/resultOnMap";

const { Content } = Layout;

class PageContent extends Component {
  state = {};
  render() {
    return (
      <Content style={{ padding: "0 10px" }}>
        <div className="site-layout-content">
          <SearchBox />
          <div className="result-list">
            <Row>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <ResultList />
              </Col>
              <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                <SimpleMap />
              </Col>
            </Row>
          </div>
        </div>
      </Content>
    );
  }
}

export default PageContent;
