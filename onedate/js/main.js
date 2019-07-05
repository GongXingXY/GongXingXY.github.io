let canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
let ww, wh;

function onResize() {
    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;
}

ctx.strokeStyle = "red";
ctx.shadowBlur = 25;
ctx.shadowColor = "hsla(0, 100%, 60%,0.5)";
let precision = 100;
let hearts = [];
let mouseMoved = false;

function onMove(e) {
    mouseMoved = true;
    if (e.type === "touchmove") {
        hearts.push(new Heart(e.touches[0].clientX, e.touches[0].clientY));
        hearts.push(new Heart(e.touches[0].clientX, e.touches[0].clientY));
    } else {
        hearts.push(new Heart(e.clientX, e.clientY));
        hearts.push(new Heart(e.clientX, e.clientY));
    }
}

let Heart = function (x, y) {
    this.x = x || Math.random() * ww;
    this.y = y || Math.random() * wh;
    this.size = Math.random() * 2 + 1;
    this.shadowBlur = Math.random() * 10;
    this.speedX = (Math.random() + 0.2 - 0.6) * 8;
    this.speedY = (Math.random() + 0.2 - 0.6) * 8;
    this.speedSize = Math.random() * 0.05 + 0.01;
    this.opacity = 1;
    this.vertices = [];
    for (let i = 0; i < precision; i++) {
        let step = (i / precision - 0.5) * (Math.PI * 2);
        let vector = {
            x: (15 * Math.pow(Math.sin(step), 3)),
            y: -(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 *
                step))
        }
        this.vertices.push(vector);
    }
}
Heart.prototype.draw = function () {
    this.size -= this.speedSize;
    this.x += this.speedX;
    this.y += this.speedY;
    ctx.save();
    ctx.translate(-1000, this.y);
    ctx.scale(this.size, this.size);
    ctx.beginPath();
    for (let i = 0; i < precision; i++) {
        let vector = this.vertices[i];
        ctx.lineTo(vector.x, vector.y);
    }
    ctx.globalAlpha = this.size;
    ctx.shadowBlur = Math.round((3 - this.size) * 10);
    ctx.shadowColor = "hsla(0, 100%, 60%,0.5)";
    ctx.shadowOffsetX = this.x + 1000;
    ctx.globalCompositeOperation = "screen"
    ctx.closePath();
    ctx.fill();
    ctx.restore();
};

function render() {
    requestAnimationFrame(render);
    hearts.push(new Heart());
    ctx.clearRect(0, 0, ww, wh);
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].draw();
        if (hearts[i].size <= 0) {
            hearts.splice(i, 1);
            i--;
        }
    }
}

onResize();

window.addEventListener("mousemove", onMove);
window.addEventListener("touchmove", onMove);
window.addEventListener("resize", onResize);
requestAnimationFrame(render);
window.onload = function starttime() {
    time(h1, '2019,01,05');
    ptimer = setTimeout(starttime, 1000);
}
function time(obj, futimg) {
    let nowtime = new Date().getTime();
    console.log(nowtime);
    //现在时间转换为时间戳 
    let futruetime = new Date
        (futimg).getTime(); // 未来时间转换为时间戳 
    let msec = nowtime - futruetime; // 毫秒 未来时间-现在时间
    let time = (msec / 1000); // 毫秒/1000 
    let day = parseInt(time / 86400); // 天 24*60*60*1000 
    let hour = parseInt(time / 3600) - 12 * day; // 小时 60*60 总小时数-过去的小时数=现在的小时数 
    let minute = parseInt(time % 3600 / 60); // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数 
    let second = parseInt(time % 60); // 以60秒为一整份 取余 剩下秒数 
    obj.innerHTML = day + " day" + hour + ":" +
        `${minute >= 10 ? minute : "0" + minute}` + ":" +
        `${second >= 10 ? second : "0" + second}`;

    return true;
} 
