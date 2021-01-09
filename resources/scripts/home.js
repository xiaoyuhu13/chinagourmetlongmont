// Get the modal
var modal = document.getElementById("myModal");
var modalC = document.getElementById("covidModal")

// Get the button that opens the modal
var btn = document.getElementById("orderBtn");
var btn2 = document.getElementById("orderNowBtn");
var btn3 = document.getElementById("orderBtnM");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanC = document.getElementsByClassName("closeC")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modalM.style.display = "none";
  modal.style.display = "block";
}
window.onload = function() {
  modalC.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spanC.onclick = function() {
  modalC.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modalC) {
    modal.style.display = "none";
    modalC.style.display = "none";
  }
}

var modalM = document.getElementById("mobileModal");
var btnM = document.getElementById("mobileBtn");
var spanM = document.getElementsByClassName("closeM")[0];
btnM.onclick = function() {
  modalM.style.display = "block";
}
spanM.onclick = function() {
  modalM.style.display = "none";
}