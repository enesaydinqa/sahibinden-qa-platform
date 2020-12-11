var ws

function start(el) {

    if (el.checked) {
        ws = new WebSocket('ws://' + location.host + '/');

        ws.onopen = function() {
            console.log('WebSocket Client Connected');
            ws.send(el.checked);
        };

        ws.onmessage = function(e) {
            var data = JSON.parse(e.data);
            console.log(data)
            document.getElementById(data[0]).src = "data:image/jpg;base64," + data[1]
        };
    } else {
        ws.send(false)
    }
}