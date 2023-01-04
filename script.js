function initMap() {
    // Create a new map object
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
    // Get the input field for the location
    var input = document.getElementById('location');
    // Create a new Autocomplete object for the input field
    var autocomplete = new google.maps.places.Autocomplete(input);
    // Set the map bounds to the Autocomplete object
    autocomplete.bindTo('bounds', map);
    // Add a marker to the map when a location is selected from the Autocomplete list
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });
    });
}