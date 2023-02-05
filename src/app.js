var colResize = document.getElementById('dragMe');
//берём предыдущий и последующий элемент  (левый и правый блоки)
var leftBlock = colResize.previousElementSibling;
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
    var _a;
    var dx = e.clientX - x;
    var dy = e.clientY - y;
    var a = (_a = colResize.offsetParent) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect(); // сделать нормальное имя для переменной
    var newLeftWidth = ((leftWidth + dx) * 100) / a.width;
    leftBlock.style.width = "".concat(newLeftWidth, "%");
    document.body.style.cursor = 'col-resize';
}; };
var mouseUpEvent = function () {
    document.removeEventListener('mousemove', function () { return mouseMoveEvent(); });
    document.removeEventListener('mouseup', mouseUpEvent);
};
//вешаем событие 
colResize.addEventListener('mousedown', function () { return mouseDownEvent(leftBlock); });
