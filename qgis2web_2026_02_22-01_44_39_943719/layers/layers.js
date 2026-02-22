var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_kolzaostan23bahman_1 = new ol.format.GeoJSON();
var features_kolzaostan23bahman_1 = format_kolzaostan23bahman_1.readFeatures(json_kolzaostan23bahman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kolzaostan23bahman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kolzaostan23bahman_1.addFeatures(features_kolzaostan23bahman_1);
var lyr_kolzaostan23bahman_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kolzaostan23bahman_1, 
                style: style_kolzaostan23bahman_1,
                popuplayertitle: 'kolza-ostan-23bahman',
                interactive: true,
                title: '<img src="styles/legend/kolzaostan23bahman_1.png" /> kolza-ostan-23bahman'
            });
var format_noghatkolzaostan23bahman_2 = new ol.format.GeoJSON();
var features_noghatkolzaostan23bahman_2 = format_noghatkolzaostan23bahman_2.readFeatures(json_noghatkolzaostan23bahman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_noghatkolzaostan23bahman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_noghatkolzaostan23bahman_2.addFeatures(features_noghatkolzaostan23bahman_2);
var lyr_noghatkolzaostan23bahman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_noghatkolzaostan23bahman_2, 
                style: style_noghatkolzaostan23bahman_2,
                popuplayertitle: 'noghat — kolzaostan23bahman',
                interactive: true,
                title: '<img src="styles/legend/noghatkolzaostan23bahman_2.png" /> noghat — kolzaostan23bahman'
            });
var format_Bank1_3 = new ol.format.GeoJSON();
var features_Bank1_3 = format_Bank1_3.readFeatures(json_Bank1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bank1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bank1_3.addFeatures(features_Bank1_3);
var lyr_Bank1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bank1_3, 
                style: style_Bank1_3,
                popuplayertitle: 'ترسیمات کلزا استان نقاط کارشناسان — Bank1',
                interactive: true,
                title: '<img src="styles/legend/Bank1_3.png" /> ترسیمات کلزا استان نقاط کارشناسان — Bank1'
            });
var format_2_________4 = new ol.format.GeoJSON();
var features_2_________4 = format_2_________4.readFeatures(json_2_________4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_________4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_________4.addFeatures(features_2_________4);
var lyr_2_________4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_________4, 
                style: style_2_________4,
                popuplayertitle: '2_دقیق_بر_اساس_مرز_پلا_ک_مرز_شهرستان',
                interactive: true,
                title: '<img src="styles/legend/2_________4.png" /> 2_دقیق_بر_اساس_مرز_پلا_ک_مرز_شهرستان'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'گلخانه فعال',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> گلخانه فعال'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'گلخانه در حال ساخت',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> گلخانه در حال ساخت'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'گلخانه های راکد',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> گلخانه های راکد'
            });
var format_99_8 = new ol.format.GeoJSON();
var features_99_8 = format_99_8.readFeatures(json_99_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_99_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_99_8.addFeatures(features_99_8);
var lyr_99_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_99_8, 
                style: style_99_8,
                popuplayertitle: 'استان99',
                interactive: true,
                title: '<img src="styles/legend/99_8.png" /> استان99'
            });
var format_99_9 = new ol.format.GeoJSON();
var features_99_9 = format_99_9.readFeatures(json_99_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_99_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_99_9.addFeatures(features_99_9);
var lyr_99_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_99_9, 
                style: style_99_9,
                popuplayertitle: 'استان99',
                interactive: true,
                title: '<img src="styles/legend/99_9.png" /> استان99'
            });
var format_99_10 = new ol.format.GeoJSON();
var features_99_10 = format_99_10.readFeatures(json_99_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_99_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_99_10.addFeatures(features_99_10);
var lyr_99_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_99_10, 
                style: style_99_10,
                popuplayertitle: 'استان99',
                interactive: true,
                title: '<img src="styles/legend/99_10.png" /> استان99'
            });
var format_99_11 = new ol.format.GeoJSON();
var features_99_11 = format_99_11.readFeatures(json_99_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_99_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_99_11.addFeatures(features_99_11);
var lyr_99_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_99_11, 
                style: style_99_11,
                popuplayertitle: 'استان99',
                interactive: true,
                title: '<img src="styles/legend/99_11.png" /> استان99'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_kolzaostan23bahman_1.setVisible(true);lyr_noghatkolzaostan23bahman_2.setVisible(true);lyr_Bank1_3.setVisible(true);lyr_2_________4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr_99_8.setVisible(true);lyr_99_9.setVisible(true);lyr_99_10.setVisible(true);lyr_99_11.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_kolzaostan23bahman_1,lyr_noghatkolzaostan23bahman_2,lyr_Bank1_3,lyr_2_________4,lyr__5,lyr__6,lyr__7,lyr_99_8,lyr_99_9,lyr_99_10,lyr_99_11];
lyr_kolzaostan23bahman_1.set('fieldAliases', {'asadabad': 'asadabad', 'kolza': 'kolza', '34.66936': '34.66936', '47.971283': '47.971283', });
lyr_noghatkolzaostan23bahman_2.set('fieldAliases', {'fid': 'fid', 'asadabad': 'asadabad', 'kolza': 'kolza', '34.66936': '34.66936', '47.971283': '47.971283', });
lyr_Bank1_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'محصول': 'محصول', });
lyr_2_________4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SHAHRESTAN': 'SHAHRESTAN', 'Markaz': 'Markaz', 'Area': 'Area', 'Hectares': 'Hectares', 'OSTAN': 'OSTAN', 'Shape_Leng': 'Shape_Leng', 'area_1': 'area_1', 'شهرست': 'شهرست', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'id': 'id', 'point_id  ': 'point_id  ', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', });
lyr__7.set('fieldAliases', {'fid': 'fid', 'text': 'text', });
lyr_99_8.set('fieldAliases', {'شهرستان': 'شهرستان', 'ردیف': 'ردیف', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)', 'نوع فعالیت': 'نوع فعالیت', 'مساحت واحد': 'مساحت واحد', 'تاریخ صدور مجوز': 'تاریخ صدور مجوز', 'تاریخ صدور پروانه تاسیس': 'تاریخ صدور پروانه تاسیس', 'تاریخ صدور پروانه بهره برداری': 'تاریخ صدور پروانه بهره برداری', 'فعال/غیر فعال': 'فعال/غیر فعال', 'x1': 'x1', 'field_12': 'field_12', 'y1': 'y1', 'field_14': 'field_14', 'x2': 'x2', 'field_16': 'field_16', 'y2': 'y2', 'field_18': 'field_18', 'x3': 'x3', 'field_20': 'field_20', 'y3': 'y3', 'field_22': 'field_22', 'x4': 'x4', 'field_24': 'field_24', 'y4': 'y4', });
lyr_99_9.set('fieldAliases', {'شهرستان': 'شهرستان', 'ردیف': 'ردیف', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)', 'نوع فعالیت': 'نوع فعالیت', 'مساحت واحد': 'مساحت واحد', 'تاریخ صدور مجوز': 'تاریخ صدور مجوز', 'تاریخ صدور پروانه تاسیس': 'تاریخ صدور پروانه تاسیس', 'تاریخ صدور پروانه بهره برداری': 'تاریخ صدور پروانه بهره برداری', 'فعال/غیر فعال': 'فعال/غیر فعال', 'x1': 'x1', 'field_12': 'field_12', 'y1': 'y1', 'field_14': 'field_14', 'x2': 'x2', 'field_16': 'field_16', 'y2': 'y2', 'field_18': 'field_18', 'x3': 'x3', 'field_20': 'field_20', 'y3': 'y3', 'field_22': 'field_22', 'x4': 'x4', 'field_24': 'field_24', 'y4': 'y4', });
lyr_99_10.set('fieldAliases', {'شهرستان': 'شهرستان', 'ردیف': 'ردیف', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)', 'نوع فعالیت': 'نوع فعالیت', 'مساحت واحد': 'مساحت واحد', 'تاریخ صدور مجوز': 'تاریخ صدور مجوز', 'تاریخ صدور پروانه تاسیس': 'تاریخ صدور پروانه تاسیس', 'تاریخ صدور پروانه بهره برداری': 'تاریخ صدور پروانه بهره برداری', 'فعال/غیر فعال': 'فعال/غیر فعال', 'x1': 'x1', 'field_12': 'field_12', 'y1': 'y1', 'field_14': 'field_14', 'x2': 'x2', 'field_16': 'field_16', 'y2': 'y2', 'field_18': 'field_18', 'x3': 'x3', 'field_20': 'field_20', 'y3': 'y3', 'field_22': 'field_22', 'x4': 'x4', 'field_24': 'field_24', 'y4': 'y4', });
lyr_99_11.set('fieldAliases', {'شهرستان': 'شهرستان', 'ردیف': 'ردیف', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)', 'نوع فعالیت': 'نوع فعالیت', 'مساحت واحد': 'مساحت واحد', 'تاریخ صدور مجوز': 'تاریخ صدور مجوز', 'تاریخ صدور پروانه تاسیس': 'تاریخ صدور پروانه تاسیس', 'تاریخ صدور پروانه بهره برداری': 'تاریخ صدور پروانه بهره برداری', 'فعال/غیر فعال': 'فعال/غیر فعال', 'x1': 'x1', 'field_12': 'field_12', 'y1': 'y1', 'field_14': 'field_14', 'x2': 'x2', 'field_16': 'field_16', 'y2': 'y2', 'field_18': 'field_18', 'x3': 'x3', 'field_20': 'field_20', 'y3': 'y3', 'field_22': 'field_22', 'x4': 'x4', 'field_24': 'field_24', 'y4': 'y4', });
lyr_kolzaostan23bahman_1.set('fieldImages', {'asadabad': '', 'kolza': '', '34.66936': '', '47.971283': '', });
lyr_noghatkolzaostan23bahman_2.set('fieldImages', {'fid': '', 'asadabad': '', 'kolza': '', '34.66936': '', '47.971283': '', });
lyr_Bank1_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'محصول': 'TextEdit', });
lyr_2_________4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAHRESTAN': 'TextEdit', 'Markaz': 'TextEdit', 'Area': 'TextEdit', 'Hectares': 'TextEdit', 'OSTAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'area_1': 'TextEdit', 'شهرست': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'id': 'TextEdit', 'point_id  ': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', });
lyr__7.set('fieldImages', {'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_99_8.set('fieldImages', {'شهرستان': '', 'ردیف': '', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': '', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': '', 'نوع فعالیت': '', 'مساحت واحد': '', 'تاریخ صدور مجوز': '', 'تاریخ صدور پروانه تاسیس': '', 'تاریخ صدور پروانه بهره برداری': '', 'فعال/غیر فعال': '', 'x1': '', 'field_12': '', 'y1': '', 'field_14': '', 'x2': '', 'field_16': '', 'y2': '', 'field_18': '', 'x3': '', 'field_20': '', 'y3': '', 'field_22': '', 'x4': '', 'field_24': '', 'y4': '', });
lyr_99_9.set('fieldImages', {'شهرستان': '', 'ردیف': '', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': '', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': '', 'نوع فعالیت': '', 'مساحت واحد': '', 'تاریخ صدور مجوز': '', 'تاریخ صدور پروانه تاسیس': '', 'تاریخ صدور پروانه بهره برداری': '', 'فعال/غیر فعال': '', 'x1': '', 'field_12': '', 'y1': '', 'field_14': '', 'x2': '', 'field_16': '', 'y2': '', 'field_18': '', 'x3': '', 'field_20': '', 'y3': '', 'field_22': '', 'x4': '', 'field_24': '', 'y4': '', });
lyr_99_10.set('fieldImages', {'شهرستان': '', 'ردیف': '', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': '', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': '', 'نوع فعالیت': '', 'مساحت واحد': '', 'تاریخ صدور مجوز': '', 'تاریخ صدور پروانه تاسیس': '', 'تاریخ صدور پروانه بهره برداری': '', 'فعال/غیر فعال': '', 'x1': '', 'field_12': '', 'y1': '', 'field_14': '', 'x2': '', 'field_16': '', 'y2': '', 'field_18': '', 'x3': '', 'field_20': '', 'y3': '', 'field_22': '', 'x4': '', 'field_24': '', 'y4': '', });
lyr_99_11.set('fieldImages', {'شهرستان': '', 'ردیف': '', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': '', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': '', 'نوع فعالیت': '', 'مساحت واحد': '', 'تاریخ صدور مجوز': '', 'تاریخ صدور پروانه تاسیس': '', 'تاریخ صدور پروانه بهره برداری': '', 'فعال/غیر فعال': '', 'x1': '', 'field_12': '', 'y1': '', 'field_14': '', 'x2': '', 'field_16': '', 'y2': '', 'field_18': '', 'x3': '', 'field_20': '', 'y3': '', 'field_22': '', 'x4': '', 'field_24': '', 'y4': '', });
lyr_kolzaostan23bahman_1.set('fieldLabels', {'asadabad': 'no label', 'kolza': 'no label', '34.66936': 'no label', '47.971283': 'no label', });
lyr_noghatkolzaostan23bahman_2.set('fieldLabels', {'fid': 'no label', 'asadabad': 'no label', 'kolza': 'no label', '34.66936': 'no label', '47.971283': 'no label', });
lyr_Bank1_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'محصول': 'no label', });
lyr_2_________4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SHAHRESTAN': 'no label', 'Markaz': 'no label', 'Area': 'no label', 'Hectares': 'no label', 'OSTAN': 'no label', 'Shape_Leng': 'no label', 'area_1': 'no label', 'شهرست': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'id': 'no label', 'point_id  ': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', });
lyr__7.set('fieldLabels', {'fid': 'no label', 'text': 'no label', });
lyr_99_8.set('fieldLabels', {'شهرستان': 'no label', 'ردیف': 'no label', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'no label', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'no label', 'نوع فعالیت': 'no label', 'مساحت واحد': 'no label', 'تاریخ صدور مجوز': 'no label', 'تاریخ صدور پروانه تاسیس': 'no label', 'تاریخ صدور پروانه بهره برداری': 'no label', 'فعال/غیر فعال': 'no label', 'x1': 'no label', 'field_12': 'no label', 'y1': 'no label', 'field_14': 'no label', 'x2': 'no label', 'field_16': 'no label', 'y2': 'no label', 'field_18': 'no label', 'x3': 'no label', 'field_20': 'no label', 'y3': 'no label', 'field_22': 'no label', 'x4': 'no label', 'field_24': 'no label', 'y4': 'no label', });
lyr_99_9.set('fieldLabels', {'شهرستان': 'no label', 'ردیف': 'no label', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'no label', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'no label', 'نوع فعالیت': 'no label', 'مساحت واحد': 'no label', 'تاریخ صدور مجوز': 'no label', 'تاریخ صدور پروانه تاسیس': 'no label', 'تاریخ صدور پروانه بهره برداری': 'no label', 'فعال/غیر فعال': 'no label', 'x1': 'no label', 'field_12': 'no label', 'y1': 'no label', 'field_14': 'no label', 'x2': 'no label', 'field_16': 'no label', 'y2': 'no label', 'field_18': 'no label', 'x3': 'no label', 'field_20': 'no label', 'y3': 'no label', 'field_22': 'no label', 'x4': 'no label', 'field_24': 'no label', 'y4': 'no label', });
lyr_99_10.set('fieldLabels', {'شهرستان': 'no label', 'ردیف': 'no label', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'no label', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'no label', 'نوع فعالیت': 'no label', 'مساحت واحد': 'no label', 'تاریخ صدور مجوز': 'no label', 'تاریخ صدور پروانه تاسیس': 'no label', 'تاریخ صدور پروانه بهره برداری': 'no label', 'فعال/غیر فعال': 'no label', 'x1': 'no label', 'field_12': 'no label', 'y1': 'no label', 'field_14': 'no label', 'x2': 'no label', 'field_16': 'no label', 'y2': 'no label', 'field_18': 'no label', 'x3': 'no label', 'field_20': 'no label', 'y3': 'no label', 'field_22': 'no label', 'x4': 'no label', 'field_24': 'no label', 'y4': 'no label', });
lyr_99_11.set('fieldLabels', {'شهرستان': 'no label', 'ردیف': 'no label', 'نام و نام خانوادگی صاحب مجوز(حقیقی یا حقوقی)': 'no label', 'نام و نام خانوادگی بهره بردار (حقیقی یا حقوقی)': 'no label', 'نوع فعالیت': 'no label', 'مساحت واحد': 'no label', 'تاریخ صدور مجوز': 'no label', 'تاریخ صدور پروانه تاسیس': 'no label', 'تاریخ صدور پروانه بهره برداری': 'no label', 'فعال/غیر فعال': 'no label', 'x1': 'no label', 'field_12': 'no label', 'y1': 'no label', 'field_14': 'no label', 'x2': 'no label', 'field_16': 'no label', 'y2': 'no label', 'field_18': 'no label', 'x3': 'no label', 'field_20': 'no label', 'y3': 'no label', 'field_22': 'no label', 'x4': 'no label', 'field_24': 'no label', 'y4': 'no label', });
lyr_99_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});