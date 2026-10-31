let counter = 0;
let colors = ["green", "blue", "red", "yellow", "purple", "pink", "brown", "beige", "violet", "black", "cyan", "crimson", "aquamarine"];

function paintP(col) {
    $("body").css("background-color", col);
}

$("#nbutton").click(function () {
    counter++;
    if (counter === 67) {
        $("#nbutton").html(Text = "67 67 67");
    }
    else
        $("#nbutton").html(Text = "scientists reveal the " + counter + " " + colors[counter - 1]);
    paintP(colors[counter - 1]);
}
);

// $(".color-circle").css("background-color", $(this).attr(id))

$(".color-circle").click(function () {
    paintP(this.id)
});
