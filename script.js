

const allimg = document.querySelectorAll('img');
allimg.forEach(allimg => allimg.draggable=false);


window.addEventListener('contextmenu',function(e){
    e.preventDefault();
});

window.addEventListener('keydown',function(e){
    e.preventDefault();
});
