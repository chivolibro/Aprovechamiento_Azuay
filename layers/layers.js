var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ORGANIZACION_TERRITORIAL_PARROQUIAL_2 = new ol.format.GeoJSON();
var features_ORGANIZACION_TERRITORIAL_PARROQUIAL_2 = format_ORGANIZACION_TERRITORIAL_PARROQUIAL_2.readFeatures(json_ORGANIZACION_TERRITORIAL_PARROQUIAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORGANIZACION_TERRITORIAL_PARROQUIAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORGANIZACION_TERRITORIAL_PARROQUIAL_2.addFeatures(features_ORGANIZACION_TERRITORIAL_PARROQUIAL_2);
var lyr_ORGANIZACION_TERRITORIAL_PARROQUIAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORGANIZACION_TERRITORIAL_PARROQUIAL_2, 
                style: style_ORGANIZACION_TERRITORIAL_PARROQUIAL_2,
                popuplayertitle: 'ORGANIZACION_TERRITORIAL_PARROQUIAL',
                interactive: false,
                title: '<img src="styles/legend/ORGANIZACION_TERRITORIAL_PARROQUIAL_2.png" /> ORGANIZACION_TERRITORIAL_PARROQUIAL'
            });
var format_APROV_2019_2026_CUENCA_3 = new ol.format.GeoJSON();
var features_APROV_2019_2026_CUENCA_3 = format_APROV_2019_2026_CUENCA_3.readFeatures(json_APROV_2019_2026_CUENCA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APROV_2019_2026_CUENCA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APROV_2019_2026_CUENCA_3.addFeatures(features_APROV_2019_2026_CUENCA_3);
var lyr_APROV_2019_2026_CUENCA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APROV_2019_2026_CUENCA_3, 
                style: style_APROV_2019_2026_CUENCA_3,
                popuplayertitle: 'APROV_2019_2026_CUENCA',
                interactive: true,
                title: '<img src="styles/legend/APROV_2019_2026_CUENCA_3.png" /> APROV_2019_2026_CUENCA'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_ORGANIZACION_TERRITORIAL_PARROQUIAL_2.setVisible(true);lyr_APROV_2019_2026_CUENCA_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WorldImagery_1,lyr_ORGANIZACION_TERRITORIAL_PARROQUIAL_2,lyr_APROV_2019_2026_CUENCA_3];
lyr_ORGANIZACION_TERRITORIAL_PARROQUIAL_2.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'DPA_ANIO': 'DPA_ANIO', 'txt': 'txt', 'fcode': 'fcode', });
lyr_APROV_2019_2026_CUENCA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DPA_DESCAN': 'DPA_DESCAN', 'nco': 'nco', 'sce': 'sce', 'vap': 'vap', 'oop': 'oop', 'croop': 'croop', 'nejec': 'nejec', 'crejec': 'crejec', 'codlaf': 'codlaf', 'falaf': 'falaf', 'ndlaf': 'ndlaf', 'teip': 'teip', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ORGANIZACION_TERRITORIAL_PARROQUIAL_2.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'txt': 'TextEdit', 'fcode': 'TextEdit', });
lyr_APROV_2019_2026_CUENCA_3.set('fieldImages', {'OBJECTID': '', 'DPA_DESCAN': '', 'nco': '', 'sce': '', 'vap': '', 'oop': '', 'croop': '', 'nejec': '', 'crejec': '', 'codlaf': '', 'falaf': '', 'ndlaf': '', 'teip': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ORGANIZACION_TERRITORIAL_PARROQUIAL_2.set('fieldLabels', {'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', 'DPA_ANIO': 'no label', 'txt': 'no label', 'fcode': 'no label', });
lyr_APROV_2019_2026_CUENCA_3.set('fieldLabels', {'OBJECTID': 'no label', 'DPA_DESCAN': 'inline label - always visible', 'nco': 'inline label - always visible', 'sce': 'inline label - always visible', 'vap': 'inline label - always visible', 'oop': 'inline label - always visible', 'croop': 'inline label - always visible', 'nejec': 'inline label - always visible', 'crejec': 'inline label - always visible', 'codlaf': 'inline label - always visible', 'falaf': 'inline label - always visible', 'ndlaf': 'inline label - always visible', 'teip': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_APROV_2019_2026_CUENCA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});