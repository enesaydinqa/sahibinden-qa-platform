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
    }
}