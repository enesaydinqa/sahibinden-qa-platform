function getQAUsers() {
    $.ajax({
        type: "GET",
        url: "/getQAUsers",
        success: function (data) {
            return data;
        },
    });
}

function saveTestbox(testbox) {

    var textboxNumber = $(testbox).closest('.card').find("p").first().text();
    var use = $(testbox).closest('.card').find(".testbox-use").first().val();
    var issue = $(testbox).closest('.card').find(".issue").first().val();
    var description = $(testbox).closest('.card').find(".description").first().val();

    var formData = { testbox: textboxNumber, testboxUse: use, issueNumber : issue, issueDescription : description};

    $.ajax({
        url: "/testbox/update",
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            $.notify(data.message, "success");
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}