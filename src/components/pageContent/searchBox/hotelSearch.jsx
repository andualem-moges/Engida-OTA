import React, { Component } from "react";
import { Row, Col, DatePicker, Input, Button } from "antd";

const { RangePicker } = DatePicker;

class HotelSearch extends Component {
  state = { searchInputText: "", inputDate: new Date() };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.searchInputText);
  };
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
            <Input
              name="searchInputText"
              value={this.state.searchInputText}
              onChange={this.handleChange}
              className="search-text-input"
              placeholder="Basic usage"
              style={{ width: "100%" }}
            />
          </Col>
          <Col
            className="search-inputs"
            xs={21}
            sm={21}
            md={10}
            lg={10}
            xl={10}
          >
            <RangePicker
              name="inputDate"
              onChange={this.handleChange}
              value={this.state.inputDate}
              className="search-text-input"
              placeholder="Basic usage"
              style={{ width: "100%" }}
            />
          </Col>
          <Col className="search-inputs" xs={21} sm={21} md={4} lg={4} xl={3}>
            <Button
              onClick={() => this.props.onSearch(this.state.searchInputText)}
              className="search-button"
              type="primary"
              size="large"
              style={{ width: "100%", height: "100%" }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HotelSearch;
