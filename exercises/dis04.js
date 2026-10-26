let treats = 0;

// NEW: an object that stores info about Kaya
let kaya = {
    name: "Kaya",
    age: 2,
    costume: "witch",
    toys: ["ball"]
};

// NEW: arrays of moods and background colors (index 0, 1, 2)
let moods = ["hungry", "happy", "hyper"];
let colors = ["#241b2f", "#3b2f4a", "#5a2e1f"];

let mood = "";


// both treat buttons run this after they change treats
function updatePage() {

    // TODO 1: write an if / else if / else that sets mood:
    //    5 or more treats  ->  moods[2]
    //    1 to 4 treats     ->  moods[1]
    //    0 or less         ->  moods[0]
    // (hint: check the biggest number first!)
    if (treats >= 5) {
        mood = moods[2];
        $("body").css("background-color", colors[2]);
    }
    else if (treats >=1 && treats <=4) {
        mood = moods[1];
        $("body").css("background-color", colors[1]);
    }
    else {
        mood = moods[0];
        $("body").css("background-color", colors[0]);
    }
    // TODO 2: inside each part of your if, also change the background color:
    //    $("body").css("background-color", colors[ ? ]);
    //    (use the same number as the mood!)


    // TODO 3: change this line so the header says:
    //    Kaya the witch has 3 treats and is feeling happy!
    // use kaya.name and kaya.costume instead of typing them, and add the mood
    if (treats==1) { $("#treat-count").html("Kaya the witch has " + treats + " treat and is feeling "+mood);}
    else { $("#treat-count").html("Kaya the witch has " + treats + " treats and is feeling "+mood);}
   

    // OPTIONAL (done early?): fix the grammar!
    //    right now it says "Kaya the witch has 1 treats". make it say "1 treat"
    //    hint: make a variable for the word, and use an if to change it when treats == 1
}


$("#give-button").click(function() {
    treats = treats + 1;
    updatePage();
});

$("#take-button").click(function() {
    // OPTIONAL (done early?): don't let treats go below 0!
    //    hint: only subtract if treats is more than 0

    if (treats > 0)  { treats = treats - 1;
    updatePage();}
   
});


// TODO 5: make the "give kaya a toy" button work (do TODO 4 in dis04.html first!)
//    1. add a toy to kaya.toys with .push()
//    2. show how many toys she has in #toys, using kaya.toys.length
//       e.g.  Kaya has 2 toys!

$("#toyBtn").click(function() {
    let toyCata = ["ball", "bone", "squeaky", "idk"]
    let rn = Math.round((Math.random*3))
    kaya.toys.push(toyCata[rn])
    $("#toys").html("Kaya has "+kaya.toys.length+" toys! Latest one is " + kaya.toys[(kaya.toys.length-1)])
});