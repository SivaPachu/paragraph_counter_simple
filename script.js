var para = document.getElementById("para");
var counter = document.getElementById("counter");
var remaining = document.getElementById("remaining");
var btn = document.getElementById("btn");

para.addEventListener("input", function () {
    var writtenCharacters = para.value.length;
    var leftCharacters = 200 - writtenCharacters;

    counter.textContent = "Written Characters: " + writtenCharacters;
    remaining.textContent = "Left Characters: " + leftCharacters;
});

btn.addEventListener("click", function () {
    para.value = "";

    counter.textContent = "Written Characters: 0";
    remaining.textContent = "Left Characters: 200";
});
