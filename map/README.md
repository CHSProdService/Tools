# Open maps embed

This repository holds the current files required to embed an interactive open map into pages for Canada.ca

## How it works

The **maps-cartes-eng/fra.html** file contains an iframe which includes the **data-eng/fra.html** file containing all of the heavy lifting for the map application to actually run. This allows you to embed a map on a page simply by including the **maps-cartes-eng/fra.html** file. 

Basically, the embedded HTML file will do a bunch of set up for the map, and then parse your JSON file to find the layers you want to be on the map. The rest of the heavy lifting and actual FGP stuff is up to the core.js file and the hope that all the layers have been properly set up in FGP.

## How to add layers to the JSON file

Most of the JSON files do not need to be altered in any way.

There are 3 "*base map*" layers that are in both French and English, 2 of them the same on both:

- [Canada Base Map - Simple](http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer?f=jsapi): Base map of Canada, and 
- [Canada Base Map - Elevation (CBME)](http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer?f=jsapi): Elevation map of Canada.

and 1 different depending on language:


- [Canada Base Map - Transportation (CBMT) with labels](http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer?f=jsapi): Roads, waterways, and various other names all in English, or
- [La Carte de Base du Canada - Transport (CBCT)](http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBCT3978/MapServer?f=jsapi): Roads waterwats, and various other names all in French.

To add a layer in the map embed application, simply find the outer-most **"layers"** object (it is right below **"legend"** and above **"baseMaps**").

In the **"layers"** object you will find and array containing objects that look like this:

    {
        "id": "mpa",
        "name": "Marine Protected Areas",
        "layerType": "esriFeature",
        "url": "http://geoportal.gc.ca/arcgis/rest/services/FGP/Marine_Protected_Areas_National/MapServer/0",
        "options": {
            "visibility": {
                "value": true
            },
            "opacity": {
                "value": 1.0
            }
        }
    }
    
All you need to do is change the **"id"**, **"name"** and **"url"** of this object and you will have a new map layer.


More options to look in to can be found in the [fgpv-vpgf github](https://github.com/fgpv-vpgf/fgpv-vpgf) under the “[/src/](https://github.com/fgpv-vpgf/fgpv-vpgf/tree/master/src)” folder. 

**Note:** You can add multiple map layers, the **"layers"** object functions as a JSON array.

The URL *must* point to a **GeoPortal ArcGIS REST** server link as shown in the above example.

To find layers that you can add, [click here](http://geoportal.gc.ca/arcgis/rest/services).

**Note:** When adding a URL layer, be sure you are using the actual layer data, not just the intro page to the data in ArcGIS.

Correct: http://geoportal.gc.ca/arcgis/rest/services/FGP/DFO_ContactInformation_EN/MapServer/0

vs.

Incorrect: http://geoportal.gc.ca/arcgis/rest/services/FGP/DFO_ContactInformation_EN/MapServer

## How to embed a map into a page

Essentially all you will need to do to embed this into a page is add some sort of include, be it an ASP include or an ajax-data-replace, that points to the **maps-cartes-eng/fra.html** file.

    <!--include virtual="/path/maps-cartes/map-carte-eng.html"-->

or

    <div ajax-data-replace="/path/maps-cartes/map-carte-fra.html"></div>

## Resources
- [Our FGP asset directory](http://geoportal.gc.ca/arcgis/rest/services)
- [NRCAN FGP asset directory](http://geoappext.nrcan.gc.ca/arcgis/rest/services)
- [FGP Git repository](https://github.com/fgpv-vpgf)
- [FGP Git website](http://fgpv-vpgf.github.io/)