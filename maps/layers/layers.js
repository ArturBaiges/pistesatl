var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_mapawebProvinciadetarragona_1 = new ol.format.GeoJSON();
var features_mapawebProvinciadetarragona_1 = format_mapawebProvinciadetarragona_1.readFeatures(json_mapawebProvinciadetarragona_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapawebProvinciadetarragona_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapawebProvinciadetarragona_1.addFeatures(features_mapawebProvinciadetarragona_1);
var lyr_mapawebProvinciadetarragona_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapawebProvinciadetarragona_1, 
                style: style_mapawebProvinciadetarragona_1,
                popuplayertitle: 'mapaweb — Provinciadetarragona',
                interactive: false,
                title: '<img src="styles/legend/mapawebProvinciadetarragona_1.png" /> mapaweb — Provinciadetarragona'
            });
var format_pistes_2 = new ol.format.GeoJSON();
var features_pistes_2 = format_pistes_2.readFeatures(json_pistes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pistes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pistes_2.addFeatures(features_pistes_2);
var lyr_pistes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pistes_2, 
                style: style_pistes_2,
                popuplayertitle: 'pistes',
                interactive: true,
                title: '<img src="styles/legend/pistes_2.png" /> pistes'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_mapawebProvinciadetarragona_1.setVisible(false);lyr_pistes_2.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_mapawebProvinciadetarragona_1,lyr_pistes_2];
lyr_mapawebProvinciadetarragona_1.set('fieldAliases', {'fid': 'fid', 'CODIPROV': 'CODIPROV', 'NOMPROV': 'NOMPROV', 'CAPPROV': 'CAPPROV', 'AREAP5000': 'AREAP5000', });
lyr_pistes_2.set('fieldAliases', {'fid': 'fid', 'Pistes': 'Pistes', 'Horaris': 'Horaris', 'Ubicació': 'Ubicació', 'Equipaments': 'Equipaments', 'Properes competicions': 'Properes competicions', });
lyr_mapawebProvinciadetarragona_1.set('fieldImages', {'fid': 'TextEdit', 'CODIPROV': 'TextEdit', 'NOMPROV': 'TextEdit', 'CAPPROV': 'TextEdit', 'AREAP5000': 'TextEdit', });
lyr_pistes_2.set('fieldImages', {'fid': 'TextEdit', 'Pistes': 'TextEdit', 'Horaris': 'TextEdit', 'Ubicació': 'TextEdit', 'Equipaments': 'TextEdit', 'Properes competicions': '', });
lyr_mapawebProvinciadetarragona_1.set('fieldLabels', {'fid': 'no label', 'CODIPROV': 'no label', 'NOMPROV': 'no label', 'CAPPROV': 'no label', 'AREAP5000': 'no label', });
lyr_pistes_2.set('fieldLabels', {'fid': 'hidden field', 'Pistes': 'inline label - always visible', 'Horaris': 'inline label - always visible', 'Ubicació': 'inline label - always visible', 'Equipaments': 'inline label - always visible', 'Properes competicions': 'inline label - always visible', });
lyr_pistes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});