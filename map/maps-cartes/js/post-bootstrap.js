function queryStringToJSON(q) {
    var pairs = q.search.slice(1).split('&');
    var result = {};
    pairs.forEach(function (pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return JSON.parse(JSON.stringify(result));
}
// grab & process the url
var queryStr = queryStringToJSON(document.location);
var keys = queryStr.keys;
if (keys) {
    // turn keys into an array, pass them to the map
    var keysArr = keys.split(',');
    RV.getMap('fgpmap').restoreSession(keysArr);
} else {
    var bookmark = queryStr.rv;
    console.log(bookmark);
    RV.getMap('fgpmap').initialBookmark(bookmark);
}
