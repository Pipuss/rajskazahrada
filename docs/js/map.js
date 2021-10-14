const MAP_COORDS_DEFAULT=[48.0081108251602,23.441951091407088],MAP_ZOOM_DEFAULT=10,LAYER_TEMPLATE="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",ATTRIBUTION='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',ACCESS_TOKEN="pk.eyJ1IjoicGlwdXMiLCJhIjoiY2t1cW14d214Mml1eTJxbzY4aWoxNHp2aSJ9.nIN18DRfT_be-vXie8RNGw",MAIN_ICON_SIZE=[90,68],MAIN_ICON_ANCHOR=[26,52],MAP_POPUP_POSITION=[-3,-76],MAIN_ICON_URL="../img/icons/map-icon.png",MAP=L.map("map-canvas").setView(MAP_COORDS_DEFAULT,MAP_ZOOM_DEFAULT),MAIN_LAYER=L.tileLayer(LAYER_TEMPLATE,{ATTRIBUTION:ATTRIBUTION,maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:ACCESS_TOKEN}).addTo(MAP),MAP_ICON=L.icon({iconUrl:MAIN_ICON_URL,iconSize:MAIN_ICON_SIZE,iconAnchor:MAIN_ICON_ANCHOR,popupAnchor:MAP_POPUP_POSITION}),MAP_MARKER=L.marker(MAP_COORDS_DEFAULT,{icon:MAP_ICON});export{MAP,MAIN_LAYER,MAP_MARKER};