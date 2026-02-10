mapboxgl.accessToken = "pk.eyJ1IjoiY29ldGhhbiIsImEiOiJjbWxneDdjdmUwMzZ1M2RwdXV6cW1tYjBmIn0.IWKAo1T_kI9KvHA_LCdc8g";
const map = new mapboxgl.Map({
    container: "my-map",
    style: "mapbox://styles/coethan/cml8xzlck00a001s4hovde6c9",
    center: [-79.369, 43.653],
    zoom: 12.80
});

map.on('load', () => {

    map.addSource('toronto-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/coethan04/Lab2GGR472/refs/heads/main/map.geojson'
    });
    map.addLayer({
        'id': 'toronto-point',
        'type': 'circle',
        'source': 'toronto-data',
        'paint': {
            'circle-radius': 7,
            'circle-color': '#B41229'
        }
    });
    map.addSource('city-data', {
        'type': 'vector',
        'url': 'mapbox://coethan.8ft8j96j'
    });
    map.addLayer({
        'id': 'city points',
        'type': 'circle',
        'source': 'city-data',
        'paint': {
            'circle-color': '#3810c8ff',
            'circle-radius': 7,
        },
        'source-layer': 'map-37wnnq'
    },
        'toronto-point');
});
map.on('style.load', () => {
    map.setConfigProperty('basemap', 'lightPreset', 'dawn');
    const zoomBasedReveal = (value) => {
        return [
            'interpolate',
            ['linear'],
            ['zoom'],
            11,
            0.0,
            13,
            value
        ];
    };
    map.setRain({
        density: zoomBasedReveal(0.5),
        intensity: 1.0,
        color: '#a8adbc',
        opacity: 0.7,
        vignette: zoomBasedReveal(1.0),
        'vignette-color': '#464646',
        direction: [0, 80],
        'droplet-size': [2.6, 18.2],
        'distortion-strength': 0.7,
        'center-thinning': 0 
    });
});
