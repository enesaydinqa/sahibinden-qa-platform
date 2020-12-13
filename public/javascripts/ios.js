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

            for (let i = 0; i < 99999999; i++) {
                var phones = document.querySelectorAll('.phones  img');
                [].forEach.call(phones, async function(phone) {
                    ws.send(phone.id);
                });

                for (let i = 0; i < 10; i++) {
                    await ws.send("ping")
                    await wait(5000)
                }
            }
        };

        ws.onmessage = function(e) {
            var data = JSON.parse(e.data);
            $("#" + data[0]).removeAttr("src").attr("src", "data:image/jpg;base64," + data[1]);
        };

        ws.onclose = () => { console.log('WebSocket Client Closed'); };
    } else {
        ws.send(false)
        ws.close();
        location.reload();
    }
}