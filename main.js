function Rectangle (x,y) {
    this.height = x;
    this.width = y;
    this.perimeter = function () { return (x+y)*2;}
    this.area = function () { return x*y;}
}

let rectangle = new Rectangle(5,4);
console.log(rectangle.height, rectangle.width ,rectangle.perimeter(), rectangle.area())

function creatRectangle () {
    let ctx = document.getElementById('myRectangle').getContext('2d');
    let color = 'red';
    let rectangle = new Rectangle(300,400);
    // ctx.beginPath();
    ctx.fillRect(90,10,rectangle.width,rectangle.height);
    ctx.fillStyle = color;
    ctx.fill();
}

creatRectangle();