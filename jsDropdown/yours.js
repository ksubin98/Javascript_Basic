const dropdown = document.querySelector('.dropdown');
const toggleBtn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const option = document.querySelectorAll('.dropdown-option');
const nextBtn = document.querySelector('.next-button');

toggleBtn.addEventListener('click', function() {
  menu.classList.toggle('show'); //classList 메소드
})

toggleBtn.addEventListener('blur', function() { //blur
  menu.classList.remove('show');
})

option.forEach(function(item) { //forEach
  item.addEventListener('click', function(e){
    const value = e.currentTarget.textContent.trim();
    toggleBtn.textContent = value;
    toggleBtn.classList.add('selected');
    nextBtn.removeAttribute('disabled');
  })
})