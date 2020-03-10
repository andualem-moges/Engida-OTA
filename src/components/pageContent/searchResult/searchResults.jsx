import React, { Component } from "react";
import { Row, Col, Button, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
class SearchResults extends Component {
  state = {};
  render() {
    return (
      <div className="result">
        <Row>
          <Col xs={24} sm={24} md={10} lg={10} xl={8}>
            <div className="result-image">
              <img
                // src="https://cdn.pixabay.com/photo/2019/12/12/13/42/castle-4690710_960_720.jpg"
                // src="https://cdn.pixabay.com/photo/2020/03/01/13/22/namibia-4892831__340.jpg"
                src="./cat4.jpg"
                alt="hotel-pic"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} xl={15}>
            <div className="result-body">
              <div className="result-name-header">
                <h2>{this.props.lists.name}</h2>
              </div>
              <div className="result-description">
                <p>{this.props.lists.hotel_type}</p>
                <p>{this.props.lists.amenties}</p>
                <span>
                  <Rate
                    tooltips={desc}
                    value={this.props.lists.star_level}
                    disabled
                  />
                </span>
              </div>
              <div className="checkout-button">
                <Button type="default">checkout</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchResults;
