import React, { Component } from "react";
import Load from "./Load";

class Locationitems extends Component {
  /*
    Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      locations: "",
      query: "",
      suggestions: true
    };

    this.filterLocations = this.filterLocations.bind(this);
  }

  /*
    Filter Locations based on user query
   */
  filterLocations(event) {
    this.props.closeInfoWindow();
    const { value } = event.target;
    var locations = [];
    this.props.alllocations.forEach(function(location) {
      if (location.longname.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        location.marker.setVisible(true);
        locations.push(location);
      } else {
        location.marker.setVisible(false);
      }
    });

    this.setState({
      locations: locations,
      query: value
    });
  }

  componentWillMount() {
    this.setState({
      locations: this.props.alllocations
    });
  }

  /*
    Render function of LocationList
   */
  render() {
    var locationlist = this.state.locations.map(function(listItem, index) {
      return (
        <Load
          key={index}
          openInfoWindow={this.props.openInfoWindow.bind(this)}
          data={listItem}
        />
      );
    }, this);

    return (
      <div className="search-area">
        <input
          role="search"
          aria-labelledby="filter"
          id="search-field"
          className="search-input"
          type="text"
          placeholder="Filter"
          value={this.state.query}
          onChange={this.filterLocations}
        />
        <ul className="location-list">
          {this.state.suggestions && locationlist}
        </ul>
      </div>
    );
  }
}

export default Locationitems;
