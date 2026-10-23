let count = 0;

let btnGenetics = {
    name: "The Button",
    species: "Webbed Button",
    favFood: "clicks",
    moods: ['happy', "sad", 'angry','clopen', 'dissapointed', 'excited', 'victorious', 'Hi']
}

$("#nbutton").click(function () {
    count += 1;
    let arrayPos = count-1
    let curMood = btnGenetics.moods[arrayPos]
    console.log(count);
      console.log(arrayPos);
      console.log(curMood);

      $("#output").html("<p>I've been clicked " + count+ " times and i am feeling quite " + curMood + " today. </p>")
});