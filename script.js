const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearButton");
const downloadButton = document.getElementById("downloadButton");

canvas.width = 600;
canvas.height = 300;
ctx.strokeStyle = "#000000"; //default color of the marker
ctx.lineWidth = 1; //default thickness of the marker
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY); //initial distance of the drawn content from the cursor
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY); //distance of drawn content from the cursor
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

colorPicker.addEventListener("input", (e) => {
  ctx.strokeStyle = e.target.value;
});

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `signature - ${new Date()}`;
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});
