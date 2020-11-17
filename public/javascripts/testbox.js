function getQAUsers() {
    $.ajax({
        type: "GET",
        url: "/getQAUsers",
        success: function (data) {
            return data;
        },
    });
}