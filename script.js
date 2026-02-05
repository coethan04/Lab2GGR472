mapboxgl.accessToken = "pk.eyJ1IjoiY29ldGhhbiIsImEiOiJjbWt5ajd0ZmUwOGhuM21wd3lwcTNnZTA5In0.WEiOusvvz_Xz4b7cNisNUQ";

const map = new mapboxgl.Map({
    container:"map" ,
    style:"mapbox://styles/coethan/cml8xzlck00a001s4hovde6c9",
    center:[43.653,-79.369],
    zoom: "12.80"
});


map.on('load', () => {

    map.addSource('uoft-data',{
        type: 'geojson',
        data: {
"type": "FeatureCollection",
"features": [
{
"type": "Feature",
"properties": {
"name": "Roy Thompson Hall",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.386443,
43.646615
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "Toronto City Hall",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.3841,
43.6534
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "Toronto Metropolitan University",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.3792,
43.6577
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "Royal Ontario Museum",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.3948,
43.6677
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "Distillery District",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.359222,
43.650238
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "CN Tower",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.3871,
43.6426
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "Randolph Theatre",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.4109113,
43.6635654
],
"type": "Point"
}
},
{
"type": "Feature",
"properties": {
"name": "Tim Hortons",
"marker-color": "#1b2ebb",
"marker-size": "medium"
},
"geometry": {
"coordinates": [
-79.39,
43.66
],
"type": "Point"
}
}
]
}
    })
})


map.addLayer({
    'id': 'uoft-pnt',
    'type': 'circle',
    'source': 'uoft-data',
    'paint': {
        'circle-radius': 6,
        "circle-color": '#B42222'
    }
})