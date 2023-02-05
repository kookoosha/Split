"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colResize = document.getElementById('dragMe');
const leftBlock = colResize.previousElementSibling;
const mouseDownEvent = (leftBlock) => (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const leftWidth = leftBlock.getBoundingClientRect().width;
    document.addEventListener('mousemove', () => mouseMoveEvent(x, y, leftWidth));
    document.addEventListener('mouseup', mouseUpEvent);
};
const mouseMoveEvent = (x, y, leftWidth) => (e) => {
    var _a;
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    const a = (_a = colResize.offsetParent) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    const newLeftWidth = ((leftWidth + dx) * 100) / a.width;
    leftBlock.style.width = `${newLeftWidth}%`;
    document.body.style.cursor = 'col-resize';
};
const mouseUpEvent = function () {
    document.removeEventListener('mousemove', () => mouseMoveEvent());
    document.removeEventListener('mouseup', mouseUpEvent);
};
colResize.addEventListener('mousedown', () => mouseDownEvent(leftBlock));
//# sourceMappingURL=split.js.map