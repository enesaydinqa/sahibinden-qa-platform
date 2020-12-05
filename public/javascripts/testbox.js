function saveTestbox(testbox) {

    var textboxNumber = $(testbox).closest('.card').find("p").first().text();
    var use = $(testbox).closest('.card').find(".testbox-use").first().val();
    var issue = $(testbox).closest('.card').find(".issue").first().val();
    var description = $(testbox).closest('.card').find(".description").first().val();

    var formData = { testbox: textboxNumber, testboxUse: use, issueNumber: issue, issueDescription: description };

    $.ajax({
        url: "/testbox/update",
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var tb = $(testbox).closest('.card').find("p").first();

            if (use != "Please Select") {
                tb.css({ "background-color": "#ff5959" });
            } else {
                tb.css({ "background-color": "#dadada" });
            }

            $.notify(data.message, "success");
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}