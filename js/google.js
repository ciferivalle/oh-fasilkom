function myMap() {
    var myCenter = new google.maps.LatLng(-6.3646009, 106.8286886);
    var mapProp = {
        center: myCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}