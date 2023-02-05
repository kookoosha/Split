const col_resize = document.getElementById('dragMe');
//берём предыдущий и последующий элемент  (левый и правый блоки)
const leftBlock = col_resize.previousElementSibling;
const rightSide = col_resize.nextElementSibling;

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

    const newLeftWidth = ((leftWidth + dx) * 100) / col_resize.parentNode.getBoundingClientRect().width;
    leftBlock.style.width = `${newLeftWidth}%`;
    document.body.style.cursor = 'col-resize';
};
const mouseUpEvent = function () {
    document.removeEventListener('mousemove', mouseMoveEvent);
    document.removeEventListener('mouseup', mouseUpEvent);

};

//вешаем событие 
col_resize.addEventListener('mousedown', mouseDownEvent);