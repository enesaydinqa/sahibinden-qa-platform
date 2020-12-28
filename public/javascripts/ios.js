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

            await getIosDevice()

            for (let i = 0; i < 99999999; i++) {
                var phones = document.querySelectorAll('.card');

                [].forEach.call(phones, async function(phone) {
                    ws.send(phone.id);
                });

                for (let each = 0; each < 5; each++) {
                    await ws.send("ping")
                    await wait(10000)
                }
            }
        };

        ws.onmessage = function(e) {
            var data = JSON.parse(e.data);
            $.notify("update : " + data[0], "success");
            $("[id='" + data[0] + "'] img").removeAttr("src").attr("src", "data:image/jpg;base64," + data[1]);
        };

        ws.onclose = () => { console.log('WebSocket Client Closed'); };
    } else {
        ws.send(false)
        ws.close();
        location.reload();
    }
}

async function getIosDevice() {
    await new Promise((resolve, reject) => {
        $.ajax({
            url: "/ios/getIosDevices",
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                res.forEach(function(uid) {
                    createPhoneContainer(uid)
                })
                resolve(true)
            }
        });
    });
};

function createPhoneContainer(uid) {
    var card = document.createElement("div");
    card.setAttribute("id", uid);
    card.setAttribute("class", "card ios-device");
    document.querySelector("body").appendChild(card);
    var img = document.createElement("IMG");
    img.setAttribute("src", "img/iphone.png");
    document.querySelector("[id='" + uid + "']").appendChild(img);
    var divPhoneContainer = document.createElement("div");
    divPhoneContainer.setAttribute("class", "phone-container");
    document.querySelector("[id='" + uid + "']").appendChild(divPhoneContainer);
    var deviceuid = document.createElement("h4");
    deviceuid.innerHTML = uid;
    document.querySelector("[id='" + uid + "'] .phone-container").appendChild(deviceuid);
}