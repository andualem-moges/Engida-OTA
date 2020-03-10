import React, { Component } from "react";

import { Layout, Row, Col } from "antd";
import SearchBox from "./searchBox/searchBox";
import ResultList from "./searchResult/resultList";
import SimpleMap from "./searchResult/resultOnMap";
// import Geocode from "react-geocode";

const { Content } = Layout;

// Geocode.setApiKey("AIzaSyDCuVaoihhw8eq4lunE4vQHx0mpWUR7PoI");
// Geocode.enableDebug();
// Geocode.setLanguage("en");

class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputText: "",
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  //Search on the map usign geolocation
  // searchOnMap(keyWord) {
  //   Geocode.fromAddress("kolfe atena tera").then(
  //     response => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       this.setState({ searchInputText: lat + "," + lng });
  //       console.log("here from geolocation---------------- " + lat + " " + lng);
  //       // return (lat + "," + lng);
  //       // console.log(lat, lng);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  handleSearch = searchInputText => {
    this.setState({ searchInputText });
    // this.searchOnMap(searchInputText);
    fetch("http://127.0.0.1:8000/api/hotel/?search=" + searchInputText)
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
        //do something awesome that makes the world a better place
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
    // console.log(searchInputText);
  };
  showSearchResult() {
    return (
      <Row>
        <Col xs={24} sm={24} md={16} lg={15} xl={15}>
          {console.log("look at me=>" + this.state.data + "<=am i joke to u")}
          <ResultList lists={this.state.data} />
        </Col>
        <Col xs={0} sm={0} md={8} lg={9} xl={9}>
          <SimpleMap lists={this.state.data} />
        </Col>
      </Row>
    );
  }

  // componentDidMount() {
  //   fetch("http://127.0.0.1:8000/api/hotel/")
  //     .then(response => {
  //       if (response.status > 400) {
  //         return this.setState(() => {
  //           return { placeholder: "Something went wrong!" };
  //         });
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState(() => {
  //         return {
  //           data,
  //           loaded: true
  //         };
  //       });
  //     });
  // }

  render() {
    console.log("here " + this.state.data + " here");
    return (
      <Content style={{ padding: "0 10px" }}>
        <div className="site-layout-content">
          <SearchBox onSearch={this.handleSearch} />
          <div className="result-list">{this.showSearchResult()}</div>
        </div>
      </Content>
    );
  }
}

export default PageContent;
