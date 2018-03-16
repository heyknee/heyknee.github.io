(function(window, undefined) {
  var dictionary = {
    "8932b3f7-92e2-4649-8c79-088803f25bf5": "INSURANCE 101 (2)",
    "93a07085-4fdb-4e7c-bdf9-c3c2fdf3036d": "ABOUT SAY",
    "81b1a94c-9d3d-46da-bbe8-5d2239041642": "INSURANCE SCORE TAB",
    "38a04618-c190-411d-8165-d6f4961a8d5f": "QUOTE START",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "ae150078-9428-48c0-af07-874c6af51b8f": "SAY PRIVACY",
    "49d1483b-ab04-454e-8d85-339079f69848": "INSURANCE SCORE START",
    "9814499c-7fa1-4849-85f6-4db51d52cd20": "IS SCORE STEP 2",
    "2520b2f6-cbec-4548-b7ad-5dd624b2c868": "HOME",
    "eee848a8-0433-46a9-978d-f1aa1d0f9195": "SCORE RESULTS",
    "0c9cb925-931b-4d35-9b1f-dfe4d7fb96a1": "INSURANCE SCORE POST",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);