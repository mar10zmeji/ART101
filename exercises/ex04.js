let counter = 0;
let colors = ["green", "blue", "red", "yellow", "purple", "pink", "brown"];


$("#nbutton").click(function () {
    counter ++;
    if (counter === 67) {
        $("#nbutton").html(Text = "67 67 67");
    }
    else 
    $("#nbutton").html(Text = "scientists reveal the " + counter + " " + colors[counter-1]);
    $("body").css("background-color", colors[counter-1] );
}
);



