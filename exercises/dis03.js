let treats = 0;

function treatCheck(c) {
    if (c < 0) {
         $("#treat-count").html("Kaya is " + Math.abs(treats) + " treats in debt.");
    }
    else if(c===0) {
         $("#treat-count").html("Kaya is in balance. 0 treats.");
    }
    else if(c===67) {
         $("#treat-count").html("Her greed sickens me. 67 67 67 ");
    }
    else {  
        $("#treat-count").html("Kaya has " + treats + " treats!");
    }
      
}


// when the "give" button is clicked, add 1 treat and update the header
$("#give-button").click(function() {
    treats = treats + 1;
   treatCheck(treats)
});

$("#take-button").click(function() {
    treats = treats - 1;
    treatCheck(treats)
});

// TODO 6: make the "take away" button work.
// follow the same format as the give button above, but subtract 1 instead.
// (hint: copy the 4 lines above, then change 2 things)



// ===================== OPTIONAL: LEVEL 2 =====================
// Done with TODOs 1-6? Try these!
//
// 2a. Make the "give" button add 2 treats instead of 1.
//
// 2b. Add a reset button in dis03.html (see the note there),
//     then make it set treats back to 0 and update the header.
//     (hint: same format as your other buttons!)

$("#reset").click(function() {
    treats = 0;
     treatCheck(treats)
});


// ============== OPTIONAL: LEVEL 3 (stretch goal) ==============
// Use an if statement so the header changes depending on the count:
//
//    0 treats         ->  "Kaya has no treats!"
//    negative treats  ->  "Kaya owes you 3 treats!"
//    anything else    ->  "Kaya has 5 treats!"
//
// Here's the shape of an if statement:
//
//    if (treats == 0) {
//        // do this
//    } else if (treats < 0) {
//        // do this instead
//    } else {
//        // otherwise, do this
//    }
//
// hint: -treats flips the sign, so if treats is -3, then -treats is 3