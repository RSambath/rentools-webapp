import React, { Component } from 'react';

class SimpleMap extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <div id="map" style={{ height: '100%' }}></div>
      </div>
    );
  }
}

export default SimpleMap;