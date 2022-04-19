const canvas = document.getElementById('canvas');
console.log(canvas);

const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;

ctx.beginPath();
ctx.moveTo(10,5);
ctx.lineTo(30,15);
ctx.stroke();