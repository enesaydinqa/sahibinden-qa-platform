function start(el) {

    if (el.checked) {
        var ws = new WebSocket('ws://' + location.host + '/');

        ws.onopen = function() {
            console.log('WebSocket Client Connected');
            ws.send(el.checked);
        };

        ws.onmessage = function(e) {
            document.getElementById("phone1").src = "data:image/jpg;base64," + e.data
            document.getElementById("phone2").src = "data:image/jpg;base64," + e.data
            document.getElementById("phone3").src = "data:image/jpg;base64," + e.data
            document.getElementById("phone4").src = "data:image/jpg;base64," + e.data
            document.getElementById("phone5").src = "data:image/jpg;base64," + e.data
            document.getElementById("phone6").src = "data:image/jpg;base64," + e.data
        };
    } else {
        location.reload();
    }
}