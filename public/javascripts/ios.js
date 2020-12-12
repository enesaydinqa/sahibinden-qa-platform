<<<<<<< Updated upstream
function start(el) {
    for (loop = 0; loop < 100; loop++) {
        var devices = [
            "c41e0c25fe4c0ce0ef28cf8d4862e08ce5ac46c9",
            "0d123e38d24c6df3d198b576fd6f7396ed46978a",
            "12b0530d88260b3211a4f360ea42c8c945ddeae4",
            "00008030-0018306102E0402E",
            "00008030-0002199E0ED3802E",
            "00008030-000451410E87802E"
        ];

        for (i = 0; i < devices.length; i++) {
            $.ajax({
                url: "/ios/getDeviceBase64",
                type: "POST",
                data: JSON.stringify({ uid: devices[i] }),
                contentType: "application/json; charset=utf-8",
                success: function(data, textStatus, jqXHR) {},
                error: function(jqXHR, textStatus, errorThrown) {}
            });
        }
=======
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

            var formData = { uid: data[0] };

            $.ajax({
                url: "/ios/getDeviceImage",
                type: "POST",
                data: JSON.stringify(formData),
                contentType: "application/json; charset=utf-8",
                async: true,
                success: function(result) {
                    $("#" + data[0]).removeAttr("src").attr("src", "data:image/jpg;base64," + JSON.parse(result).base64);
                }
            });
        };

        ws.onclose = () => { console.log('WebSocket Client Closed'); };
    } else {
        ws.send(false)
        ws.close();
        location.reload();
>>>>>>> Stashed changes
    }
}