import React, { Component } from "react";
import Geocode from "react-geocode";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   constructor(props) {
//     super(props);
//     this.setState({
//       center: {
//         lat: this.props.lists[0].location.split(",")[0],
//         lng: this.props.lists[0].location.split(",")[0]
//       },
//       zoom: 15
//     });
//   }

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div className="result-map" style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyCdwrKLlxKCZ_nUUs0REHWkg96GlyEuRo8" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent lat={37.751} lng={-97.822} text="My Marker" />
//           <AnyReactComponent
//             lat={37.751}
//             lng={-97.801}
//             text="Here lies something"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
const mapStyles = {
  width: "100%",
  height: "100%"
};

export class SimpleMap extends Component {
  state = {
    locations: []
  };
  constructor(props) {
    super(props);
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.lists !== this.props.lists) {
      this.setState({ location: this.props.lists.map(x => x.location) });
      console.log("MAP=======" + this.props.lists.map(x => x.location));
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          // position={{ lat: 37.778519, lng: -122.40564 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdwrKLlxKCZ_nUUs0REHWkg96GlyEuRo8"
})(SimpleMap);
