#How to add a layer to the map embed

To add a layer in the map embed application, simply find the outer-most **"layers"** object (it is right below **"legend"**).

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

The URL *must* point to a **GeoPortal ArcGIS REST** server link as shown in the above example.