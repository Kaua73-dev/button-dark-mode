
let button = document.getElementById('btn-click');
let isDark = false;

button.addEventListener('click', function(){
 if(isDark){
    button.textContent = 'Dark-Mode'
    button.classList.remove('btn-dark');
    button.classList.add('btn-white');
     document.body.classList.remove('dark-mode');
     
     
    
 } else{
    button.textContent = 'White-Mode'
    button.classList.remove('btn-white');
     button.classList.add('btn-dark');
     document.body.classList.add('dark-mode');
 }

 isDark = !isDark;
});




