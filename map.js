function initMap() {

    var locations = [

      ['Illinois Institute of Technology', 41.83826, -87.62902, 1],

      ['Art Center College of Design', 34.1689, 118.1852, 2],

    ];

    var map = new google.maps.Map(document.getElementById('map'), {

          zoom: 10,

      center: new google.maps.LatLng(41.83826, -87.62902),

    });

    for (var i = 0; i < locations.length; i++) { 

      var marker = new google.maps.Marker({

        position: new google.maps.LatLng(locations[i][1], locations[i][2]),

        map: map

      });

    }

}
