function getTags() {

    $.ajax({
        type: "GET",
        url: "/tags/getTags",
        dataType: "json"
    }).then(function (data) {

        var json = JSON.parse(data[0].data_content);

        var tagsArray = [];

        const
            map = fn => {
                const iter = v => v && typeof v === 'object' ? Array.isArray(v) ? v.map(iter) : Object.fromEntries(Object.entries(v).map(([k, v]) => [k, iter(v, fn)])) : fn(v);
                return iter;
            };

        var search = document.getElementById("search").textContent;

        var object = { json },
            addA = map(tag => {

                if (searchTag(tag, search)) {
                    tagsArray.push(tag);
                }
            }),
            result = addA(object);

        var multipleSelect = document.getElementById("selectMultiple");

        $('#selectMultiple').empty();

        var allOptions = tagsArray.toString().split(",");

        allOptions.forEach(function (arg) {
            var option = document.createElement("option");

            switch (arg) {
                case "nativead_tests":
                case "finance_tests":
                case "classified_tests":
                case "S360_tests":
                case "corporate_tests":
                case "search_tests":
                case "individual_tests":
                case "shopping_tests":
                    $(option).addClass('bolden');
                    break;
            }

            option.text = arg;
            multipleSelect.add(option);
        });
    });
}

function searchTag(tag, searchKeyword) {
    if (tag.startsWith("individual_")) {
        return tag.substring(11, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("nativead_")) {
        return tag.substring(9, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("classified_")) {
        return tag.substring(11, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("search_")) {
        return tag.substring(7, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("shopping_")) {
        return tag.substring(9, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("corporate_")) {
        return tag.substring(10, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("finance_")) {
        return tag.substring(8, tag.length).includes(searchKeyword);
    } else if (tag.startsWith("S360_")) {
        return tag.substring(5, tag.length).includes(searchKeyword);
    } else {
        return tag.includes(searchKeyword);
    }
}

function copyClipboardSelectedTags() {
    const multipleSelect = document.getElementById("clipboard");

    var tags = "";

    for (var i = 0; i < multipleSelect.length; i++) {

        if (i !== multipleSelect.length - 1) {
            tags += multipleSelect.options[i].value.concat(", ");
        } else {
            tags += multipleSelect.options[i].value;
        }
    }

    const elem = document.createElement('textarea');
    elem.value = tags;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

function alertNotify() {
    $.notify("Küre etiketlerinden birini seçtiniz. Bu kürenin tüm testlerini koşacaktır.", "info");
}

function changeClipboardValue(selectBox) {
    for (var i = 0; i < selectBox.length; i++) {
        if (selectBox.options[i].selected) {

            switch (selectBox.options[i].value) {
                case "nativead_tests":
                case "finance_tests":
                case "classified_tests":
                case "S360_tests":
                case "corporate_tests":
                case "search_tests":
                case "individual_tests":
                case "shopping_tests":
                    alertNotify();
                    break;
            }

            const option = document.createElement("option");
            option.text = selectBox.options[i].value;
            const multipleSelect = document.getElementById("clipboard");
            if (ifNotExistAddOption(multipleSelect, selectBox.options[i].value) === false) {
                multipleSelect.add(option);
            }
        }
    }
}

function ifNotExistAddOption(el, option) {
    var ifExistOption = false;
    for (var i = 0; i < el.length; i++) {
        if (el.options[i].value === option) {
            ifExistOption = true;
        }
    }
    return ifExistOption;
}

function successCopyClipboardMessage() {
    $.notify("Tags Copied.", "success");
}