function saveExtension() {

    var extensionName = document.getElementById("name").value;
    var extensionDesc = document.getElementById("description").value;
    var extensionLink = document.getElementById("link").value;

    $.ajax({
        url: "/extension/save",
        type: "POST",
        data: JSON.stringify({ name: extensionName, description: extensionDesc, link: extensionLink }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data, textStatus, jqXHR) {
            location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {}
    });
    ß

}