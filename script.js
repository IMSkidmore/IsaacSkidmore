document.addEventListener("DOMContentLoaded", function () {
    const canvasContainer = document.createElement("div");
    canvasContainer.className = "canvas-container";
    document.body.appendChild(canvasContainer);

    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasContainer.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let isDrawing = false;

    document.addEventListener("mousemove", function (e) {
        if (isDrawing) {
            drawLine(e.clientX, e.clientY);
        }
    });

    document.addEventListener("mousedown", function (e) {
        isDrawing = true;
        ctx.beginPath();
        drawLine(e.clientX, e.clientY);
    });

    document.addEventListener("mouseup", function () {
        isDrawing = false;
    });

    function drawLine(x, y) {
        ctx.lineWidth = 2; // Adjust the thickness of the line
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgb(0, 255, 64)";
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
});
