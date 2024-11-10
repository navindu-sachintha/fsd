function changeWidth(newWidth) {
    let elem = document.getElementById('mydiv');
    elem.style.width = newWidth + 'px';
   }
   window.onload = function() {
    let elem = document.getElementById('mydiv');
    elem.addEventListener('click', function() {
    let newWidth = prompt('enter new width');
    changeWidth(newWidth);
    });
   };