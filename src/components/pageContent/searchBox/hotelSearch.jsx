import React, { Component } from "react";
import { Row, Col, DatePicker, Input, Button } from "antd";

const { RangePicker } = DatePicker;

class HotelSearch extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row>
          <Col
            className="search-inputs"
            xs={21}
            sm={21}
            md={10}
            lg={10}
            xl={10}
          >
            <Input placeholder="Basic usage" style={{ width: "100%" }} />
          </Col>
          <Col
            className="search-inputs"
            xs={21}
            sm={21}
            md={10}
            lg={10}
            xl={10}
          >
            <RangePicker placeholder="Basic usage" style={{ width: "100%" }} />
          </Col>
          <Col className="search-inputs" xs={21} sm={21} md={4} lg={4} xl={3}>
            <Button type="primary" style={{ width: "100%" }}>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HotelSearch;
