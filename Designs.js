// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
console.log("Test");
function makeGrid() {
    console.log("Start");
    var width=$('#inputWidth').val();
    var height=$('#inputHeight').val();

    for (let x = 0; x < height; x++) {
        $('#pixelCanvas').append('<tr></tr>');
    }

    for (let y = 0; y < width; y++) {
        $('#pixelCanvas tr').each(function () {
            $(this).append('<td></td>');
        });
    }
}
console.log("End");
var color = $('#colorPicker');
$(document).on("mousedown", "tr td", function () {
var colorValue = color.val();
$(this).css('background-color', colorValue);
$('tr td').bind("mousemove", function () {
    var colorValue = color.val();
    $(this).css('background-color', colorValue);
}).mouseup(function() {
    $('td').unbind('mousemove');
});
$('tr td').on('dblclick',function () {
    $(this).css('background-color', "#FFFFFF")
})
});
