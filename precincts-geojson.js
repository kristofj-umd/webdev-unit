// load GeoJSON from an external file        
$.getJSON("../data/duluth_precincts_WGS84.geojson",function(data){

    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data,{
        style: function (feature) {

            // calculate third party percent of vote using function
            var thirdPartyPct = calculateThirdPartyPct(feature);

            // assign colors from the ColorBrewer yellow-green scale
            var fill;
            // equal interval classification
            // 7% or less
            if (thirdPartyPct <= 7) {
                fill = '#f7fcb9';
            }
            // 11% or less
            else if (thirdPartyPct <= 11) {
                fill = '#addd8e';
            }
            // 12% or more
            else {
                fill = '#31a354';
            }

            // FIXME: remove existing symbolization and create a diverging
            // symbology based the democrat or republic vote as a percent
            // of the total vote.
            // Use Colorbrewer's 5-class Red-Blue colors for this
            // http://colorbrewer2.org/#type=diverging&scheme=RdBu&n=5

            // return style specification
            return {
                color: '#636363',
                weight: 2,
                fillColor: fill,
                fillOpacity: 0.7
            }
        },

        // do something to each feature
        // in this case create a popup
        onEachFeature: function (feature, layer) {
            var thirdPartyPct = calculateThirdPartyPct(feature);
            // show name of precinct and third party percent in popup
            layer.bindPopup(
                "<h3>" + feature.properties.PCTNAME + "</h3>" +
                "<p>Third Party Vote: " + thirdPartyPct + "%</p>"
            );
        }
    }).addTo(map);
});	

// a function that takes a feature and returns the percent of the vote
// that doesn't belong to Republican or Democrat (ie. Third Party)
function calculateThirdPartyPct(feature) {
    var demVote = feature.properties.USPRSDFL;
    var repVote = feature.properties.USPRSR;
    var totalVote = feature.properties.USPRSTOTAL;
    // third party vote is whatever is left over from dem and rep vote
    var thirdPartyVote = (totalVote - demVote - repVote);
    // calculate as a percent of the total vote
    var thirdPartyPct = Math.round(thirdPartyVote/totalVote*100);
    // return the third party percent for this feature
    return thirdPartyPct;
}
