import React, { Component } from "react";
import { Card, Row, Col, Button } from "antd";

class SearchResults extends Component {
  state = {};
  render() {
    return (
      <div className="result">
        <Row>
          <Col xs={24} sm={24} md={10} lg={10} xl={8}>
            <div className="result-image">
              <img
                src="https://cdn.pixabay.com/photo/2019/12/12/13/42/castle-4690710_960_720.jpg"
                alt="llll"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={10} lg={10} xl={15}>
            <div className="result-body">
              <div className="result-name-header">
                <h2>Json International Hotel</h2>
              </div>
              <div className="result-description">
                <p>3 guests 1 bedroom 3 beds 1 bath</p>
                <p>Free parking</p>
                <p>Kithcen</p>
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
