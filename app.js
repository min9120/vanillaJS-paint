const canvas = document.getElementById('jsCanvas')
const colors = document.getElementsByClassName('jsColor')
const ctx = canvas.getContext('2d')

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth =2.5;
ctx.strokeStyle =" #212529"
let painting = false; 
function startPainting(){
    painting = true;
}
function stopPainting(){
    painting = false;
}
function onMouseMove(e){
    const x = e.offsetX;
    const y = e.offsetY;
    if(!painting){
        ctx.beginPath()
        ctx.moveTo(x, y)

    }else{
        ctx.lineTo(x, y)
        ctx.stroke()
    }
   
}
function onMouseDown(e){
    painting =true;
  
}
function onChangeColor(e){
    let newColor = e.target.style.backgroundColor
    ctx.strokeStyle =newColor;
}


if(canvas){
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mousedown', startPainting)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}


Array.from(colors).forEach(color => color.addEventListener('click',onChangeColor))//object to array