import React, { Component } from "react";

import { Card } from "antd";
import { Tabs } from "antd";
import HotelSearch from "./hotelSearch";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <Card bordered={false}>
          {/* <Card bordered={false}> */}
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Hotels" key="Hotels" className="input-box">
              <HotelSearch />
            </TabPane>

            <TabPane tab="Cars" key="Cars">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Tour guides" key="Tour guides">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Sites" key="Sites"></TabPane>
          </Tabs>
          {/* </Card> */}
        </Card>
      </div>
    );
  }
}

export default SearchBox;
