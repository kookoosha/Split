const colResize = document.getElementById('dragMe');
//берём предыдущий и последующий элемент  (левый и правый блоки)
const leftBlock = colResize.previousElementSibling;
const rightSide = colResize.nextElementSibling;

// mousedown -> 

const mouseDownEvent = function (e) {
    //событие при нажатии
    //получаем координаты мышки
    x = e.clientX;
    y = e.clientY;
    //узнаём текущую ширину левой стороны
    leftWidth = leftBlock.getBoundingClientRect().width;
   //запускаем функцию передвижения и удаления
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseup', mouseUpEvent);
};

const mouseMoveEvent = function (e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    
if(colResize.parentNode.getBoundingClientRect().width != 0) {
    let newLeftWidth = ((leftWidth + dx) * 100) / colResize.parentNode.getBoundingClientRect().width;
    if(newLeftWidth < 30){
        newLeftWidth = 20;
    } if(newLeftWidth > 90){
        newLeftWidth = 90;
    }
    leftBlock.style.width = `${newLeftWidth}%`;
    document.body.style.cursor = 'col-resize';
}

};
const mouseUpEvent = function () {
    document.removeEventListener('mousemove', mouseMoveEvent);
    document.removeEventListener('mouseup', mouseUpEvent);

};

//вешаем событие 
colResize.addEventListener('mousedown', mouseDownEvent);