import React, { Component } from "react";
import SearchResults from "./searchResults";

import { List } from "antd";
// import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

// const IconText = ({ icon, text }) => (
//   <span>
//     {React.createElement(icon, { style: { marginRight: 8 } })}
//     {text}
//   </span>
// );

class ResultList extends Component {
  state = {};
  render() {
    return (
      <List
        bordered={true}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10
        }}
        dataSource={this.props.lists}
        renderItem={item => (
          <List.Item key={item.name} style={{ padding: "20px 10px" }}>
            <SearchResults lists={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default ResultList;
