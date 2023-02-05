var col_resize = document.getElementById('dragMe');
console.log(document.getElementById('dragMe'));
//берём предыдущий и последующий элемент  (левый и правый блоки)
var leftBlock = col_resize.previousElementSibling;
var rightSide = col_resize.nextElementSibling;
var mouseDownEvent = function (leftBlock) { return function (e) {
    //событие при нажатии
    //получаем координаты мышки
    var x = e.clientX;
    var y = e.clientY;
    //узнаём текущую ширину левой стороны
    var leftWidth = leftBlock.getBoundingClientRect().width;
    //запускаем функцию передвижения и удаления
    document.addEventListener('mousemove', function () { return mouseMoveEvent(x, y, leftWidth); });
    document.addEventListener('mouseup', mouseUpEvent);
}; };
var mouseMoveEvent = function (x, y, leftWidth) { return function (e) {
    var dx = e.clientX - x;
    var dy = e.clientY - y;
    var newLeftWidth = ((leftWidth + dx) * 100) / col_resize.parentNode.getBoundingClientRect().width;
    console.log('newLeftWidth', newLeftWidth);
    leftBlock.style.width = "".concat(newLeftWidth, "%");
    document.body.style.cursor = 'col-resize';
}; };
var mouseUpEvent = function () {
    document.removeEventListener('mousemove', mouseMoveEvent);
    document.removeEventListener('mouseup', mouseUpEvent);
};
//вешаем событие 
col_resize.addEventListener('mousedown', function () { return mouseDownEvent(leftBlock); });
