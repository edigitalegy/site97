const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.text');


const readMoreBtns = document.querySelector('.readMoreBtns');
const texts = document.querySelector('.texts');

readMoreBtns.addEventListener('click',(e)=>{
  texts.classList.toggle('show-more');
  if(readMoreBtns.innerText === 'plus'){
    readMoreBtns.innerText = 'moins';
  }else{
    readMoreBtns.innerText = 'plus';
  }
})

readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'plus'){
    readMoreBtn.innerText = 'moins';
  }else{
    readMoreBtn.innerText = 'plus';
  }
})



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}