(function () {
    var $content = $('#helpOptions').detach(); // Remove modal from page

    $('#help').on('click', function () { // Click handler to open modal
        modal.open({
            content: $content,
            width: 920,
            height: "auto"
        });
    });
}());