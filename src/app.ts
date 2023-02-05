

const colResize = document.getElementById('dragMe') as HTMLDivElement;


//берём предыдущий и последующий элемент  (левый и правый блоки)
const leftBlock = colResize.previousElementSibling as HTMLDivElement

const mouseDownEvent = (leftBlock: HTMLDivElement) => (e: MouseEvent): void => {

    //событие при нажатии
    //получаем координаты мышки
    const x: number = e.clientX;
    const y: number = e.clientY;
    //узнаём текущую ширину левой стороны
    const leftWidth: number = leftBlock.getBoundingClientRect().width;
    //запускаем функцию передвижения и удаления
    document.addEventListener('mousemove', () => mouseMoveEvent(x, y, leftWidth));
    document.addEventListener('mouseup', mouseUpEvent);
};

const mouseMoveEvent = (x: number, y: number, leftWidth: number) => (e: MouseEvent): void => {
    const dx: number = e.clientX - x;
    const dy: number = e.clientY - y;
    const a: DOMRect | undefined = colResize.offsetParent?.getBoundingClientRect()// сделать нормальное имя для переменной
    const newLeftWidth = ((leftWidth + dx) * 100) / a!.width;
    


    
    leftBlock.style.width = `${newLeftWidth}%`;
    document.body.style.cursor = 'col-resize';
};
const mouseUpEvent = function (): void {
    document.removeEventListener('mousemove',()=> mouseMoveEvent());
    document.removeEventListener('mouseup', mouseUpEvent);

};

//вешаем событие 
colResize.addEventListener('mousedown', () => mouseDownEvent(leftBlock));
