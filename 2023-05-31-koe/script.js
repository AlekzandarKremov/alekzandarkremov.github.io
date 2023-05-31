var nappi = document.querySelector(".button")
var nimi = document.querySelector(".nimi")

nappi.addEventListener("click", function() {

var syöte = prompt("Vaihda sivuston nimi kirjoittamalla syötekenttään")
nimi.innerText = syöte

})
