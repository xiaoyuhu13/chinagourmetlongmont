window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
})

function myFunction() {
  document.getElementById("dots").classList.toggle("show");
}

window.onclick = function(e) {
  if(!e.target.matches('.dropbtn')) {
    var modal = document.getElementById("myModal");
    var myDropdown = document.getElementById("dots");
    myDropdown.classList.remove('show');
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
}