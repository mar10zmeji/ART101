let envTitle = "The Forest"
let envElements = ["rocks","trees", "water", "you."]
let coun = 0

$("#btn1").click(function () {
    coun +=1
$("#envOut").after("<img src='imgs/ender.png' class='endman' id='end"+coun+"'>")
});

$("#btn2").click(function () {
    let mainEntity = {
    name: "Enderman",
    type: "hostile",
    mood: "moody",
    isMoving: true,
    favElement: envElements[coun-1]
}
$("#envIn").after("<p>This is anomaly #"+coun+", an "+mainEntity.name+" and it's interested in "+mainEntity.favElement)
});