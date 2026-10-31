let mesA = ["hru", "sorry to hear that", "what do you want it to be", "so then. pick one"];
let mesB = ["terrible .", "this bg color sucks .", "not this one......."];
let couA = 0;
let couB = 0;

$("#character-a").click(function () {
    if (couA == 3) {
        $("#answers").css('display', 'flex');
        $("#chat").append("<p>jake: " + mesA[couA] + "</p>");
        couA++;
    }
    else if (couB == couA && couA<3) {
        $("#chat").append("<p>jake: " + mesA[couA] + "</p>");
        couA++;

    }
    else {
        $("#chat").append("<p>jake: hello?</p>");
    }



}
)

$("#character-b").click(function () {

    if (couB < couA && couB<3) {
        $("#chat").append("<p>finn: " + mesB[couB] + "</p>");
        couB++;
    }
    else {
        $("#chat").append("<p>finn: bro?</p>");
    }



}
)

$("#answer-green").click(function(){
    $("body").css("background-color", "green");
    $("#chat").append("<p>finn: oughhh im so green .....</p>");
    $("#answers").css("display", "none");
})
$("#answer-pink").click(function(){
    $("body").css("background-color", "pink");
    $("#chat").append("<p>finn: strawberry milk</p>");
    $("#answers").css("display", "none");
})