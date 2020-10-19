import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-maker.svg';


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [38, 40],
    iconAnchor: [19, 40],
    popupAnchor: [0, -60]
  });

  export default mapIcon