var ws = null;

async function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}

async function start(el) {

    if (el.checked) {

        ws = new WebSocket('ws://' + location.host + '/');

        ws.onopen = async function() {
            console.log('WebSocket Client Connected');
            ws.send(el.checked);

            for (i = 0; i < 999999; i++) {
                ws.send("test");
                console.log("client -> server ping ...");
                await wait(20000)
            }
        };

        ws.onmessage = function(e) {
            var data = JSON.parse(e.data);
            console.log(data[0])
            $("#" + data[0]).removeAttr("src").attr("src", "data:image/jpg;base64," + data[1]);
        };

        ws.onclose = () => { console.log('WebSocket Client Closed'); };
    } else {
        ws.send(false)
        ws.close();
        location.reload();
    }
}