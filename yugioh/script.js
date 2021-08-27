function loadJSON(callback) {
    var xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open('GET', './cardlist.json', true);
    xObj.onreadystatechange = function() {
        if (xObj.readyState === 4 && xObj.status === 200) {
            // 2. call your callback function
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
}
  
function init() {
    loadJSON(function(response) {
        var json = JSON.parse(response);
        console.log(json);
    });
}

init();