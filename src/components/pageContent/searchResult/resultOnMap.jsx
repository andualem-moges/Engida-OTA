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
  handleLocations() {
    const location = this.props.lists.map(x => {
      return {
        lat: parseFloat(x.location.split(",")[0]),
        lng: parseFloat(x.location.split(",")[1])
      };
    });
    console.log(location);
    return location;
  }
  // componentDidMount() {
  //   this.setState({ locations: this.props.lists.map(x => x.location) });
  //   console.log("MAP=======" + this.state.locations);
  // }

  // componentWillReceiveProps(nextProps) {
  //   // You don't have to do this check first, but it can help prevent an unneeded render
  //   if (nextProps.startTime !== this.state.startTime) {
  //     this.setState({ locations: this.props.lists.map(x => x.location) });
  //     console.log("MAP=======" + this.state.locations);
  //   }
  // }

  // getCenter() {
  //   const l = this.handleLocations()[0].lat;
  //   const g = this.handleLocations()[0].lat;
  //   const x = {
  //     lat: 0,
  //     lng: 0
  //   };
  //   x.lat = l;
  //   x.lng = g;
  //   return x;
  // }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        // initialCenter={this.handleLocations()[0]}
        initialCenter={{ lat: 8.561886, lng: 39.282356 }}
        // initialCenter={{ lat: this.getCenter().lat, lng: this.getCenter().lng }}
      >
        {this.handleLocations().map(x => (
          <Marker
            key={x.lat}
            name={"Current location"}
            position={{ lat: x.lat, lng: x.lng }}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCdwrKLlxKCZ_nUUs0REHWkg96GlyEuRo8"
})(SimpleMap);
